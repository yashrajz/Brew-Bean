
import React, { useState } from 'react';
import { Coffee } from 'lucide-react';

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
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-coffee-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-coffee-700 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 bg-cream-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 animate-bean-rotate">
          <Coffee className="w-12 h-12 text-coffee-500 opacity-30" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-playfair font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            Have a question or want to share your coffee experience? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-playfair font-semibold mb-8 text-cream-100">
              Visit Our Café
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-coffee-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-cream-100 mb-2">Address</h4>
                  <p className="text-cream-300 leading-relaxed">
                    123 Coffee Street<br />
                    Downtown District<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-coffee-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-cream-100 mb-2">Hours</h4>
                  <p className="text-cream-300 leading-relaxed">
                    Monday - Friday: 6:00 AM - 9:00 PM<br />
                    Saturday - Sunday: 7:00 AM - 10:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-coffee-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-cream-100 mb-2">Contact</h4>
                  <p className="text-cream-300 leading-relaxed">
                    Phone: (555) 123-BREW<br />
                    Email: hello@brewandbean.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-lift">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-cream-100 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-cream-300 focus:outline-none focus:ring-2 focus:ring-coffee-400 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-cream-100 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-cream-300 focus:outline-none focus:ring-2 focus:ring-coffee-400 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-cream-100 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-cream-300 focus:outline-none focus:ring-2 focus:ring-coffee-400 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your coffee experience..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-coffee-600 hover:bg-coffee-700 disabled:bg-coffee-800 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Coffee className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Coffee className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
