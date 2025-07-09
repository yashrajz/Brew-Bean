
import React, { useState } from 'react';
import { Coffee, Cake, Star, Plus, Heart, Sparkles } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const menuItems = {
    coffee: [
      { 
        name: 'Espresso', 
        description: 'Rich and bold single shot of pure coffee perfection', 
        price: '₹280', 
        popular: true,
        rating: 4.9,
        stars: 5,
        image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop&crop=center'
      },
      { 
        name: 'Cappuccino', 
        description: 'Perfect harmony of espresso, steamed milk, and velvety foam', 
        price: '₹360', 
        popular: false,
        rating: 4.6,
        stars: 5,
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop&crop=center'
      },
      { 
        name: 'Latte', 
        description: 'Smooth espresso blended with silky steamed milk artistry', 
        price: '₹400', 
        popular: true,
        rating: 4.8,
        stars: 5,
        image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300&fit=crop&crop=center'
      },
      { 
        name: 'Americano', 
        description: 'Pure espresso with hot water for a clean, robust taste', 
        price: '₹300', 
        popular: false,
        rating: 4.3,
        stars: 4,
        image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=300&fit=crop&crop=center'
      },
      { 
        name: 'Mocha', 
        description: 'Decadent blend of espresso, chocolate, and steamed milk', 
        price: '₹440', 
        popular: true,
        rating: 4.7,
        stars: 5,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center'
      },
      { 
        name: 'Macchiato', 
        description: 'Bold espresso marked with a cloud of milk foam', 
        price: '₹340', 
        popular: false,
        rating: 4.4,
        stars: 4,
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop&crop=center'
      }
    ],
    pastries: [
      { 
        name: 'Croissant', 
        description: 'Buttery, flaky French pastry baked to golden perfection', 
        price: '₹260', 
        popular: true,
        rating: 4.5,
        stars: 5,
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop&crop=center'
      },
      { 
        name: 'Blueberry Muffin', 
        description: 'Fresh baked delight bursting with wild blueberries', 
        price: '₹300', 
        popular: false,
        rating: 4.2,
        stars: 4,
        image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=300&fit=crop&crop=center'
      },
      { 
        name: 'Chocolate Chip Cookie', 
        description: 'Warm, gooey homemade cookie with premium chocolate chips', 
        price: '₹200', 
        popular: true,
        rating: 4.6,
        stars: 5,
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop&crop=center'
      },
      { 
        name: 'Banana Bread', 
        description: 'Moist, flavorful slice made with ripe bananas and love', 
        price: '₹280', 
        popular: false,
        rating: 4.1,
        stars: 4,
        image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=300&fit=crop&crop=center'
      },
      { 
        name: 'Scone', 
        description: 'Traditional English scone served with house-made jam', 
        price: '₹320', 
        popular: false,
        rating: 4.0,
        stars: 4,
        image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&h=300&fit=crop&crop=center'
      },
      { 
        name: 'Danish', 
        description: 'Flaky pastry filled with seasonal fruit and cream', 
        price: '₹260', 
        popular: true,
        rating: 4.4,
        stars: 4,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop&crop=center'
      }
    ]
  };

  const categories = [
    { id: 'coffee', label: 'Coffee', icon: Coffee },
    { id: 'pastries', label: 'Pastries', icon: Cake }
  ];

  return (
    <section id="menu" className="relative py-20 overflow-hidden">
      {/* Enhanced Geometric Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-amber-50 to-orange-50"></div>
      
      {/* Sophisticated Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary geometric shapes - larger, more refined */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-coffee-100/15 to-coffee-200/10 transform rotate-45 translate-x-60 -translate-y-60 rounded-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-100/20 to-amber-200/15 transform rotate-12 -translate-x-48 translate-y-48 rounded-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-bl from-orange-100/12 to-orange-200/8 transform -rotate-30 -translate-x-40 -translate-y-40 rounded-full"></div>
        
        {/* Secondary geometric layers */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-coffee-200/25 rounded-full shadow-inner"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-amber-200/20 transform rotate-45 rounded-lg shadow-sm"></div>
        <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-orange-200/15 rounded-full opacity-80"></div>
        
        {/* Modern geometric accents */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-br from-coffee-300/35 to-coffee-400/25 transform rotate-45 rounded-lg shadow-lg"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-tl from-amber-300/30 to-amber-400/20 rounded-full shadow-md"></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-gradient-to-tr from-orange-300/40 to-orange-400/30 transform rotate-12 rounded-xl shadow-sm"></div>
        
        {/* Refined triangular elements */}
        <div className="absolute top-1/3 left-1/6 w-0 h-0 border-l-[35px] border-r-[35px] border-b-[60px] border-l-transparent border-r-transparent border-b-coffee-200/25 drop-shadow-sm"></div>
        <div className="absolute bottom-1/3 right-1/6 w-0 h-0 border-l-[28px] border-r-[28px] border-b-[48px] border-l-transparent border-r-transparent border-b-amber-200/30 transform rotate-180 drop-shadow-sm"></div>
        
        {/* Floating geometric elements with enhanced animation */}
        <div className="absolute top-1/2 left-1/4 w-10 h-10 bg-gradient-to-br from-coffee-400/25 to-coffee-500/20 transform rotate-45 animate-float rounded-lg shadow-lg"></div>
        <div className="absolute top-2/3 right-1/3 w-8 h-8 bg-gradient-to-tl from-amber-400/30 to-amber-500/25 rounded-full animate-float shadow-md" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/2 left-1/3 w-12 h-12 bg-gradient-to-tr from-orange-400/20 to-orange-500/15 transform rotate-12 animate-float rounded-2xl shadow-sm" style={{ animationDelay: '4s' }}></div>
        
        {/* Subtle geometric grid with depth */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-coffee-200/30 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200/25 to-transparent"></div>
        
        {/* Hexagonal accents for coffee theme */}
        <div className="absolute top-1/4 right-1/3 w-6 h-6 bg-coffee-300/30 transform rotate-30 animate-float" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-amber-300/25 transform rotate-45 animate-float" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-6 py-2 bg-coffee-100/50 backdrop-blur-sm rounded-full border border-coffee-200/30">
            <span className="text-coffee-600 font-medium">Our Menu</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-coffee-800 mb-6 leading-tight">
            Crafted with
            <span className="block bg-gradient-to-r from-coffee-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
              Passion & Love
            </span>
          </h2>
          <p className="text-xl text-coffee-600 max-w-3xl mx-auto leading-relaxed">
            Every cup tells a story of carefully selected beans, artisan craftsmanship, and the perfect blend of tradition and innovation
          </p>
        </div>

        {/* Redesigned Category Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/80 backdrop-blur-xl p-3 rounded-3xl shadow-2xl border border-white/50 flex relative">
            {/* Active Tab Background */}
            <div 
              className={`absolute top-3 bottom-3 bg-gradient-to-r from-coffee-600 to-coffee-700 rounded-2xl shadow-lg transition-all duration-500 ease-out ${
                activeCategory === 'coffee' ? 'left-3 right-1/2 mr-1.5' : 'left-1/2 right-3 ml-1.5'
              }`}
            ></div>
            
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-500 z-10 min-w-[120px] ${
                  activeCategory === category.id
                    ? 'text-white transform scale-105'
                    : 'text-coffee-700 hover:text-coffee-600 hover:scale-102'
                }`}
              >
                <category.icon className="w-6 h-6" />
                <span className="text-lg">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Option 12: Glass Morphism Card Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div
              key={item.name}
              className={`group relative cursor-pointer animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-coffee-400/20 to-amber-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-105"></div>
              
              {/* Main Glass Card */}
              <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 overflow-hidden">
                
                {/* Glass Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent"></div>
                
                {/* Content Container */}
                <div className="relative z-10 p-6">
                  
                  {/* Top Section - Image and Price */}
                  <div className="relative mb-6">
                    {/* Floating Image */}
                    <div className="relative h-48 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-inner">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                      
                      {/* Floating Price Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-white/30 text-coffee-800 px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                        {item.price}
                      </div>
                      
                      {/* Popular Glass Badge */}
                      {item.popular && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500/90 to-red-500/90 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full font-bold border border-white/30 shadow-lg">
                          <div className="flex items-center space-x-1">
                            <Sparkles className="w-3 h-3" />
                            <span>Popular</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-playfair font-bold text-coffee-800 mb-2 group-hover:text-coffee-600 transition-colors duration-300">
                        {item.name}
                      </h3>
                      
                      <p className="text-coffee-700 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Glass Rating Container */}
                    <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-2xl p-3 border border-white/30">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < item.stars ? 'text-amber-400 fill-current' : 'text-coffee-300'}`} />
                        ))}
                      </div>
                      <span className="text-coffee-700 text-sm font-semibold">{item.rating} Rating</span>
                    </div>
                    
                    {/* Glass Action Buttons */}
                    <div className="flex items-center space-x-3">
                      <button className="group/btn flex-1 bg-white/30 hover:bg-gradient-to-r hover:from-coffee-500 hover:to-coffee-600 backdrop-blur-sm border border-white/40 hover:border-coffee-400 text-coffee-800 hover:text-white font-semibold py-3 px-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center space-x-2 relative overflow-hidden">
                        {/* Button Ripple Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-coffee-600/20 via-amber-500/20 to-orange-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                        
                        {/* Button Shine Effect */}
                        <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover/btn:left-full transition-all duration-500 ease-out"></div>
                        
                        {/* Button Content */}
                        <div className="relative z-10 flex items-center space-x-2">
                          <Plus className="w-5 h-5 group-hover/btn:rotate-90 transition-transform duration-300" />
                          <span className="group-hover/btn:tracking-wider transition-all duration-300">Add to Cart</span>
                        </div>
                        
                        {/* Button Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-coffee-400 to-amber-400 opacity-0 group-hover/btn:opacity-20 blur-lg transition-all duration-300 -z-10"></div>
                      </button>
                      
                      <button className="bg-red-500/20 hover:bg-red-500/40 backdrop-blur-sm border border-red-300/30 text-red-600 hover:text-red-700 p-3 rounded-2xl transition-all duration-300 hover:scale-110 shadow-lg">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Glass Shine Effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                
                {/* Bottom Glass Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-coffee-400 via-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-full opacity-50"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Decorative Element */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 bg-white/60 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border border-white/30">
            <Coffee className="w-6 h-6 text-coffee-600" />
            <span className="text-coffee-700 font-medium">Made with love, served with passion</span>
            <Heart className="w-6 h-6 text-red-500 fill-current animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
