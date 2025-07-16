export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'coffee' | 'pastries' | 'merchandise';
  popular?: boolean;
  rating: number;
  sizes?: {
    name: string;
    price: number;
  }[];
  customizations?: {
    name: string;
    options: string[];
    additionalCost?: number;
  }[];
  inStock: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedSize?: string;
  customizations?: Record<string, string>;
  totalPrice: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address?: string;
  };
  orderType: 'pickup' | 'delivery';
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'completed' | 'cancelled';
  createdAt: Date;
  estimatedTime?: number;
}
