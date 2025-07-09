
import React from 'react';
import { Coffee, Award, Users, Heart, Clock, Star } from 'lucide-react';

interface AboutProps {
  scrollY: number;
}

const About: React.FC<AboutProps> = ({ scrollY }) => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-coffee-50 via-cream-50 to-amber-50 relative overflow-hidden">
      {/* Enhanced Animated Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Base Wave Layers */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-full opacity-25" 
          viewBox="0 0 1400 900" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#7c2d12', stopOpacity: 0.15}} />
              <stop offset="25%" style={{stopColor: '#92400e', stopOpacity: 0.25}} />
              <stop offset="50%" style={{stopColor: '#d97706', stopOpacity: 0.3}} />
              <stop offset="75%" style={{stopColor: '#f59e0b', stopOpacity: 0.2}} />
              <stop offset="100%" style={{stopColor: '#fbbf24', stopOpacity: 0.1}} />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#f59e0b', stopOpacity: 0.2}} />
              <stop offset="30%" style={{stopColor: '#fbbf24', stopOpacity: 0.35}} />
              <stop offset="60%" style={{stopColor: '#fcd34d', stopOpacity: 0.25}} />
              <stop offset="100%" style={{stopColor: '#fde68a', stopOpacity: 0.15}} />
            </linearGradient>
            <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#d97706', stopOpacity: 0.1}} />
              <stop offset="50%" style={{stopColor: '#f59e0b', stopOpacity: 0.2}} />
              <stop offset="100%" style={{stopColor: '#fbbf24', stopOpacity: 0.15}} />
            </linearGradient>
          </defs>
          
          {/* Multiple animated wave layers for depth */}
          <path 
            d="M0,500 C350,400 700,600 1400,500 L1400,900 L0,900 Z" 
            fill="url(#wave1)"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <animate attributeName="d" 
              values="M0,500 C350,400 700,600 1400,500 L1400,900 L0,900 Z;
                      M0,520 C350,420 700,580 1400,480 L1400,900 L0,900 Z;
                      M0,500 C350,400 700,600 1400,500 L1400,900 L0,900 Z"
              dur="8s" repeatCount="indefinite" />
          </path>
          
          <path 
            d="M0,600 C400,500 800,700 1400,600 L1400,900 L0,900 Z" 
            fill="url(#wave2)"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          >
            <animate attributeName="d" 
              values="M0,600 C400,500 800,700 1400,600 L1400,900 L0,900 Z;
                      M0,580 C400,480 800,720 1400,620 L1400,900 L0,900 Z;
                      M0,600 C400,500 800,700 1400,600 L1400,900 L0,900 Z"
              dur="10s" repeatCount="indefinite" />
          </path>
          
          <path 
            d="M0,700 C450,600 900,800 1400,700 L1400,900 L0,900 Z" 
            fill="url(#wave3)"
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
          >
            <animate attributeName="d" 
              values="M0,700 C450,600 900,800 1400,700 L1400,900 L0,900 Z;
                      M0,720 C450,620 900,780 1400,680 L1400,900 L0,900 Z;
                      M0,700 C450,600 900,800 1400,700 L1400,900 L0,900 Z"
              dur="12s" repeatCount="indefinite" />
          </path>
        </svg>

        {/* Top Wave Layers with Animation */}
        <svg 
          className="absolute top-0 left-0 w-full h-full opacity-20 rotate-180" 
          viewBox="0 0 1400 900" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <path 
            d="M0,300 C450,200 900,400 1400,300 L1400,0 L0,0 Z" 
            fill="url(#wave1)"
            style={{ transform: `translateY(${scrollY * -0.08}px)` }}
          >
            <animate attributeName="d" 
              values="M0,300 C450,200 900,400 1400,300 L1400,0 L0,0 Z;
                      M0,280 C450,180 900,420 1400,320 L1400,0 L0,0 Z;
                      M0,300 C450,200 900,400 1400,300 L1400,0 L0,0 Z"
              dur="9s" repeatCount="indefinite" />
          </path>
        </svg>

        {/* Coffee Bean Constellation */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                top: `${15 + (i * 7)}%`,
                left: `${10 + (i * 8) % 80}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '4s'
              }}
            >
              <div className="w-2 h-3 bg-coffee-400/40 rounded-full transform rotate-45"></div>
            </div>
          ))}
        </div>

        {/* Floating Coffee Elements */}
        <div className="absolute top-1/5 left-1/5">
          <div 
            className="w-32 h-32 opacity-10"
            style={{ transform: `translateY(${scrollY * 0.12}px) rotate(${scrollY * 0.1}deg)` }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#7c2d12" strokeWidth="2"/>
              <circle cx="50" cy="50" r="30" fill="none" stroke="#d97706" strokeWidth="1.5"/>
              <circle cx="50" cy="50" r="20" fill="none" stroke="#f59e0b" strokeWidth="1"/>
              <circle cx="50" cy="50" r="10" fill="#fbbf24" fillOpacity="0.3"/>
            </svg>
          </div>
        </div>

        <div className="absolute bottom-1/4 right-1/4">
          <div 
            className="w-24 h-24 opacity-15"
            style={{ transform: `translateY(${scrollY * -0.1}px) rotate(${scrollY * -0.08}deg)` }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M20,50 Q50,20 80,50 Q50,80 20,50" fill="#d97706" fillOpacity="0.3"/>
              <path d="M25,50 Q50,30 75,50 Q50,70 25,50" fill="#f59e0b" fillOpacity="0.2"/>
            </svg>
          </div>
        </div>

        {/* Floating Icons - Right Side */}
        <div className="absolute top-1/3 right-1/4 animate-float">
          <Coffee className="w-8 h-8 text-amber-300 opacity-60" />
        </div>
        <div className="absolute top-2/3 right-1/6 animate-float" style={{ animationDelay: '1s' }}>
          <Star className="w-6 h-6 text-yellow-300 opacity-50" />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-float" style={{ animationDelay: '2s' }}>
          <Heart className="w-5 h-5 text-red-300 opacity-40" />
        </div>
        
        {/* Animated coffee beans trail - Filling the empty spaces */}
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

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(90deg, #7c2d12 1px, transparent 1px),
                linear-gradient(180deg, #7c2d12 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.03}px)`
            }}
          ></div>
        </div>

        {/* Ambient Light Spots */}
        <div 
          className="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-to-br from-amber-200/20 via-transparent to-transparent rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-coffee-200/15 via-transparent to-transparent rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-6 py-2 bg-coffee-100/50 backdrop-blur-sm rounded-full border border-coffee-200/30">
            <span className="text-coffee-600 font-medium">About Us</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-coffee-800 mb-6">
            Our Story
          </h2>
          <p className="text-xl text-coffee-600 max-w-2xl mx-auto leading-relaxed">
            From humble beginnings to your favorite coffee destination - discover the passion behind every cup
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story Content */}
          <div className="animate-slide-in-left">
            <div className="space-y-6">
              {/* Story Card 1 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                <div className="flex items-start space-x-4">
                  <div className="bg-coffee-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-coffee-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-bold text-coffee-800 mb-2">The Beginning</h3>
                    <p className="text-coffee-700 leading-relaxed">
                      Founded in 2017, Brew & Bean began as a small neighborhood coffee shop with a simple mission: 
                      to serve the perfect cup of coffee while creating a warm, welcoming space for our community.
                    </p>
                  </div>
                </div>
              </div>

              {/* Story Card 2 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-bold text-coffee-800 mb-2">Quality Promise</h3>
                    <p className="text-coffee-700 leading-relaxed">
                      We source our beans directly from farmers around the world, ensuring fair trade practices 
                      and the highest quality. Each batch is carefully roasted in-house to bring out unique flavors.
                    </p>
                  </div>
                </div>
              </div>

              {/* Story Card 3 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Heart className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-bold text-coffee-800 mb-2">Community Family</h3>
                    <p className="text-coffee-700 leading-relaxed">
                      Today, we're proud to be your neighborhood's favorite coffee destination, where every visitor 
                      becomes part of our extended family. Your smile is our greatest achievement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="animate-slide-in-right relative">
            <div className="relative">
              {/* Main Coffee Visual */}
              <div className="bg-gradient-to-br from-coffee-400 to-coffee-600 w-80 h-80 rounded-3xl mx-auto flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:rotate-2">
                <Coffee className="w-32 h-32 text-white animate-pulse" />
                
                {/* Steam Effect */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="coffee-steam opacity-60"></div>
                </div>
              </div>
              
              {/* Floating Achievement Badges */}
              <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float border border-white/50">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <span className="text-sm font-semibold text-coffee-800">4.8 Rating</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float border border-white/50" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-coffee-600" />
                  <span className="text-sm font-semibold text-coffee-800">15K+ Customers</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float border border-white/50" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center space-x-2">
                  <Coffee className="w-5 h-5 text-coffee-600" />
                  <span className="text-sm font-semibold text-coffee-800">50+ Varieties</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up border border-white/50">
            <div className="text-4xl font-playfair font-bold text-coffee-600 mb-2">8+</div>
            <div className="text-sm text-coffee-600 font-medium uppercase tracking-wide">Years Experience</div>
          </div>
          
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up border border-white/50" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-playfair font-bold text-coffee-600 mb-2">15K+</div>
            <div className="text-sm text-coffee-600 font-medium uppercase tracking-wide">Happy Customers</div>
          </div>
          
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up border border-white/50" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl font-playfair font-bold text-coffee-600 mb-2">5+</div>
            <div className="text-sm text-coffee-600 font-medium uppercase tracking-wide">Coffee Varieties</div>
          </div>
          
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up border border-white/50" style={{ animationDelay: '0.6s' }}>
            <div className="text-4xl font-playfair font-bold text-coffee-600 mb-2">4.8</div>
            <div className="text-sm text-coffee-600 font-medium uppercase tracking-wide">Average Rating</div>
          </div>
        </div>

        {/* What Makes Us Special Section */}
        <div className="bg-coffee-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-bold text-coffee-800 mb-4">
              What Makes Us Special
            </h3>
            <p className="text-coffee-600 max-w-2xl mx-auto">
              Three core values that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Coffee className="w-8 h-8 text-coffee-600" />
              </div>
              <h4 className="text-xl font-playfair font-bold text-coffee-800 mb-3">Quality First</h4>
              <p className="text-coffee-600 leading-relaxed">
                From bean selection to brewing technique, we never compromise on quality. 
                Every cup reflects our commitment to excellence.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-8 h-8 text-coffee-600" />
              </div>
              <h4 className="text-xl font-playfair font-bold text-coffee-800 mb-3">Community Love</h4>
              <p className="text-coffee-600 leading-relaxed">
                We're more than a business - we're neighbors. Building genuine relationships 
                and supporting our local community is at our heart.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-coffee-600" />
              </div>
              <h4 className="text-xl font-playfair font-bold text-coffee-800 mb-3">People Focused</h4>
              <p className="text-coffee-600 leading-relaxed">
                Whether it's our farmers, staff, or customers, we believe in treating everyone 
                with respect and creating positive experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
