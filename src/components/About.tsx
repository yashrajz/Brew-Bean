
import React from 'react';
import { Coffee } from 'lucide-react';

interface AboutProps {
  scrollY: number;
}

const About: React.FC<AboutProps> = ({ scrollY }) => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-coffee-50 to-cream-100 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-coffee-100/30 to-cream-200/30"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div 
          className="absolute top-20 right-10 w-64 h-64 bg-coffee-200 rounded-full opacity-10"
          style={{ transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)` }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-5xl font-playfair font-bold text-coffee-800 mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-coffee-700 leading-relaxed">
              <p className="text-lg">
                Founded in 2015, Brew & Bean began as a small neighborhood coffee shop with a simple mission: 
                to serve the perfect cup of coffee while creating a warm, welcoming space for our community.
              </p>
              <p className="text-lg">
                We source our beans directly from farmers around the world, ensuring fair trade practices 
                and the highest quality. Each batch is carefully roasted in-house to bring out the unique 
                flavors and aromas that make every cup special.
              </p>
              <p className="text-lg">
                Today, we're proud to be your neighborhood's favorite coffee destination, where every visitor 
                becomes part of our extended family.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-playfair font-bold text-coffee-600 mb-2">8+</div>
                <div className="text-sm text-coffee-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-playfair font-bold text-coffee-600 mb-2">15K+</div>
                <div className="text-sm text-coffee-600 font-medium">Happy Customers</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="text-3xl font-playfair font-bold text-coffee-600 mb-2">50+</div>
                <div className="text-sm text-coffee-600 font-medium">Coffee Varieties</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="animate-slide-in-right relative">
            <div className="relative">
              {/* Main Coffee Cup */}
              <div className="bg-gradient-to-br from-coffee-400 to-coffee-600 w-80 h-80 rounded-full mx-auto flex items-center justify-center shadow-2xl animate-float">
                <Coffee className="w-32 h-32 text-white" />
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 coffee-steam"></div>
              </div>
              
              {/* Floating Coffee Beans */}
              <div className="absolute top-16 -left-8 animate-bean-rotate">
                <Coffee className="w-12 h-12 text-coffee-500 opacity-60" />
              </div>
              <div className="absolute bottom-16 -right-8 animate-bean-rotate" style={{ animationDelay: '1s' }}>
                <Coffee className="w-16 h-16 text-coffee-400 opacity-40" />
              </div>
              <div className="absolute top-1/2 -right-12 animate-bean-rotate" style={{ animationDelay: '2s' }}>
                <Coffee className="w-8 h-8 text-coffee-600 opacity-50" />
              </div>
              
              {/* Decorative Circles */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cream-300 rounded-full opacity-30 animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-coffee-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
