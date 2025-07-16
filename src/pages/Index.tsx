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
  const [isLoading, setIsLoading] = useState(true); // Always show loading on page load

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
