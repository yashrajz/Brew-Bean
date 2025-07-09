import React from 'react';
import { Coffee, Star, Heart, Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-50 via-amber-50 to-orange-50">
      {/* Curved Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Curved Background */}
        <div className="absolute top-0 right-0 w-3/5 h-full bg-gradient-to-bl from-coffee-800 via-coffee-700 to-coffee-900 transform skew-x-12 origin-top-right"></div>
        
        {/* Secondary Curve Layer */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-coffee-900/80 via-coffee-800/60 to-transparent transform skew-x-6 origin-top-right"></div>
        
        {/* Decorative Curve Accents */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-400/20 to-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-coffee-400/30 to-amber-400/20 rounded-full blur-2xl animate-float"></div>
        
        {/* Floating Coffee Elements on Curved Side */}
        <div className="absolute top-1/3 right-1/4 animate-float">
          <Coffee className="w-8 h-8 text-amber-300 opacity-60" />
        </div>
        <div className="absolute top-2/3 right-1/6 animate-float" style={{ animationDelay: '1s' }}>
          <Star className="w-6 h-6 text-yellow-300 opacity-50" />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-float" style={{ animationDelay: '2s' }}>
          <Heart className="w-5 h-5 text-red-300 opacity-40" />
        </div>
        
        {/* Animated coffee beans trail */}
        <div className="absolute top-1/4 left-1/4 w-2 h-3 bg-coffee-700 rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-1.5 h-2.5 bg-coffee-600 rounded-full animate-float opacity-40" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-2.5 h-3.5 bg-coffee-800 rounded-full animate-float opacity-70" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/5 w-1.5 h-2 bg-coffee-600 rounded-full animate-float opacity-50" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-2 h-2.5 bg-coffee-700 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/6 left-1/5 w-1.5 h-2.5 bg-coffee-800 rounded-full animate-float opacity-45" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-3 bg-coffee-600 rounded-full animate-float opacity-55" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-5/6 left-1/6 w-1.5 h-2 bg-coffee-700 rounded-full animate-float opacity-50" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute top-1/8 left-1/3 w-2.5 h-3 bg-coffee-800 rounded-full animate-float opacity-65" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-3/5 left-1/8 w-1.5 h-2.5 bg-coffee-600 rounded-full animate-float opacity-40" style={{ animationDelay: '4.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Better mobile layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          {/* Left Content Section */}
          <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-in-up">
            <div className="mb-8">
              <p className="text-coffee-600 font-medium text-lg mb-4 animate-slide-in-left">
                Power up with coffee
              </p>
              
              <h1 className="text-6xl lg:text-7xl font-playfair font-bold leading-tight mb-6 animate-scale-in">
                <span className="text-coffee-800">Fresh Coffee</span>
                <br />
                <span className="text-coffee-800">In The</span>
                <br />
                <span className="bg-gradient-to-r from-coffee-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Morning
                </span>
              </h1>
              
              <p className="text-coffee-600 text-lg leading-relaxed mb-8 max-w-md">
                Start your day with artisan-crafted coffee, expertly roasted to perfection. 
                Every cup tells a story of passion, quality, and unforgettable flavor.
              </p>
              
              {/* <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                  </div>
                  <span className="text-sm text-coffee-600">500+ Happy Customers</span>
                </div>
                <div className="text-sm text-coffee-600">⭐ 4.9/5 Rating</div>
              </div> */}
              
              <button 
                onClick={() => {
                  const menuSection = document.getElementById('menu');
                  if (menuSection) {
                    menuSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white px-8 py-4 rounded-md text-lg font-medium transition-all duration-500 hover:shadow-xl hover:scale-105 flex items-center space-x-3 animate-scale-in cursor-pointer" style={{ animationDelay: '0.5s' }}>
                <span>ORDER NOW</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Image Section with Curved Design */}
          <div className="order-1 lg:order-2 flex justify-center items-center animate-slide-in-right">
            {/* Main Coffee Cup Container */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* Glowing Background Circle */}
              <div className="absolute inset-0 w-96 h-96 bg-gradient-to-br from-amber-400/30 via-orange-400/20 to-coffee-400/10 rounded-full blur-2xl animate-pulse"></div>
              
              {/* Coffee Cup Image Container */}
              <div className="relative w-full h-full bg-white rounded-full shadow-2xl flex items-center justify-center overflow-hidden animate-float border-8 border-white/80">
                {/* Coffee Cup with Heart Latte Art */}
                <div className="relative w-64 h-64 bg-gradient-to-br from-amber-100 to-cream-200 rounded-full flex items-center justify-center border-4 border-coffee-200">
                  {/* Coffee Surface */}
                  <div className="w-48 h-48 bg-gradient-to-br from-coffee-400 to-coffee-600 rounded-full flex items-center justify-center relative overflow-hidden">
                    {/* Heart Latte Art */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Heart className="w-16 h-16 text-coffee-200 fill-coffee-200 animate-pulse" />
                    </div>
                    
                    {/* Coffee Foam Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cream-100/30 to-transparent rounded-full"></div>
                  </div>
                  
                  {/* Cup Handle */}
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 translate-x-6">
                    <div className="w-8 h-12 border-4 border-coffee-300 rounded-full bg-transparent"></div>
                  </div>
                </div>
                
                {/* Floating Steam */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-12 bg-gradient-to-t from-white/80 to-transparent rounded-full animate-steam"></div>
                    <div className="w-2 h-10 bg-gradient-to-t from-white/60 to-transparent rounded-full animate-steam" style={{ animationDelay: '0.3s' }}></div>
                    <div className="w-2 h-8 bg-gradient-to-t from-white/40 to-transparent rounded-full animate-steam" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                </div>
              </div>
              
              {/* Scattered Coffee Beans */}
              <div className="absolute -bottom-8 -left-12 w-6 h-6 bg-coffee-700 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-6 left-8 w-4 h-4 bg-coffee-600 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute -bottom-10 right-4 w-5 h-5 bg-coffee-800 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
              <div className="absolute -top-8 -right-8 w-4 h-4 bg-coffee-600 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              
              {/* Orbiting Sparkles */}
              <div className="absolute inset-0 animate-bean-rotate">
                <Sparkles className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 text-yellow-400 animate-pulse" />
              </div>
              <div className="absolute inset-0 animate-bean-rotate" style={{ animationDelay: '2s', animationDirection: 'reverse' }}>
                <Star className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-5 h-5 text-amber-400 animate-pulse" />
              </div>
              
              {/* Coffee Leaf Decoration */}
              <div className="absolute -bottom-16 right-8 transform rotate-45">
                <div className="w-12 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full opacity-80 animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-500 ${
        scrollY > 50 ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
      }`}>
        <div className="flex flex-col items-center space-y-2">
          <div className="w-8 h-12 border-2 border-coffee-600 rounded-full flex justify-center bg-white/20 backdrop-blur-sm">
            <div className="w-2 h-4 bg-coffee-600 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-coffee-600 text-sm font-medium">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
