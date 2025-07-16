import React, { useState } from 'react';
import { X, Star, Plus, Minus, ShoppingCart, Heart, Sparkles, Clock, Share2, Users, ChefHat, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [customizations, setCustomizations] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showNutrition, setShowNutrition] = useState(false);
  const { addToCart } = useCart();

  // Reset state when product changes
  React.useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes?.[0]?.name || '');
      setCustomizations({});
      setQuantity(1);
      setSelectedImageIndex(0);
      setIsWishlisted(false);
      setShowNutrition(false);
    }
  }, [product]);

  // Handle scroll lock and ESC key
  React.useEffect(() => {
    if (isOpen) {
      // Disable background scroll
      document.body.style.overflow = 'hidden';
      
      // Handle ESC key
      const handleEscKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleEscKey);
      
      // Cleanup function
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscKey);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const getCurrentPrice = () => {
    const basePrice = selectedSize ? 
      product.sizes?.find(size => size.name === selectedSize)?.price || product.price : 
      product.price;
    
    const customizationCost = Object.values(customizations).reduce((cost, option) => {
      if (!option) return cost;
      
      // Find the customization that contains this option
      const customization = product.customizations?.find(c => c.options.includes(option));
      if (!customization) return cost;
      
      // Check if this option should be free (None, No, Plain, or first option like Regular milk)
      const shouldBeFree = option.toLowerCase() === 'none' || 
                          option.toLowerCase() === 'no' ||
                          option.toLowerCase() === 'plain' ||
                          (option === 'Regular' && customization.options[0] === 'Regular');
      
      return shouldBeFree ? cost : cost + (customization.additionalCost || 0);
    }, 0);

    return basePrice + customizationCost;
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, customizations);
    onClose();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  // Mock data for enhanced features
  const mockImages = [product.image, product.image, product.image]; // In real app, product would have multiple images
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

  const handleCustomizationChange = (category: string, option: string) => {
    setCustomizations(prev => ({
      ...prev,
      [category]: option
    }));
  };

  const handleSizeChange = (sizeName: string) => {
    setSelectedSize(sizeName);
    // Reset all customizations when size changes
    setCustomizations({});
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if clicking the backdrop, not the modal content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 max-w-6xl w-full h-[90vh] flex flex-col">
        {/* Enhanced Header */}
        <div className="flex items-center justify-between p-6 border-b border-coffee-100/30 flex-shrink-0">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-playfair font-bold text-coffee-800">Product Details</h2>
            <div className="flex items-center space-x-2 text-sm text-coffee-600">
              <Clock className="w-4 h-4" />
              <span>{preparationTime}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={handleShare}
              className="w-10 h-10 bg-coffee-100/50 hover:bg-coffee-200/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <Share2 className="w-4 h-4 text-coffee-600" />
            </button>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-coffee-100/50 hover:bg-coffee-200/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <X className="w-5 h-5 text-coffee-600" />
            </button>
          </div>
        </div>

        {/* Enhanced Content */}
        <div className="flex-1 p-6 grid lg:grid-cols-3 gap-6 min-h-0">
          {/* Left Column - Enhanced Product Images */}
          <div className="lg:col-span-1 flex flex-col space-y-4">
            {/* Main Image with Zoom */}
            <div className="relative flex-1 rounded-2xl overflow-hidden bg-coffee-50/30 shadow-inner group">
              <img 
                src={mockImages[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-zoom-in"
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400/90 to-orange-400/90 backdrop-blur-sm border border-white/30 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center space-x-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Popular</span>
                </div>
              )}

              {/* Enhanced Heart Icon */}
              <button
                onClick={toggleWishlist}
                className={`absolute top-4 right-4 w-10 h-10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                  isWishlisted 
                    ? 'bg-red-500/80 text-white' 
                    : 'bg-white/20 text-white/80 hover:text-red-400 hover:bg-white/30'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>

              {/* Price Badge */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm border border-white/30 text-coffee-800 px-4 py-2 rounded-full font-bold text-xl shadow-lg">
                ₹{getCurrentPrice()}
              </div>

              {/* Image Navigation Arrows */}
              {mockImages.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImageIndex((prev) => (prev - 1 + mockImages.length) % mockImages.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <Minus className="w-4 h-4 rotate-90" />
                  </button>
                  <button
                    onClick={() => setSelectedImageIndex((prev) => (prev + 1) % mockImages.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <Plus className="w-4 h-4 rotate-90" />
                  </button>
                </>
              )}
            </div>

            {/* Image Thumbnails */}
            {mockImages.length > 1 && (
              <div className="flex space-x-2">
                {mockImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-1 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
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

          {/* Middle Column - Product Details & Options */}
          <div className="lg:col-span-1 flex flex-col space-y-4 min-h-0">
            {/* Enhanced Basic Info */}
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-playfair font-bold text-coffee-800 mb-3">{product.name}</h1>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-amber-500 fill-current'
                            : 'text-coffee-300'
                        }`}
                      />
                    ))}
                    <span className="text-coffee-600 font-semibold">({product.rating})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-coffee-500">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">150+ reviews</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-coffee-500 uppercase text-xs font-medium tracking-wider bg-coffee-100/50 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  {product.category === 'coffee' && (
                    <div className="flex items-center space-x-1 text-green-600 bg-green-100/50 px-2 py-1 rounded-full">
                      <Leaf className="w-3 h-3" />
                      <span className="text-xs font-medium">Organic</span>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-coffee-700 leading-relaxed mb-4">{product.description}</p>
              
              {/* Quick Info Pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center space-x-1 bg-coffee-100/50 px-3 py-1 rounded-full text-sm">
                  <ChefHat className="w-4 h-4 text-coffee-600" />
                  <span className="text-coffee-700">Handcrafted</span>
                </div>
                <div className="flex items-center space-x-1 bg-coffee-100/50 px-3 py-1 rounded-full text-sm">
                  <Clock className="w-4 h-4 text-coffee-600" />
                  <span className="text-coffee-700">{preparationTime}</span>
                </div>
              </div>
            </div>

            {/* Enhanced Options Area */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-2" style={{ scrollbarWidth: 'thin' }}>
              {/* Size Selection - Enhanced */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-coffee-800 mb-3 flex items-center">
                    <span>Size</span>
                    <span className="ml-2 text-sm text-coffee-500 font-normal">Choose your perfect size</span>
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size.name}
                        onClick={() => handleSizeChange(size.name)}
                        className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                          selectedSize === size.name
                            ? 'border-coffee-600 bg-coffee-50 shadow-md transform scale-105'
                            : 'border-coffee-200 hover:border-coffee-400 hover:shadow-sm'
                        }`}
                      >
                        <div className="font-semibold text-coffee-800">{size.name}</div>
                        <div className="text-coffee-600 text-sm">₹{size.price}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Enhanced Customizations */}
              {product.customizations && product.customizations.length > 0 && (
                <div className="space-y-4">
                  {product.customizations.map((customization) => (
                    <div key={customization.name}>
                      <h3 className="text-lg font-semibold text-coffee-800 mb-3">
                        {customization.name}
                        {customization.additionalCost !== undefined && (
                          <span className="text-sm text-coffee-600 font-normal ml-2">
                            (+₹{customization.additionalCost} each)
                          </span>
                        )}
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {customization.options.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleCustomizationChange(customization.name, option)}
                            className={`p-3 rounded-xl border-2 text-left transition-all duration-300 ${
                              customizations[customization.name] === option
                                ? 'border-coffee-600 bg-coffee-50 shadow-md transform scale-105'
                                : 'border-coffee-200 hover:border-coffee-400 hover:shadow-sm'
                            }`}
                          >
                            <span className="text-coffee-800 font-medium">{option}</span>
                            {option.toLowerCase() === 'none' || option.toLowerCase() === 'no' || option.toLowerCase() === 'plain' ? (
                              <div className="text-xs text-green-600 mt-1">Free</div>
                            ) : (
                              customization.additionalCost && (
                                <div className="text-xs text-coffee-600 mt-1">+₹{customization.additionalCost}</div>
                              )
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Enhanced Bottom Actions */}
            <div className="flex-shrink-0 space-y-4 pt-4 border-t border-coffee-100/30">
              {/* Quantity Controls - Enhanced */}
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-coffee-800">Quantity</span>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 bg-coffee-100 hover:bg-coffee-200 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
                  >
                    <Minus className="w-4 h-4 text-coffee-600" />
                  </button>
                  <span className="text-xl font-semibold text-coffee-800 min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 bg-coffee-100 hover:bg-coffee-200 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
                  >
                    <Plus className="w-4 h-4 text-coffee-600" />
                  </button>
                </div>
              </div>

              {/* Enhanced Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 text-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart - ₹{getCurrentPrice() * quantity}</span>
              </button>
            </div>
          </div>
          {/* Right Column - Reviews & Additional Info */}
          <div className="lg:col-span-1 flex flex-col space-y-4 min-h-0">
            {/* Tab Navigation */}
            <div className="flex space-x-2 border-b border-coffee-100/30">
              <button
                onClick={() => setShowNutrition(false)}
                className={`px-4 py-2 font-medium transition-all duration-300 ${
                  !showNutrition
                    ? 'text-coffee-800 border-b-2 border-coffee-600'
                    : 'text-coffee-500 hover:text-coffee-700'
                }`}
              >
                Reviews
              </button>
              <button
                onClick={() => setShowNutrition(true)}
                className={`px-4 py-2 font-medium transition-all duration-300 ${
                  showNutrition
                    ? 'text-coffee-800 border-b-2 border-coffee-600'
                    : 'text-coffee-500 hover:text-coffee-700'
                }`}
              >
                Nutrition
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin' }}>
              {!showNutrition ? (
                /* Reviews Section */
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-coffee-800">Customer Reviews</h3>
                    <div className="text-sm text-coffee-600">
                      {mockReviews.length} reviews
                    </div>
                  </div>
                  
                  {/* Review Summary */}
                  <div className="bg-coffee-50/50 rounded-xl p-4 border border-coffee-100/50">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-coffee-800">{product.rating}</div>
                        <div className="flex items-center justify-center space-x-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? 'text-amber-500 fill-current'
                                  : 'text-coffee-300'
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-sm text-coffee-600">out of 5</div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-coffee-600 mb-2">Based on 150+ reviews</div>
                        <div className="space-y-1">
                          {[5, 4, 3, 2, 1].map((rating) => (
                            <div key={rating} className="flex items-center space-x-2">
                              <span className="text-xs text-coffee-600 w-3">{rating}</span>
                              <div className="flex-1 h-2 bg-coffee-100 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-amber-400 rounded-full transition-all duration-500"
                                  style={{ width: rating === 5 ? '70%' : rating === 4 ? '20%' : '5%' }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Individual Reviews */}
                  <div className="space-y-4">
                    {mockReviews.map((review, index) => (
                      <div key={index} className="bg-white/50 rounded-xl p-4 border border-coffee-100/50">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="font-semibold text-coffee-800">{review.name}</div>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${
                                    i < review.rating
                                      ? 'text-amber-500 fill-current'
                                      : 'text-coffee-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="text-xs text-coffee-500">{review.date}</div>
                        </div>
                        <p className="text-coffee-700 text-sm leading-relaxed">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Nutrition Section */
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-coffee-800">Nutritional Information</h3>
                  
                  <div className="bg-coffee-50/50 rounded-xl p-4 border border-coffee-100/50">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-coffee-800">{mockNutrition.calories}</div>
                        <div className="text-sm text-coffee-600">Calories</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-coffee-800">{mockNutrition.caffeine}</div>
                        <div className="text-sm text-coffee-600">Caffeine</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {Object.entries(mockNutrition).filter(([key]) => !['calories', 'caffeine'].includes(key)).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-2 border-b border-coffee-100/30">
                        <span className="text-coffee-700 capitalize">{key}</span>
                        <span className="font-semibold text-coffee-800">{value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Allergen Information */}
                  <div className="bg-amber-50/50 rounded-xl p-4 border border-amber-200/50">
                    <h4 className="font-semibold text-amber-800 mb-2">Allergen Information</h4>
                    <p className="text-sm text-amber-700">
                      Contains: Milk, Soy. May contain traces of nuts and gluten.
                    </p>
                  </div>

                  {/* Ingredients */}
                  <div className="bg-green-50/50 rounded-xl p-4 border border-green-200/50">
                    <h4 className="font-semibold text-green-800 mb-2">Ingredients</h4>
                    <p className="text-sm text-green-700">
                      Organic coffee beans, filtered water, organic milk, natural sweeteners.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
