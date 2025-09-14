import React from 'react';
import Hero from '../components/Hero';
import ApartmentsSection from '../components/ApartmentsSection';
import AmenitiesSection from '../components/AmenitiesSection';
import FeedbackSection from '../components/FeedbackSection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <ApartmentsSection />
      <AmenitiesSection />
      <FeedbackSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;