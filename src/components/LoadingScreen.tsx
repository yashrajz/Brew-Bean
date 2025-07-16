import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsMoving(true);
            setTimeout(() => {
              onLoadingComplete();
            }, 800);
          }, 300);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-gradient-to-br from-cream-50 to-cream-100 transition-all duration-500 delay-200 ${
      isMoving ? 'opacity-0' : 'opacity-100'
    }`}>
      <div className={`fixed transition-all duration-1000 ease-in-out transform ${
        isMoving 
          ? 'top-3 left-6 scale-100'
          : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150'
      }`}>
        <div className="flex items-center space-x-3 group">
          <div className="relative">
            <img 
              src="/logo.svg" 
              alt="Brew & Bean Logo" 
              className={`transition-all duration-1000 drop-shadow-lg ${
                isMoving ? 'w-8 h-8' : 'w-12 h-12'
              }`}
            />
            <div className="absolute inset-0 bg-coffee-600 rounded-full opacity-20 transition-opacity duration-300 scale-150 blur-xl"></div>
          </div>
          
          <div className="relative">
            <span className={`font-playfair font-bold bg-gradient-to-r from-coffee-800 to-coffee-600 bg-clip-text text-transparent transition-all duration-1000 ${
              isMoving ? 'text-xl' : 'text-3xl'
            }`}>
              Brew & Bean
            </span>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-coffee-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-coffee-600 to-coffee-500 rounded-full transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;