
import React from 'react';
import { Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-950 text-cream-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6 group">
              <Coffee className="w-8 h-8 text-coffee-400 group-hover:animate-bean-rotate transition-all duration-300" />
              <span className="text-2xl font-playfair font-bold">Brew & Bean</span>
            </div>
            <p className="text-cream-300 leading-relaxed mb-6">
              Your neighborhood coffee shop serving premium, ethically sourced coffee 
              with passion and care since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-playfair font-semibold mb-6 text-cream-100">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Menu', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-cream-300 hover:text-coffee-400 transition-colors duration-300 hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-playfair font-semibold mb-6 text-cream-100">Services</h4>
            <ul className="space-y-3 text-cream-300">
              <li>Coffee Catering</li>
              <li>Private Events</li>
              <li>Coffee Subscriptions</li>
              <li>Barista Training</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-playfair font-semibold mb-6 text-cream-100">Connect</h4>
            <div className="space-y-3 text-cream-300">
              <p>123 Coffee Street</p>
              <p>New York, NY 10001</p>
              <p>(555) 123-BREW</p>
              <p>hello@brewandbean.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-800 mt-12 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Coffee className="w-5 h-5 text-coffee-400 animate-pulse" />
            <span className="text-cream-300">Made with love and lots of coffee</span>
            <Coffee className="w-5 h-5 text-coffee-400 animate-pulse" />
          </div>
          <p className="text-cream-400 text-sm">
            &copy; 2024 Brew & Bean. All rights reserved. | Crafted with passion for coffee lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
