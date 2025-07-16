import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { state, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleCheckout = () => {
    if (state.items.length === 0) return;
    
    // For now, just show an alert. Later you can integrate with payment processing
    alert(`Total: ₹${state.total.toFixed(2)}\n\nThank you for your order! This would normally proceed to payment.`);
    clearCart();
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream-50 via-amber-50 to-orange-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-coffee-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-200/15 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-8 relative z-10">
          <button
            onClick={() => navigate('/')}
            className="mb-6 flex items-center space-x-2 text-coffee-600 hover:text-coffee-800 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Menu</span>
          </button>

          <div className="text-center py-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50 max-w-md mx-auto">
              <ShoppingCart className="w-20 h-20 text-coffee-300 mx-auto mb-6" />
              <h2 className="text-3xl font-playfair font-bold text-coffee-800 mb-4">Your cart is empty</h2>
              <p className="text-coffee-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
              <button
                onClick={() => navigate('/')}
                className="bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Start Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-coffee-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center space-x-2 text-coffee-600 hover:text-coffee-800 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Menu</span>
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-playfair font-bold text-coffee-800">Your Cart</h1>
                <button
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-700 transition-colors text-sm font-medium"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-6">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 bg-coffee-25 rounded-2xl">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-xl shadow-md"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-coffee-800 truncate">
                        {item.product.name}
                      </h3>
                      
                      {item.selectedSize && (
                        <p className="text-sm text-coffee-600">Size: {item.selectedSize}</p>
                      )}
                      
                      {item.customizations && Object.keys(item.customizations).length > 0 && (
                        <div className="text-sm text-coffee-600">
                          {Object.entries(item.customizations).map(([key, value]) => (
                            <span key={key} className="mr-2">
                              {key}: {value}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <p className="text-lg font-bold text-coffee-600">
                        ₹{(item.totalPrice / item.quantity).toFixed(2)} each
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-coffee-100 hover:bg-coffee-200 flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-4 h-4 text-coffee-600" />
                      </button>
                      
                      <span className="text-lg font-semibold text-coffee-800 w-8 text-center">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-coffee-100 hover:bg-coffee-200 flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-4 h-4 text-coffee-600" />
                      </button>
                    </div>

                    {/* Total Price */}
                    <div className="text-right">
                      <p className="text-lg font-bold text-coffee-800">
                        ₹{item.totalPrice.toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors mt-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 sticky top-8">
              <h2 className="text-2xl font-playfair font-bold text-coffee-800 mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-coffee-600">Items ({state.itemCount}):</span>
                  <span className="font-semibold text-coffee-800">₹{state.total.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-coffee-600">Delivery:</span>
                  <span className="font-semibold text-coffee-800">₹0.00</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-coffee-600">Tax (5%):</span>
                  <span className="font-semibold text-coffee-800">₹{(state.total * 0.05).toFixed(2)}</span>
                </div>
                
                <div className="border-t border-coffee-200 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-coffee-800">Total:</span>
                    <span className="text-2xl font-bold text-coffee-600">
                      ₹{(state.total * 1.05).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Proceed to Checkout</span>
              </button>

              <div className="mt-4 text-center text-sm text-coffee-500">
                Free delivery on orders over ₹500
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
