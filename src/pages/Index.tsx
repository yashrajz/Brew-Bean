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
  
  // Show loading screen only on page refresh, not on any navigation
  const [isLoading, setIsLoading] = useState(() => {
    // Check if we've navigated to this page before in this session
    const hasNavigatedBefore = sessionStorage.getItem('hasNavigatedToHome');
    
    // If we've been here before in this session, don't show loading
    if (hasNavigatedBefore) {
      return false;
    }
    
    // Check if this is a direct page refresh (not navigation)
    const isDirectAccess = !document.referrer || !document.referrer.includes(window.location.origin);
    
    // Only show loading on direct access (refresh, new tab, direct URL)
    return isDirectAccess;
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Mark that we've navigated to home page in this session
    sessionStorage.setItem('hasNavigatedToHome', 'true');
    
    // Clear the flag when the session ends (page is closed/refreshed)
    const handleBeforeUnload = () => {
      // Only clear if it's a page refresh/close, not navigation
      sessionStorage.removeItem('hasNavigatedToHome');
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
