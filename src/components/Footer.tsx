import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Send,
  CheckCircle,
  Home
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const location = useLocation();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 hover-scale-sm transition-transform duration-200">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center hover-glow">
                <Home className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Muhira Homes</h3>
                <p className="text-sm text-gray-400">Stylish rooms at transparent prices</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Experience luxury living in our premium apartments. Modern amenities, 
              stunning views, and unmatched comfort for your perfect stay.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover-scale">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover-scale">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover-scale">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover-scale">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors duration-200 link-hover"
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('apartments')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 link-hover"
                >
                  Apartments
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('amenities')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 link-hover"
                >
                  Amenities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 link-hover"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 hover-scale-sm transition-transform duration-200">
                <Phone size={18} className="text-blue-400" />
                <span className="text-gray-300">+256 758 267319</span>
              </div>
              <div className="flex items-center space-x-3 hover-scale-sm transition-transform duration-200">
                <Mail size={18} className="text-blue-400" />
                <span className="text-gray-300">homesmuhira@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3 hover-scale-sm transition-transform duration-200">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Muyenga<br />
                  Kampala, Uganda
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-gray-300 text-sm">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 hover-scale-sm transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
              >
                {isSubscribed ? (
                  <>
                    <CheckCircle size={18} />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Subscribe</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Muhira Homes. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 link-hover">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 link-hover">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 link-hover">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;