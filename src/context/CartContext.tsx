import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartItem, Product } from '../types';

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  addToCart: (product: Product, quantity: number, selectedSize?: string, customizations?: Record<string, string>) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
} | null>(null);

const generateCartItemId = (product: Product, selectedSize?: string, customizations?: Record<string, string>) => {
  const customizationString = customizations ? JSON.stringify(customizations) : '';
  return `${product.id}-${selectedSize || 'default'}-${btoa(customizationString)}`;
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);

      if (existingItemIndex > -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
        updatedItems[existingItemIndex].totalPrice = 
          updatedItems[existingItemIndex].quantity * 
          (updatedItems[existingItemIndex].selectedSize ? 
            updatedItems[existingItemIndex].product.sizes?.find(s => s.name === updatedItems[existingItemIndex].selectedSize)?.price || updatedItems[existingItemIndex].product.price :
            updatedItems[existingItemIndex].product.price);
        
        return {
          ...state,
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + item.totalPrice, 0),
          itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0)
        };
      }

      const newItems = [...state.items, action.payload];
      return {
        ...state,
        items: newItems,
        total: newItems.reduce((sum, item) => sum + item.totalPrice, 0),
        itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0)
      };

    case 'REMOVE_ITEM':
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      return {
        ...state,
        items: filteredItems,
        total: filteredItems.reduce((sum, item) => sum + item.totalPrice, 0),
        itemCount: filteredItems.reduce((sum, item) => sum + item.quantity, 0)
      };

    case 'UPDATE_QUANTITY':
      const updatedItems = state.items.map(item => 
        item.id === action.payload.id 
          ? { 
              ...item, 
              quantity: action.payload.quantity, 
              totalPrice: action.payload.quantity * (item.selectedSize ? 
                item.product.sizes?.find(s => s.name === item.selectedSize)?.price || item.product.price :
                item.product.price)
            }
          : item
      );
      return {
        ...state,
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + item.totalPrice, 0),
        itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0)
      };

    case 'CLEAR_CART':
      return {
        items: [],
        total: 0,
        itemCount: 0
      };

    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0
  });

  const addToCart = (product: Product, quantity: number, selectedSize?: string, customizations?: Record<string, string>) => {
    const basePrice = selectedSize ? 
      product.sizes?.find(size => size.name === selectedSize)?.price || product.price : 
      product.price;
    
    const customizationCost = customizations ? 
      Object.values(customizations).reduce((cost, option) => {
        const customization = product.customizations?.find(c => c.options.includes(option));
        return cost + (customization?.additionalCost || 0);
      }, 0) : 0;

    const totalPrice = (basePrice + customizationCost) * quantity;

    const cartItem: CartItem = {
      id: generateCartItemId(product, selectedSize, customizations),
      product,
      quantity,
      selectedSize,
      customizations,
      totalPrice
    };

    dispatch({ type: 'ADD_ITEM', payload: cartItem });
  };

  const removeFromCart = (itemId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity } });
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{
      state,
      dispatch,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
