import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Plus, Minus, ShoppingCart, Heart, Sparkles, Clock, Share2, Users, ChefHat, Leaf, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { products } from '../data/products';
import { Product } from '../types';
import { useToast } from '../hooks/use-toast';

const ProductDetailNew: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();
  
  const [selectedSize, setSelectedSize] = useState('');
  const [customizations, setCustomizations] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showNutrition, setShowNutrition] = useState(false);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes?.[0]?.name || '');
      setCustomizations({});
      setQuantity(1);
      setSelectedImageIndex(0);
      setShowNutrition(false);
      
      // Scroll to top when product detail page loads
      window.scrollTo(0, 0);
    }
  }, [id]); // Changed dependency from product to id to prevent unnecessary re-renders

  const getCurrentPrice = () => {
    if (!product) return 0;
    
    const basePrice = selectedSize ? 
      product.sizes?.find(size => size.name === selectedSize)?.price || product.price : 
      product.price;
    
    const customizationCost = Object.values(customizations).reduce((cost, option) => {
      if (!option) return cost;
      
      const customization = product.customizations?.find(c => c.options.includes(option));
      if (!customization) return cost;
      
      const shouldBeFree = option.toLowerCase() === 'none' || 
                          option.toLowerCase() === 'no' ||
                          option.toLowerCase() === 'plain' ||
                          (option === 'Regular' && customization.options[0] === 'Regular');
      
      return shouldBeFree ? cost : cost + (customization.additionalCost || 0);
    }, 0);

    return basePrice + customizationCost;
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity, selectedSize, customizations);
      
      // Show success toast
      toast({
        title: "Added to Cart! 🛒",
        description: `${quantity}x ${product.name}${selectedSize ? ` (${selectedSize})` : ''} added to your cart.`,
        duration: 3000,
      });
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product?.name,
          text: product?.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const toggleWishlist = () => {
    if (product) {
      if (isInWishlist(product.id)) {
        removeFromWishlist(product.id);
        toast({
          title: "Removed from Wishlist 💔",
          description: `${product.name} removed from your wishlist.`,
          duration: 2000,
        });
      } else {
        addToWishlist(product);
        toast({
          title: "Added to Wishlist ❤️",
          description: `${product.name} added to your wishlist.`,
          duration: 2000,
        });
      }
    }
  };

  const handleCustomizationChange = (category: string, option: string) => {
    setCustomizations(prev => ({
      ...prev,
      [category]: option
    }));
  };

  const handleSizeChange = (sizeName: string) => {
    setSelectedSize(sizeName);
    setCustomizations({});
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream-50 via-amber-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-coffee-800 mb-4">Product not found</h1>
          <button
            onClick={() => navigate(-1)} // Use navigate(-1) to go back to previous page without reloading
            className="bg-coffee-600 text-white px-6 py-3 rounded-xl hover:bg-coffee-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Mock data for enhanced features
  const mockImages = [product.image, product.image, product.image];
  const mockReviews = [
    { name: "Sarah M.", rating: 5, comment: "Absolutely delicious! Perfect blend of flavors.", date: "2 days ago" },
    { name: "John D.", rating: 4, comment: "Great coffee, but could be a bit stronger.", date: "1 week ago" },
    { name: "Emily R.", rating: 5, comment: "My new favorite! Will definitely order again.", date: "2 weeks ago" }
  ];
  
  const mockNutrition = {
    calories: 120,
    caffeine: "95mg",
    sugar: "12g",
    fat: "3.5g",
    protein: "8g"
  };

  const preparationTime = product.category === 'coffee' ? '3-5 mins' : '2-3 mins';

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-amber-50 to-orange-50">
      {/* Enhanced Geometric Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-coffee-100/15 to-coffee-200/10 transform rotate-45 translate-x-60 -translate-y-60 rounded-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-100/20 to-amber-200/15 transform rotate-12 -translate-x-48 translate-y-48 rounded-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-bl from-orange-100/12 to-orange-200/8 transform -rotate-30 -translate-x-40 -translate-y-40 rounded-full"></div>
        
        {/* Floating geometric elements with enhanced animation */}
        <div className="absolute top-1/2 left-1/4 w-10 h-10 bg-gradient-to-br from-coffee-400/25 to-coffee-500/20 transform rotate-45 animate-float rounded-lg shadow-lg"></div>
        <div className="absolute top-2/3 right-1/3 w-8 h-8 bg-gradient-to-tl from-amber-400/30 to-amber-500/25 rounded-full animate-float shadow-md" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/2 left-1/3 w-12 h-12 bg-gradient-to-tr from-orange-400/20 to-orange-500/15 transform rotate-12 animate-float rounded-2xl shadow-sm" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Enhanced Header */}
        <div className="bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg sticky top-0 z-20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigate(-1)} // Use navigate(-1) to go back to previous page
                  className="w-12 h-12 bg-coffee-100/50 hover:bg-coffee-200/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                >
                  <ArrowLeft className="w-5 h-5 text-coffee-600" />
                </button>
                <div>
                  <h1 className="text-2xl font-playfair font-bold text-coffee-800">Product Details</h1>
                  <div className="flex items-center space-x-2 text-sm text-coffee-600">
                    <Clock className="w-4 h-4" />
                    <span>{preparationTime}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleShare}
                  className="w-12 h-12 bg-coffee-100/50 hover:bg-coffee-200/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                >
                  <Share2 className="w-5 h-5 text-coffee-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Updated Layout */}
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">

              {/* Main Content Area */}
              <div className="lg:col-span-3 space-y-8">
                
                {/* Product Overview Section */}
                <div id="product-details" className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-xl">
                  <div className="grid lg:grid-cols-2 gap-8">
                    
                    {/* Product Images */}
                    <div className="space-y-4">
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-coffee-100/20 to-coffee-200/10 group max-w-md mx-auto">
                        <img 
                          src={mockImages[selectedImageIndex]} 
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        
                        {product.popular && (
                          <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400/90 to-orange-400/90 backdrop-blur-sm border border-white/30 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center space-x-1.5">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Popular</span>
                          </div>
                        )}

                        {/* Image Navigation */}
                        {mockImages.length > 1 && (
                          <>
                            <button
                              onClick={() => setSelectedImageIndex((prev) => (prev - 1 + mockImages.length) % mockImages.length)}
                              className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300"
                            >
                              <ArrowLeft className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setSelectedImageIndex((prev) => (prev + 1) % mockImages.length)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300"
                            >
                              <ArrowLeft className="w-4 h-4 rotate-180" />
                            </button>
                          </>
                        )}
                      </div>

                      {/* Thumbnails */}
                      {mockImages.length > 1 && (
                        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
                          {mockImages.map((img, index) => (
                            <button
                              key={index}
                              onClick={() => setSelectedImageIndex(index)}
                              className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                                selectedImageIndex === index 
                                  ? 'border-coffee-600 scale-105' 
                                  : 'border-coffee-200 hover:border-coffee-400'
                              }`}
                            >
                              <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Product Information */}
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-coffee-500 uppercase text-xs font-medium tracking-wider bg-coffee-100/60 px-3 py-1.5 rounded-full">
                            {product.category}
                          </span>
                          <div className="text-2xl font-bold text-coffee-800">₹{getCurrentPrice()}</div>
                        </div>
                        
                        <h1 className="text-2xl lg:text-3xl font-playfair font-bold text-coffee-800 mb-4">{product.name}</h1>
                        
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-5 h-5 ${
                                  i < Math.floor(product.rating) ? 'text-amber-500 fill-current' : 'text-coffee-300'
                                }`}
                              />
                            ))}
                            <span className="text-coffee-600 font-semibold ml-2">({product.rating})</span>
                          </div>
                          <div className="flex items-center space-x-1 text-coffee-500">
                            <Users className="w-4 h-4" />
                            <span className="text-sm">150+ reviews</span>
                          </div>
                        </div>

                        <p className="text-coffee-700 leading-relaxed mb-6">{product.description}</p>
                        
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-coffee-50/60 rounded-xl p-4 text-center">
                            <div className="flex items-center justify-center space-x-1.5 mb-2">
                              <Clock className="w-4 h-4 text-coffee-600" />
                              <span className="text-coffee-700 font-medium text-sm">Prep Time</span>
                            </div>
                            <div className="text-coffee-800 font-semibold">{preparationTime}</div>
                          </div>
                          <div className="bg-coffee-50/60 rounded-xl p-4 text-center">
                            <div className="flex items-center justify-center space-x-1.5 mb-2">
                              <ChefHat className="w-4 h-4 text-coffee-600" />
                              <span className="text-coffee-700 font-medium text-sm">Quality</span>
                            </div>
                            <div className="text-coffee-800 font-semibold">Premium</div>
                          </div>
                          <div className="bg-coffee-50/60 rounded-xl p-4 text-center">
                            <div className="flex items-center justify-center space-x-1.5 mb-2">
                              <Leaf className="w-4 h-4 text-green-600" />
                              <span className="text-green-700 font-medium text-sm">Organic</span>
                            </div>
                            <div className="text-green-800 font-semibold">Certified</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Size Selection Section */}
                {product.sizes && product.sizes.length > 0 && (
                  <div id="size-options" className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-xl">
                    <h2 className="text-xl font-semibold text-coffee-800 mb-4">Choose Your Size</h2>
                    <div className="grid grid-cols-3 gap-6">
                      {product.sizes.map((size) => (
                        <button
                          key={size.name}
                          onClick={() => handleSizeChange(size.name)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                            selectedSize === size.name
                              ? 'border-coffee-600 bg-coffee-50 shadow-lg transform scale-105'
                              : 'border-coffee-200 hover:border-coffee-400 hover:scale-102'
                          }`}
                        >
                          <div className="font-bold text-coffee-800 text-base mb-1">{size.name}</div>
                          <div className="text-coffee-600 text-sm">₹{size.price}</div>
                          <div className="text-coffee-500 text-xs mt-1">
                            {size.name === 'Small' ? '8 oz' : size.name === 'Medium' ? '12 oz' : '16 oz'}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Customizations Section */}
                {product.customizations && product.customizations.length > 0 && (
                  <div id="customizations" className="space-y-6">
                    <h2 className="text-2xl font-semibold text-coffee-800">Customize Your Order</h2>
                    {product.customizations.map((customization) => (
                      <div key={customization.name} className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-xl">
                        <h3 className="text-xl font-semibold text-coffee-800 mb-4">
                          {customization.name}
                          {customization.additionalCost !== undefined && customization.additionalCost > 0 && (
                            <span className="text-sm text-coffee-600 font-normal ml-2">
                              (+₹{customization.additionalCost} each)
                            </span>
                          )}
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {customization.options.map((option) => (
                            <button
                              key={option}
                              onClick={() => handleCustomizationChange(customization.name, option)}
                              className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                                customizations[customization.name] === option
                                  ? 'border-coffee-600 bg-coffee-50 shadow-md transform scale-105'
                                  : 'border-coffee-200 hover:border-coffee-400 hover:scale-102'
                              }`}
                            >
                              <span className="text-coffee-800 font-medium">{option}</span>
                              {customization.additionalCost && 
                                customization.additionalCost > 0 &&
                                !['none', 'no', 'plain', 'regular'].includes(option.toLowerCase()) && (
                                  <div className="text-sm text-coffee-600 mt-1">+₹{customization.additionalCost}</div>
                                )
                              }
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Nutrition Section */}
                <div id="nutrition" className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-xl">
                  <h2 className="text-2xl font-semibold text-coffee-800 mb-6">Nutrition Information</h2>
                  <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                    {Object.entries(mockNutrition).map(([key, value]) => (
                      <div key={key} className="text-center bg-coffee-50/50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-coffee-800 mb-1">{value}</div>
                        <div className="text-coffee-600 capitalize text-sm">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-amber-50/50 rounded-xl p-4 border border-amber-200/50">
                    <h4 className="font-semibold text-amber-800 mb-2">Allergen Information</h4>
                    <p className="text-amber-700">Contains: Milk, Soy. May contain traces of nuts and gluten.</p>
                  </div>
                </div>

                {/* Reviews Section */}
                <div id="reviews" className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-xl">
                  <h2 className="text-2xl font-semibold text-coffee-800 mb-6">Customer Reviews</h2>
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-coffee-800 mb-2">{product.rating}</div>
                      <div className="flex items-center justify-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(product.rating) ? 'text-amber-500 fill-current' : 'text-coffee-300'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-coffee-600">Based on 150+ reviews</div>
                    </div>
                    
                    <div className="lg:col-span-2 space-y-4">
                      {mockReviews.map((review, index) => (
                        <div key={index} className="bg-coffee-50/50 rounded-xl p-4 border border-coffee-100/50">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-coffee-800">{review.name}</span>
                            <span className="text-sm text-coffee-500">{review.date}</span>
                          </div>
                          <div className="flex items-center space-x-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating ? 'text-amber-500 fill-current' : 'text-coffee-300'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-coffee-700 leading-relaxed">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar - Order Summary & Actions */}
              <div className="lg:col-span-1">
                <div className="space-y-6 lg:sticky lg:top-24">
                  
                  {/* Order Summary */}
                  <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
                    <h3 className="text-lg font-semibold text-coffee-800 mb-4">Order Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-coffee-600 text-sm">Base Price</span>
                        <span className="font-medium text-coffee-800">₹{selectedSize ? product.sizes?.find(s => s.name === selectedSize)?.price || product.price : product.price}</span>
                      </div>
                      
                      {Object.entries(customizations).filter(([_, value]) => value && !['none', 'no', 'plain', 'regular'].includes(value.toLowerCase())).map(([category, option]) => {
                        const customization = product.customizations?.find(c => c.name === category);
                        return customization?.additionalCost ? (
                          <div key={category} className="flex justify-between items-center">
                            <span className="text-coffee-600 text-sm">{option}</span>
                            <span className="font-medium text-coffee-800">+₹{customization.additionalCost}</span>
                          </div>
                        ) : null;
                      })}
                      
                      <div className="border-t border-coffee-100/50 pt-3">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-coffee-800">Subtotal</span>
                          <span className="font-bold text-coffee-800">₹{getCurrentPrice()}</span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="font-semibold text-coffee-800">Quantity</span>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => setQuantity(Math.max(1, quantity - 1))}
                              className="w-7 h-7 bg-coffee-100 hover:bg-coffee-200 rounded-lg flex items-center justify-center transition-all duration-300"
                            >
                              <Minus className="w-3 h-3 text-coffee-600" />
                            </button>
                            <span className="font-semibold text-coffee-800 min-w-[2rem] text-center">{quantity}</span>
                            <button
                              onClick={() => setQuantity(quantity + 1)}
                              className="w-7 h-7 bg-coffee-100 hover:bg-coffee-200 rounded-lg flex items-center justify-center transition-all duration-300"
                            >
                              <Plus className="w-3 h-3 text-coffee-600" />
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-3 pt-3 border-t border-coffee-100/50">
                          <span className="text-lg font-bold text-coffee-800">Total</span>
                          <span className="text-xl font-bold text-coffee-800">₹{getCurrentPrice() * quantity}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={handleAddToCart}
                      className="w-full bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2 mt-4"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
                    <h3 className="text-lg font-semibold text-coffee-800 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <button
                        onClick={toggleWishlist}
                        className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg transition-all duration-300 ${
                          product && isInWishlist(product.id)
                            ? 'bg-red-50 text-red-700 border border-red-200' 
                            : 'bg-coffee-50 text-coffee-700 border border-coffee-200 hover:bg-coffee-100'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${product && isInWishlist(product.id) ? 'fill-current' : ''}`} />
                        <span className="text-sm font-medium">{product && isInWishlist(product.id) ? 'Wishlisted' : 'Add to Wishlist'}</span>
                      </button>
                      
                      <button
                        onClick={handleShare}
                        className="w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg bg-coffee-50 text-coffee-700 border border-coffee-200 hover:bg-coffee-100 transition-all duration-300"
                      >
                        <Share2 className="w-4 h-4" />
                        <span className="text-sm font-medium">Share Product</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailNew;
