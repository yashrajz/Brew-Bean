
import React from 'react';
import { Coffee, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-900 text-cream-100 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Floating Coffee Elements */}
        <div className="absolute top-1/4 left-1/6 animate-float opacity-10" style={{ animationDelay: '0s' }}>
          <Coffee className="w-12 h-12 text-amber-400" />
        </div>
        <div className="absolute bottom-1/4 right-1/5 animate-float opacity-8" style={{ animationDelay: '2s' }}>
          {/* <Heart className="w-8 h-8 text-red-400" /> */}
        </div>

        {/* Coffee Bean Scatter */}
        <div className="absolute top-1/3 left-1/4 w-2 h-3 bg-amber-500 rounded-full animate-float opacity-30" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-1.5 h-2.5 bg-orange-400 rounded-full animate-float opacity-25" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-2.5 h-3.5 bg-yellow-500 rounded-full animate-float opacity-35" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Simple Header Section */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
            Brew & Bean
          </h2>
          <p className="text-xl text-cream-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Where every cup tells a story and every visit feels like home
          </p>
          
          {/* Decorative coffee beans */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="w-3 h-4 bg-amber-500 rounded-full opacity-60"></div>
            <div className="w-2 h-3 bg-orange-500 rounded-full opacity-70"></div>
            <div className="w-3 h-4 bg-yellow-500 rounded-full opacity-50"></div>
          </div>

          {/* Copyright */}
          <div className="border-t border-coffee-600/20 pt-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {/* <Heart className="w-5 h-5 text-red-400 animate-pulse" /> */}
              <span className="text-cream-300">Made with love and lots of coffee</span>
              {/* <Coffee className="w-5 h-5 text-amber-100 " /> */}
            </div>
            <p className="text-cream-400 text-sm">
              &copy; 2025 Brew & Bean. All rights reserved. | Crafted with passion for coffee lovers everywhere.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
