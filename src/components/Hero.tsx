import React from 'react';
import { ArrowDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  const scrollToApartments = () => {
    const element = document.getElementById('apartments');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Muhira Homes Building"
          className="w-full h-full object-cover hover-scale-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <AnimatedSection animation="fadeIn" delay={200}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent block">
              Muhira Homes
            </span>
          </h1>
        </AnimatedSection>
        
        <AnimatedSection animation="slideInUp" delay={400}>
          <p className="text-xl md:text-2xl mb-4 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Stylish rooms at transparent prices
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="slideInUp" delay={600}>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Experience luxury living in our premium apartments. Modern amenities, stunning views, and unmatched comfort await you.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="scaleIn" delay={800}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToApartments}
              className="btn-primary bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Explore Apartments
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover-scale-sm"
            >
              Contact Us
            </button>
          </div>
        </AnimatedSection>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToApartments}
          className="text-white hover:text-blue-400 transition-colors duration-300 hover-scale"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;