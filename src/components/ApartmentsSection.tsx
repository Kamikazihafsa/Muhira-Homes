import React from 'react';
import ApartmentCard from './ApartmentCard';
import AnimatedSection from './AnimatedSection';
import { apartments } from '../data/apartments';

const ApartmentsSection: React.FC = () => {
  return (
    <section id="apartments" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Apartments
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully curated selection of premium apartments, each designed to provide 
            the perfect blend of comfort, luxury, and convenience for your stay.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {apartments.map((apartment, index) => (
            <AnimatedSection
              key={apartment.id}
              animation={index % 2 === 0 ? 'slideInLeft' : 'slideInRight'}
              delay={index * 200}
            >
              <ApartmentCard apartment={apartment} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="scaleIn" delay={400} className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto hover-lift">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our team is here to help you find the perfect apartment for your stay. 
              Contact us for personalized recommendations based on your needs.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg"
            >
              Get Personal Assistance
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ApartmentsSection;