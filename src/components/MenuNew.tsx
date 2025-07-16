import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee, Cake, ShoppingBag, Star, Plus, Heart, Sparkles } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';

interface MenuProps {
  onCartClick: () => void;
}

const Menu: React.FC<MenuProps> = ({ onCartClick }) => {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const navigate = useNavigate();

  const categories = [
    { id: 'coffee', label: 'Coffee', icon: Coffee },
    { id: 'pastries', label: 'Pastries', icon: Cake },
    { id: 'merchandise', label: 'Merchandise', icon: ShoppingBag }
  ];

  const filteredProducts = products.filter(product => product.category === activeCategory);

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
        <div className="flex justify-center mb-16 px-4">
          <div className="bg-white/80 backdrop-blur-xl p-2 sm:p-3 rounded-3xl shadow-2xl border border-white/50 flex relative w-full max-w-fit overflow-hidden">
            {/* Active Tab Background - Desktop */}
            <div 
              className={`absolute top-2 sm:top-3 bottom-2 sm:bottom-3 bg-gradient-to-r from-coffee-600 to-coffee-700 rounded-2xl shadow-lg transition-all duration-500 ease-out hidden sm:block ${
                activeCategory === 'coffee' ? 'left-3 w-[140px]' : 
                activeCategory === 'pastries' ? 'left-[147px] w-[140px]' : 
                'left-[291px] w-[170px]'
              }`}
            ></div>

            {/* Active Tab Background - Mobile */}
            <div 
              className={`absolute top-2 bottom-2 bg-gradient-to-r from-coffee-600 to-coffee-700 rounded-xl shadow-lg transition-all duration-500 ease-out sm:hidden ${
                activeCategory === 'coffee' ? 'left-2 w-[90px]' : 
                activeCategory === 'pastries' ? 'left-[96px] w-[90px]' : 
                'left-[190px] w-[110px]'
              }`}
            ></div>
            
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative flex items-center justify-center space-x-1 sm:space-x-3 px-3 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-500 z-10 ${
                  category.id === 'merchandise' 
                    ? 'w-[110px] sm:w-[170px]' 
                    : 'w-[90px] sm:w-[140px]'
                } ${
                  activeCategory === category.id
                    ? 'text-white transform scale-105'
                    : 'text-coffee-700 hover:text-coffee-600 hover:scale-102'
                }`}
              >
                <category.icon className="w-4 h-4 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="text-sm sm:text-lg font-medium sm:font-semibold">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Glass Morphism Card Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group relative cursor-pointer animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/product/${product.id}`)}
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
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                      
                      {/* Floating Price Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-white/30 text-coffee-800 px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                        ₹{product.price}
                      </div>
                      
                      {/* Popular Glass Badge */}
                      {product.popular && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400/90 to-orange-400/90 backdrop-blur-sm border border-white/30 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center space-x-1">
                          <Sparkles className="w-4 h-4" />
                          <span>Popular</span>
                        </div>
                      )}
                      
                      {/* Heart Icon */}
                      <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white/80 hover:text-red-400 hover:bg-white/30 transition-all duration-300 cursor-pointer">
                        <Heart className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="space-y-3">
                    {/* Name and Category */}
                    <div>
                      <h3 className="text-xl font-playfair font-bold text-coffee-800 mb-1 group-hover:text-coffee-700 transition-colors duration-300 drop-shadow-sm">
                        {product.name}
                      </h3>
                      <p className="text-coffee-600 text-sm font-medium uppercase tracking-wider drop-shadow-sm">
                        {product.category}
                      </p>
                    </div>
                    
                    {/* Description */}
                    <p className="text-coffee-700 text-sm leading-relaxed line-clamp-2 drop-shadow-sm">
                      {product.description}
                    </p>
                    
                    {/* Rating Stars and Score */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 drop-shadow-sm ${
                              i < Math.floor(product.rating)
                                ? 'text-amber-500 fill-current'
                                : 'text-coffee-300'
                            }`}
                          />
                        ))}
                        <span className="text-coffee-800 font-semibold ml-2 text-sm drop-shadow-sm">
                          {product.rating}
                        </span>
                      </div>
                      
                      {/* Add to Cart Glass Button */}
                      <button 
                        className="bg-coffee-600/80 backdrop-blur-sm border border-coffee-500/50 hover:bg-coffee-700/80 text-white px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-lg group-hover:shadow-xl font-semibold"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/product/${product.id}`);
                        }}
                      >
                        <Plus className="w-4 h-4" />
                        <span className="text-sm">Add</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Glow Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-coffee-500/50 via-amber-400/50 to-orange-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50 max-w-md mx-auto">
              <Coffee className="w-20 h-20 text-coffee-300 mx-auto mb-6" />
              <h3 className="text-2xl font-playfair font-bold text-coffee-800 mb-4">Coming Soon</h3>
              <p className="text-coffee-600">We're working on adding more delicious items to this category.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
