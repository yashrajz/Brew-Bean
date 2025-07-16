import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import MenuNew from '../components/MenuNew';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  
  // Only show loading on first visit or page refresh, not when navigating back
  const [isLoading, setIsLoading] = useState(() => {
    // Check various indicators that this might be a back navigation
    const hasLoadedBefore = sessionStorage.getItem('hasLoadedHomePage');
    
    // Check if this is back navigation using different methods
    let isBackNavigation = false;
    
    // Method 1: Check performance.navigation (deprecated but still widely supported)
    if (window.performance?.navigation?.type === 2) {
      isBackNavigation = true;
    }
    
    // Method 2: Check document.referrer from the same origin (indicates internal navigation)
    if (document.referrer && document.referrer.includes(window.location.origin)) {
      isBackNavigation = true;
    }
    
    // Method 3: Check if we have history state (indicates browser navigation)
    if (window.history.state !== null) {
      isBackNavigation = true;
    }
    
    // Only show loading if it's the first visit AND not a back navigation
    return !hasLoadedBefore && !isBackNavigation;
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Mark that the home page has been loaded in this session
    sessionStorage.setItem('hasLoadedHomePage', 'true');
    
    // Clear the flag on page unload so it shows loading on fresh visits
    const handleBeforeUnload = () => {
      // Only clear if it's a page refresh (not navigation)
      if (performance.navigation?.type === 1) { // TYPE_RELOAD
        sessionStorage.removeItem('hasLoadedHomePage');
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100">
      {/* Loading Screen Overlay */}
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      {/* Main Content */}
      <Navigation isLoading={isLoading} />
      <main>
        <Hero scrollY={scrollY} />
        <MenuNew onCartClick={handleCartClick} />
        <About scrollY={scrollY} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
