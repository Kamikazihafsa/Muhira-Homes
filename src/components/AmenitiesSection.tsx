import React from 'react';
import { Wifi, Car, Tv, ChefHat, Waves, Dumbbell, Trees, Shield, Coffee, WashingMachine as Washing, AirVent, Bath, Users, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import FacilitiesCarousel from './FacilitiesCarousel';

const AmenitiesSection: React.FC = () => {
  const amenityCategories = [
    {
      title: 'Essential Amenities',
      icon: <Shield size={32} />,
      items: [
        { icon: <Wifi size={20} />, name: 'High-Speed WiFi', description: 'Complimentary fiber internet throughout' },
        { icon: <Car size={20} />, name: 'Free Parking', description: 'Dedicated parking spaces for all guests' },
        { icon: <AirVent size={20} />, name: 'Climate Control', description: 'Individual temperature control in each unit' },
        { icon: <Shield size={20} />, name: '24/7 Security', description: 'Round-the-clock security and monitoring' }
      ]
    },
    {
      title: 'Kitchen & Dining',
      icon: <ChefHat size={32} />,
      items: [
        { icon: <ChefHat size={20} />, name: 'Full Kitchen', description: 'Complete kitchen with modern appliances' },
        { icon: <Coffee size={20} />, name: 'Coffee Station', description: 'Premium coffee and tea facilities' },
        { icon: <Users size={20} />, name: 'Dining Area', description: 'Spacious dining space for all guests' }
      ]
    },
    {
      title: 'Entertainment',
      icon: <Tv size={32} />,
      items: [
        { icon: <Tv size={20} />, name: 'Smart TV', description: 'Large screen with streaming services' },
        { icon: <Wifi size={20} />, name: 'Gaming Setup', description: 'Entertainment systems and gaming consoles' }
      ]
    },
    {
      title: 'Wellness & Recreation',
      icon: <Waves size={32} />,
      items: [
        { icon: <Waves size={20} />, name: 'Swimming Pool', description: 'Exclusive access to heated swimming pool' },
        { icon: <Bath size={20} />, name: 'Hot Tub & Sauna', description: 'Relaxation and wellness facilities' },
        { icon: <Dumbbell size={20} />, name: 'Fitness Center', description: 'Modern exercise equipment' },
        { icon: <Trees size={20} />, name: 'Garden Areas', description: 'Beautiful landscaped outdoor spaces' }
      ]
    },
    {
      title: 'Convenience',
      icon: <Washing size={32} />,
      items: [
        { icon: <Washing size={20} />, name: 'Laundry Facilities', description: 'In-unit washer and dryer' },
        { icon: <MapPin size={20} />, name: 'Prime Location', description: 'Central location with easy access to attractions' }
      ]
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            World-Class Amenities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience luxury living with our comprehensive range of amenities designed to make 
            your stay comfortable, convenient, and memorable. Enjoy exclusive access to swimming pool and premium facilities.
          </p>
        </AnimatedSection>

        {/* Facilities Carousel */}
        <AnimatedSection animation="scaleIn" delay={200} className="mb-16">
          <FacilitiesCarousel className="max-w-6xl mx-auto hover-lift" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {amenityCategories.map((category, index) => (
            <AnimatedSection
              key={index}
              animation="scaleIn"
              delay={index * 150 + 400}
            >
              <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 hover-lift hover-glow">
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 dark:text-blue-400 mr-3 hover-scale">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3 hover-scale-sm transition-transform duration-200">
                      <div className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{item.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="slideInUp" delay={800} className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white hover-lift">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Premium Experience Awaits
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Every detail has been carefully considered to ensure your stay exceeds expectations. 
              From luxury amenities to personalized service, we're committed to your comfort.
            </p>
            <button
              onClick={() => document.getElementById('apartments')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold shadow-lg"
            >
              Book Your Stay Now
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AmenitiesSection;