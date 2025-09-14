import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import ApartmentsSection from '../components/ApartmentsSection';
import AmenitiesSection from '../components/AmenitiesSection';
import FeedbackSection from '../components/FeedbackSection';
import ContactSection from '../components/ContactSection';

import { useLocation, useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!target) return;

    const scroll = () => {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        // clear the state so it doesn't re-trigger
        navigate('.', { replace: true, state: null });
      } else {
        // try again shortly if the section hasn't mounted yet
        setTimeout(scroll, 50);
      }
    };

    requestAnimationFrame(scroll);
  }, [location.state, navigate]);

  return (
    <main>
      <Hero />
      <section id="apartments">
        <ApartmentsSection />
      </section>
      <section id="amenities">
        <AmenitiesSection />
      </section>
      <FeedbackSection />
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
};

export default HomePage;
