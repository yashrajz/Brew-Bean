
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee, Menu, X, ArrowRight, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface NavigationProps {
  isLoading?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isLoading = false }) => {
  const navigate = useNavigate();
  const { state } = useCart();
  const { wishlistItems } = useWishlist();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'menu', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-coffee-100/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className={`flex items-center space-x-3 group cursor-pointer relative overflow-hidden transition-opacity duration-500 ${
            isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`} onClick={() => scrollToSection('home')}>
            <div className="relative">
              <img 
                src="/logo.svg" 
                alt="Brew & Bean Logo" 
                className="w-8 h-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 drop-shadow-lg" 
              />
              <div className="absolute inset-0 bg-coffee-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-150 blur-xl"></div>
            </div>
            <div className="relative">
              <span className="text-xl font-playfair font-bold bg-gradient-to-r from-coffee-800 to-coffee-600 bg-clip-text text-transparent group-hover:from-coffee-600 group-hover:to-coffee-500 transition-all duration-500">
                Brew & Bean
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-coffee-600 to-coffee-500 group-hover:w-full transition-all duration-500 ease-out"></div>
            </div>
          </div>
          
          <div className={`hidden md:flex items-center space-x-2 transition-all duration-700 ease-out ${
            isScrolled ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95 pointer-events-none'
          }`}>
            {[
              { id: 'home', label: 'Home', delay: '0ms' },
              { id: 'menu', label: 'Menu', delay: '100ms' },
              { id: 'about', label: 'About', delay: '200ms' },
              { id: 'contact', label: 'Contact', delay: '300ms' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{ transitionDelay: isScrolled ? item.delay : '0ms' }}
                className={`relative py-2 px-4 rounded-lg font-medium transition-all duration-500 ease-out group overflow-hidden ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-coffee-600 to-coffee-500 shadow-lg shadow-coffee-600/30 scale-105'
                    : 'text-coffee-700 hover:text-white hover:scale-105'
                }`}
              >
                {/* Background hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-coffee-600 to-coffee-500 transition-all duration-300 ${
                  activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100'
                }`}></div>
                
                {/* Text */}
                <span className="relative z-10">{item.label}</span>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse shadow-lg"></div>
                )}
                
                {/* Hover sparkle effect */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white/30 rounded-full group-hover:w-16 group-hover:h-16 transition-all duration-500 -z-10"></div>
              </button>
            ))}
          </div>

          {/* Action Buttons - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Wishlist Icon */}
            <button 
              onClick={() => navigate('/wishlist')}
              className={`relative p-2 rounded-lg transition-all duration-700 ease-out group overflow-hidden ${
              isScrolled ? 'opacity-100 translate-x-0 scale-100 text-coffee-700 hover:text-white bg-transparent hover:bg-gradient-to-r hover:from-coffee-600 hover:to-coffee-500' : 'opacity-0 translate-x-12 scale-95 pointer-events-none'
            }`} style={{ transitionDelay: isScrolled ? '250ms' : '0ms' }}>
              <Heart className="w-6 h-6 relative z-10" />
              {wishlistItems.length > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {wishlistItems.length}
                </div>
              )}
            </button>

            {/* Cart Icon */}
            <button 
              onClick={() => navigate('/cart')}
              className={`relative p-2 rounded-lg transition-all duration-700 ease-out group overflow-hidden ${
              isScrolled ? 'opacity-100 translate-x-0 scale-100 text-coffee-700 hover:text-white bg-transparent hover:bg-gradient-to-r hover:from-coffee-600 hover:to-coffee-500' : 'opacity-0 translate-x-12 scale-95 pointer-events-none'
            }`} style={{ transitionDelay: isScrolled ? '300ms' : '0ms' }}>
              <ShoppingCart className="w-6 h-6 relative z-10" />
              {state.items.length > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </div>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-700 ease-out group relative overflow-hidden ${
              isScrolled 
                ? 'opacity-100 translate-x-0 scale-100 text-coffee-700 hover:text-white bg-transparent hover:bg-gradient-to-r hover:from-coffee-600 hover:to-coffee-500' 
                : 'opacity-0 translate-x-12 scale-95 pointer-events-none'
            }`}
            style={{ transitionDelay: isScrolled ? '400ms' : '0ms' }}
          >
            {/* Background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-coffee-600 to-coffee-500 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>
            
            {/* Icon with rotation */}
            <div className="relative z-10 transition-transform duration-300">
              {isMobileMenuOpen ? 
                <X className="w-5 h-5 rotate-0 group-hover:rotate-90 transition-transform duration-300" /> : 
                <Menu className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              }
            </div>
            
            {/* Ripple effect */}
            <div className="absolute inset-0 bg-coffee-600/20 rounded-xl scale-0 group-active:scale-110 transition-transform duration-200"></div>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-500 ease-out overflow-hidden backdrop-blur-xl ${
          isMobileMenuOpen && isScrolled 
            ? 'max-h-96 opacity-100 bg-white/95 border-t border-coffee-100/50' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 px-2 space-y-1">
            {[
              { id: 'home', label: 'Home', delay: '0ms' },
              { id: 'menu', label: 'Menu', delay: '50ms' },
              { id: 'about', label: 'About', delay: '100ms' },
              { id: 'contact', label: 'Contact', delay: '150ms' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{ 
                  transitionDelay: isMobileMenuOpen && isScrolled ? item.delay : '0ms',
                  transform: isMobileMenuOpen && isScrolled ? 'translateX(0)' : 'translateX(-20px)'
                }}
                className={`block w-full text-left py-4 px-6 rounded-xl font-semibold transition-all duration-500 ease-out group relative overflow-hidden ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-coffee-600 to-coffee-500 shadow-lg shadow-coffee-600/20'
                    : 'text-coffee-700 hover:text-white hover:bg-gradient-to-r hover:from-coffee-600 hover:to-coffee-500'
                }`}
              >
                {/* Background effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-coffee-600 to-coffee-500 transition-all duration-300 ${
                  activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100'
                }`}></div>
                
                {/* Text */}
                <span className="relative z-10">{item.label}</span>
                
                {/* Slide indicator */}
                <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-r-full transition-all duration-300 ${
                  activeSection === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}></div>
              </button>
            ))}
            
            {/* Wishlist Button in Mobile Menu */}
            <button
              onClick={() => {
                navigate('/wishlist');
                setIsMobileMenuOpen(false);
              }}
              style={{ 
                transitionDelay: isMobileMenuOpen && isScrolled ? '150ms' : '0ms',
                transform: isMobileMenuOpen && isScrolled ? 'translateX(0)' : 'translateX(-20px)'
              }}
              className="block w-full text-left py-4 px-6 rounded-xl font-semibold transition-all duration-500 ease-out group relative overflow-hidden text-coffee-700 hover:text-white hover:bg-gradient-to-r hover:from-coffee-600 hover:to-coffee-500"
            >
              {/* Background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-coffee-600 to-coffee-500 transition-all duration-300 opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100"></div>
              
              {/* Content */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5" />
                  <span>Wishlist</span>
                </div>
                {wishlistItems.length > 0 && (
                  <div className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {wishlistItems.length}
                  </div>
                )}
              </div>
            </button>
            
            {/* Cart Button in Mobile Menu */}
            <button
              onClick={() => {
                navigate('/cart');
                setIsMobileMenuOpen(false);
              }}
              style={{ 
                transitionDelay: isMobileMenuOpen && isScrolled ? '200ms' : '0ms',
                transform: isMobileMenuOpen && isScrolled ? 'translateX(0)' : 'translateX(-20px)'
              }}
              className="block w-full text-left py-4 px-6 rounded-xl font-semibold transition-all duration-500 ease-out group relative overflow-hidden text-coffee-700 hover:text-white hover:bg-gradient-to-r hover:from-coffee-600 hover:to-coffee-500"
            >
              {/* Background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-coffee-600 to-coffee-500 transition-all duration-300 opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100"></div>
              
              {/* Content */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart</span>
                </div>
                {state.items.length > 0 && (
                  <div className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </div>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
