import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

const WishlistPage: React.FC = () => {
  const navigate = useNavigate();
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart(product, 1, product.sizes?.[0]?.name || '', {});
  };

  const handleViewProduct = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-amber-50 to-orange-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg sticky top-0 z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate(-1)}
                className="w-12 h-12 bg-coffee-100/50 hover:bg-coffee-200/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <ArrowLeft className="w-5 h-5 text-coffee-600" />
              </button>
              <div>
                <h1 className="text-2xl font-playfair font-bold text-coffee-800">My Wishlist</h1>
                <p className="text-sm text-coffee-600">{wishlistItems.length} items saved</p>
              </div>
            </div>
            
            {wishlistItems.length > 0 && (
              <button
                onClick={clearWishlist}
                className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-700 border border-red-200 rounded-lg hover:bg-red-100 transition-all duration-300"
              >
                <Trash2 className="w-4 h-4" />
                <span className="text-sm font-medium">Clear All</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-6xl mx-auto">
          {wishlistItems.length === 0 ? (
            // Empty Wishlist State
            <div className="text-center py-16">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-xl max-w-md mx-auto">
                <Heart className="w-16 h-16 text-coffee-300 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-coffee-800 mb-4">Your Wishlist is Empty</h2>
                <p className="text-coffee-600 mb-6">
                  Start adding your favorite coffee items to your wishlist to save them for later!
                </p>
                <button
                  onClick={() => navigate('/')}
                  className="bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Browse Menu
                </button>
              </div>
            </div>
          ) : (
            // Wishlist Items Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((product) => (
                <div key={product.id} className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                    />
                    {product.popular && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-400/90 to-orange-400/90 text-white px-2 py-1 rounded-full text-xs font-bold">
                        Popular
                      </div>
                    )}
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="absolute top-3 right-3 w-8 h-8 bg-red-50 hover:bg-red-100 text-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Heart className="w-4 h-4 fill-current" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-coffee-500 uppercase text-xs font-medium tracking-wider bg-coffee-100/60 px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-coffee-800 group-hover:text-coffee-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-coffee-600 text-sm line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-coffee-800">₹{product.price}</span>
                      <div className="flex items-center space-x-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(product.rating) ? 'text-amber-500' : 'text-coffee-300'}>
                            ★
                          </span>
                        ))}
                        <span className="text-coffee-600 text-sm ml-1">({product.rating})</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 pt-2">
                      <button
                        onClick={() => handleViewProduct(product.id)}
                        className="flex-1 bg-coffee-100 hover:bg-coffee-200 text-coffee-800 py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="flex items-center justify-center space-x-1 bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm hover:scale-105"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
