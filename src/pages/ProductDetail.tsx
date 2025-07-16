import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Plus, Minus, ShoppingCart, Clock, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { Product } from '../types';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-coffee-800 mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-coffee-600 text-white px-6 py-3 rounded-lg hover:bg-coffee-700 transition-colors"
          >
            Back to Menu
          </button>
        </div>
      </div>
    );
  }
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]?.name || '');
  const [customizations, setCustomizations] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const getCurrentPrice = () => {
    const basePrice = selectedSize ? 
      product.sizes?.find(size => size.name === selectedSize)?.price || product.price : 
      product.price;
    
    const customizationCost = Object.values(customizations).reduce((cost, option) => {
      const customization = product.customizations?.find(c => c.options.includes(option));
      return cost + (customization?.additionalCost || 0);
    }, 0);

    return basePrice + customizationCost;
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, customizations);
    // Show success message or navigate back
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  const handleCustomizationChange = (customizationName: string, option: string) => {
    setCustomizations(prev => ({
      ...prev,
      [customizationName]: option
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-coffee-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-200/15 rounded-full blur-3xl"></div>
        
        {/* Floating elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              top: `${20 + (i * 15)}%`,
              left: `${10 + (i * 15) % 85}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: '6s'
            }}
          >
            <div className="w-2 h-3 bg-coffee-400/30 rounded-full transform rotate-12"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center space-x-2 text-coffee-600 hover:text-coffee-800 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Menu</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="animate-slide-in-left">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              {product.popular && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Popular
                </div>
              )}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-3xl">
                  <span className="text-white text-xl font-semibold">Out of Stock</span>
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="animate-slide-in-right">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              {/* Header */}
              <div className="mb-6">
                <h1 className="text-4xl font-playfair font-bold text-coffee-800 mb-3">
                  {product.name}
                </h1>
                <p className="text-coffee-600 text-lg leading-relaxed mb-4">
                  {product.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-amber-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-coffee-600 font-medium">{product.rating}</span>
                  <div className="flex items-center space-x-1 text-coffee-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>5-10 min</span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="text-3xl font-bold text-coffee-600">
                  ₹{getCurrentPrice()}
                  {quantity > 1 && (
                    <span className="text-lg text-coffee-500 ml-2">
                      (₹{getCurrentPrice() * quantity} total)
                    </span>
                  )}
                </div>
              </div>

              {/* Size Selection */}
              {product.sizes && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-coffee-800 mb-3">Size</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size.name}
                        onClick={() => setSelectedSize(size.name)}
                        className={`p-4 rounded-xl border-2 text-center transition-all duration-300 ${
                          selectedSize === size.name
                            ? 'border-coffee-600 bg-coffee-50 text-coffee-800 shadow-lg'
                            : 'border-gray-200 hover:border-coffee-300 hover:bg-coffee-25'
                        }`}
                      >
                        <div className="font-semibold">{size.name}</div>
                        <div className="text-sm text-coffee-600">₹{size.price}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Customizations */}
              {product.customizations && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-coffee-800 mb-3">Customizations</h3>
                  <div className="space-y-4">
                    {product.customizations.map((customization) => (
                      <div key={customization.name}>
                        <label className="block text-sm font-medium text-coffee-700 mb-2">
                          {customization.name}
                          {customization.additionalCost > 0 && (
                            <span className="text-coffee-500 ml-1">
                              (+₹{customization.additionalCost})
                            </span>
                          )}
                        </label>
                        <select
                          value={customizations[customization.name] || customization.options[0]}
                          onChange={(e) => handleCustomizationChange(customization.name, e.target.value)}
                          className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all bg-white"
                        >
                          {customization.options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-coffee-800 mb-3">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-full bg-coffee-100 hover:bg-coffee-200 flex items-center justify-center transition-colors"
                  >
                    <Minus className="w-5 h-5 text-coffee-600" />
                  </button>
                  <span className="text-2xl font-semibold text-coffee-800 w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-full bg-coffee-100 hover:bg-coffee-200 flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-5 h-5 text-coffee-600" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
                  product.inStock
                    ? 'bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-6 h-6" />
                <span>
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </span>
              </button>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-coffee-50 rounded-xl">
                <div className="flex items-center space-x-2 text-coffee-700">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">
                    Made with love and the finest ingredients. Perfect for any time of day.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
