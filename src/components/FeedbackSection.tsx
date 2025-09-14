import React, { useState } from 'react';
import { Star, Send, CheckCircle, Mail, User } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  location: string;
  stayDate: string;
}

const FeedbackSection: React.FC = () => {
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    rating: 5,
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Nakato Sarah',
      rating: 5,
      comment: 'Amazing place! Clean, modern and great location. The pool was perfect.',
      location: 'Entebbe',
      stayDate: 'December 2024'
    },
    {
      id: '2',
      name: 'Mukasa David',
      rating: 4,
      comment: 'Very good apartment with all amenities. WiFi could be faster but overall excellent.',
      location: 'Jinja',
      stayDate: 'November 2024'
    },
    {
      id: '3',
      name: 'Namuli Grace',
      rating: 5,
      comment: 'Perfect for families! Kids loved the pool. Kitchen had everything we needed.',
      location: 'Mbale',
      stayDate: 'October 2024'
    },
    {
      id: '4',
      name: 'Ssemakula James',
      rating: 5,
      comment: 'Luxury at its best! Fitness center and sauna were amazing. Great value.',
      location: 'Gulu',
      stayDate: 'September 2024'
    },
    {
      id: '5',
      name: 'Akello Patricia',
      rating: 5,
      comment: 'Exceeded expectations! Clean, modern design and excellent service. Highly recommend.',
      location: 'Mbarara',
      stayDate: 'August 2024'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFeedbackForm(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Feedback from ${feedbackForm.name} - ${feedbackForm.rating} Stars`);
    const body = encodeURIComponent(`
Name: ${feedbackForm.name}
Email: ${feedbackForm.email}
Rating: ${feedbackForm.rating}/5 stars
Message: ${feedbackForm.message}
    `);
    
    const mailtoLink = `mailto:homesmuhira@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFeedbackForm({
        name: '',
        email: '',
        rating: 5,
        message: ''
      });
    }, 3000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`transition-colors duration-200 ${
          index < rating
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Guests Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued guests have to say about their 
            experience at Muhira Homes.
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.id}
              animation="scaleIn"
              delay={index * 100}
            >
              <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 hover-lift hover-glow">
                <div className="flex items-center mb-4">
                  {/* WhatsApp-style avatar placeholder */}
                  <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mr-4 hover-scale-sm">
                    <span className="text-gray-600 dark:text-gray-300 font-semibold text-sm">
                      {getInitials(testimonial.name)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.stayDate}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Feedback Form */}
        <AnimatedSection animation="slideInUp" delay={300} className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white hover-lift">
            <div className="text-center mb-8">
              <div className="hover-scale inline-block">
                <Mail className="mx-auto mb-4 text-blue-200" size={48} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Share Your Experience
              </h3>
              <p className="text-lg text-blue-100">
                We'd love to hear about your stay! Your feedback helps us continue 
                providing exceptional service.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="feedback-name" className="block text-sm font-medium text-blue-100 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="feedback-name"
                    name="name"
                    value={feedbackForm.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-blue-200 hover-scale-sm transition-all duration-300"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="feedback-email" className="block text-sm font-medium text-blue-100 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="feedback-email"
                    name="email"
                    value={feedbackForm.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-blue-200 hover-scale-sm transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="feedback-rating" className="block text-sm font-medium text-blue-100 mb-2">
                  Rating *
                </label>
                <select
                  id="feedback-rating"
                  name="rating"
                  value={feedbackForm.rating}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-white hover-scale-sm transition-all duration-300"
                >
                  <option value={5} className="text-gray-900">⭐⭐⭐⭐⭐ Excellent (5 stars)</option>
                  <option value={4} className="text-gray-900">⭐⭐⭐⭐ Very Good (4 stars)</option>
                  <option value={3} className="text-gray-900">⭐⭐⭐ Good (3 stars)</option>
                  <option value={2} className="text-gray-900">⭐⭐ Fair (2 stars)</option>
                  <option value={1} className="text-gray-900">⭐ Poor (1 star)</option>
                </select>
              </div>

              <div>
                <label htmlFor="feedback-message" className="block text-sm font-medium text-blue-100 mb-2">
                  Your Feedback *
                </label>
                <textarea
                  id="feedback-message"
                  name="message"
                  value={feedbackForm.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent resize-none text-white placeholder-blue-200 hover-scale-sm transition-all duration-300"
                  placeholder="Tell us about your experience at Muhira Homes..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full btn-primary bg-white text-blue-600 hover:bg-blue-50 disabled:bg-green-100 disabled:text-green-800 font-bold py-4 px-6 rounded-lg shadow-lg flex items-center justify-center space-x-2"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    <span>Thank You!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Feedback</span>
                  </>
                )}
              </button>

              <p className="text-center text-sm text-blue-100">
                Your feedback will be sent directly to our team via email
              </p>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeedbackSection;