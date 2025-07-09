
import React, { useState } from 'react';
import { Coffee, MapPin, Clock, Phone, Mail, Send, Heart, Star, Award } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-coffee-50 via-cream-50 to-amber-50 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Multi-layered Animated Wave Background */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-full opacity-15" 
          viewBox="0 0 1400 900" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="contactWave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#7c2d12', stopOpacity: 0.2}} />
              <stop offset="25%" style={{stopColor: '#92400e', stopOpacity: 0.3}} />
              <stop offset="50%" style={{stopColor: '#d97706', stopOpacity: 0.4}} />
              <stop offset="75%" style={{stopColor: '#f59e0b', stopOpacity: 0.3}} />
              <stop offset="100%" style={{stopColor: '#fbbf24', stopOpacity: 0.2}} />
            </linearGradient>
            <linearGradient id="contactWave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#f59e0b', stopOpacity: 0.3}} />
              <stop offset="30%" style={{stopColor: '#fbbf24', stopOpacity: 0.4}} />
              <stop offset="60%" style={{stopColor: '#fcd34d', stopOpacity: 0.35}} />
              <stop offset="100%" style={{stopColor: '#fde68a', stopOpacity: 0.25}} />
            </linearGradient>
            <linearGradient id="contactWave3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#d97706', stopOpacity: 0.15}} />
              <stop offset="50%" style={{stopColor: '#f59e0b', stopOpacity: 0.25}} />
              <stop offset="100%" style={{stopColor: '#fbbf24', stopOpacity: 0.2}} />
            </linearGradient>
          </defs>
          
          {/* Multiple animated wave layers for depth */}
          <path 
            d="M0,500 C350,400 700,600 1400,500 L1400,900 L0,900 Z" 
            fill="url(#contactWave1)"
          >
            <animate attributeName="d" 
              values="M0,500 C350,400 700,600 1400,500 L1400,900 L0,900 Z;
                      M0,520 C350,420 700,580 1400,480 L1400,900 L0,900 Z;
                      M0,500 C350,400 700,600 1400,500 L1400,900 L0,900 Z"
              dur="8s" repeatCount="indefinite" />
          </path>
          
          <path 
            d="M0,600 C400,500 800,700 1400,600 L1400,900 L0,900 Z" 
            fill="url(#contactWave2)"
          >
            <animate attributeName="d" 
              values="M0,600 C400,500 800,700 1400,600 L1400,900 L0,900 Z;
                      M0,580 C400,480 800,720 1400,620 L1400,900 L0,900 Z;
                      M0,600 C400,500 800,700 1400,600 L1400,900 L0,900 Z"
              dur="10s" repeatCount="indefinite" />
          </path>
          
          <path 
            d="M0,700 C450,600 900,800 1400,700 L1400,900 L0,900 Z" 
            fill="url(#contactWave3)"
          >
            <animate attributeName="d" 
              values="M0,700 C450,600 900,800 1400,700 L1400,900 L0,900 Z;
                      M0,720 C450,620 900,780 1400,680 L1400,900 L0,900 Z;
                      M0,700 C450,600 900,800 1400,700 L1400,900 L0,900 Z"
              dur="12s" repeatCount="indefinite" />
          </path>
        </svg>

        {/* Top Wave Layers */}
        <svg 
          className="absolute top-0 left-0 w-full h-full opacity-12 rotate-180" 
          viewBox="0 0 1400 900" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <path 
            d="M0,300 C450,200 900,400 1400,300 L1400,0 L0,0 Z" 
            fill="url(#contactWave1)"
          >
            <animate attributeName="d" 
              values="M0,300 C450,200 900,400 1400,300 L1400,0 L0,0 Z;
                      M0,280 C450,180 900,420 1400,320 L1400,0 L0,0 Z;
                      M0,300 C450,200 900,400 1400,300 L1400,0 L0,0 Z"
              dur="9s" repeatCount="indefinite" />
          </path>
        </svg>

        {/* Floating Coffee Elements - Enhanced */}
        <div className="absolute top-1/4 left-1/6 animate-float opacity-10" style={{ animationDelay: '0s' }}>
          <Coffee className="w-16 h-16 text-coffee-600" />
        </div>
        <div className="absolute bottom-1/4 right-1/5 animate-float opacity-8" style={{ animationDelay: '2s' }}>
          <Heart className="w-12 h-12 text-red-400" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float opacity-12" style={{ animationDelay: '1s' }}>
          <Star className="w-10 h-10 text-amber-500" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-float opacity-10" style={{ animationDelay: '3s' }}>
          <Award className="w-14 h-14 text-orange-400" />
        </div>

        {/* Coffee Bean Trail - Enhanced */}
        <div className="absolute top-1/5 left-1/4 w-2 h-3 bg-coffee-600 rounded-full animate-float opacity-30" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-1.5 h-2.5 bg-coffee-700 rounded-full animate-float opacity-25" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/5 left-1/2 w-2.5 h-3.5 bg-coffee-500 rounded-full animate-float opacity-35" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-2 bg-coffee-600 rounded-full animate-float opacity-20" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 left-1/6 w-2 h-2.5 bg-coffee-800 rounded-full animate-float opacity-28" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/6 right-1/3 w-1.5 h-2.5 bg-coffee-700 rounded-full animate-float opacity-32" style={{ animationDelay: '5s' }}></div>
        <div className="absolute bottom-1/5 left-1/3 w-2 h-3 bg-coffee-600 rounded-full animate-float opacity-26" style={{ animationDelay: '6s' }}></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/6 left-1/5 w-8 h-8 border-2 border-coffee-400/30 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-2/3 right-1/6 w-6 h-6 bg-amber-400/20 rotate-45 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/8 w-4 h-4 bg-orange-400/25 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/8 w-10 h-10 border border-coffee-500/25 rotate-12 animate-spin" style={{ animationDuration: '8s', animationDelay: '3s' }}></div>

        {/* Enhanced Ambient Light Spots */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-200/25 via-orange-200/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-1/4 left-1/5 w-80 h-80 bg-gradient-to-tr from-coffee-200/20 via-amber-100/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-200/15 via-amber-200/20 to-orange-200/15 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }}></div>

        {/* Coffee Steam Effect */}
        <div className="absolute top-1/8 right-1/6 opacity-20">
          <div className="relative">
            <div className="w-1 h-20 bg-gradient-to-t from-coffee-400/40 to-transparent animate-pulse" style={{ animationDelay: '0s' }}></div>
            <div className="w-1 h-16 bg-gradient-to-t from-coffee-300/30 to-transparent animate-pulse absolute -left-2 top-2" style={{ animationDelay: '1s' }}></div>
            <div className="w-1 h-12 bg-gradient-to-t from-coffee-500/35 to-transparent animate-pulse absolute -right-2 top-4" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(90deg, #7c2d12 1px, transparent 1px),
                linear-gradient(180deg, #7c2d12 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          ></div>
        </div>

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-cream-50/10 to-coffee-100/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-6 py-2 bg-coffee-100/50 backdrop-blur-sm rounded-full border border-coffee-200/30">
            <span className="text-coffee-600 font-medium">Get In Touch</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-coffee-800 mb-6">
            Visit Our Café
          </h2>
          <p className="text-xl text-coffee-600 max-w-2xl mx-auto leading-relaxed">
            Come experience the perfect blend of exceptional coffee and warm hospitality. We'd love to meet you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Contact Information */}
          <div className="animate-slide-in-left">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
              <h3 className="text-3xl font-playfair font-bold text-coffee-800 mb-8">
                Visit Our Café
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-coffee-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-coffee-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-coffee-800 mb-2">Address</h4>
                    <p className="text-coffee-600 leading-relaxed">
                      221B Baker Street<br />
                      Bangalore, Karnataka 560001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-coffee-800 mb-2">Hours</h4>
                    <p className="text-coffee-600 leading-relaxed">
                      Monday - Friday: 6:00 AM - 9:00 PM<br />
                      Saturday - Sunday: 7:00 AM - 10:00 PM<br />
                      <span className="text-coffee-500 text-sm">Fresh coffee all day!</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-coffee-800 mb-2">Contact</h4>
                    <p className="text-coffee-600 leading-relaxed">
                      Phone: +91 98765 43210<br />
                      Email: hello@brewandbean.com<br />
                      <span className="text-coffee-500 text-sm">We're here to help!</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-playfair font-bold text-coffee-800 mb-4">Send Us a Message</h3>
                <p className="text-coffee-600">Share your thoughts, feedback, or just say hello!</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-coffee-700 font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/80 border-2 border-coffee-200/50 rounded-xl text-coffee-800 placeholder-coffee-400 focus:outline-none focus:ring-2 focus:ring-coffee-400 focus:border-coffee-400 transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-coffee-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/80 border-2 border-coffee-200/50 rounded-xl text-coffee-800 placeholder-coffee-400 focus:outline-none focus:ring-2 focus:ring-coffee-400 focus:border-coffee-400 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-coffee-700 font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/80 border-2 border-coffee-200/50 rounded-xl text-coffee-800 placeholder-coffee-400 focus:outline-none focus:ring-2 focus:ring-coffee-400 focus:border-coffee-400 transition-all duration-300 resize-none"
                    placeholder="Tell us about your coffee experience, feedback, or any questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 disabled:from-coffee-400 disabled:to-coffee-500 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-3 group"
                >
                  {isSubmitting ? (
                    <>
                      <Coffee className="w-5 h-5 animate-spin" />
                      <span>Sending Your Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
