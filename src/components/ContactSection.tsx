import React from 'react';
import { Phone, Mail, MapPin, CheckCircle, Clock } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to book your stay or have questions? We're here to help make your 
            experience at Muhira Homes exceptional.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <AnimatedSection animation="slideInUp" delay={200}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover-lift">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 hover-scale-sm transition-transform duration-200">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center hover-glow">
                        <Phone className="text-blue-600 dark:text-blue-400" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                        <p className="text-gray-600 dark:text-gray-300">+256 758 267319</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Available 24/7 for bookings</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 hover-scale-sm transition-transform duration-200">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center hover-glow">
                        <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                        <p className="text-gray-600 dark:text-gray-300">homesmuhira@gmail.com</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Response within 2 hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 hover-scale-sm transition-transform duration-200">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center hover-glow">
                        <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Address</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Muyenga<br />
                          Kampala, Uganda
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 hover-scale-sm transition-transform duration-200">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center hover-glow">
                        <Clock className="text-blue-600 dark:text-blue-400" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Office Hours</h4>
                        <p className="text-gray-600 dark:text-gray-300">Mon - Fri: 8:00 AM - 8:00 PM</p>
                        <p className="text-gray-600 dark:text-gray-300">Sat - Sun: 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scaleIn" delay={400}>
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white hover-lift">
                <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Muhira Homes?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 hover-scale-sm transition-transform duration-200">
                      <CheckCircle size={20} className="text-blue-200 flex-shrink-0" />
                      <span>24/7 Customer Support</span>
                    </div>
                    <div className="flex items-center space-x-3 hover-scale-sm transition-transform duration-200">
                      <CheckCircle size={20} className="text-blue-200 flex-shrink-0" />
                      <span>Instant Booking Confirmation</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 hover-scale-sm transition-transform duration-200">
                      <CheckCircle size={20} className="text-blue-200 flex-shrink-0" />
                      <span>Premium Amenities Included</span>
                    </div>
                    <div className="flex items-center space-x-3 hover-scale-sm transition-transform duration-200">
                      <CheckCircle size={20} className="text-blue-200 flex-shrink-0" />
                      <span>Flexible Cancellation Policy</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-lg mb-6">
                    Ready to experience luxury living in Muyenga? Contact us today to book your perfect stay.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:+256 758 267319"
                      className="btn-primary bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold shadow-lg text-center"
                    >
                      Call Now: +256 758 267319
                    </a>
                    <a
                      href="mailto:homesmuhira@gmail.com"
                      className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover-scale-sm text-center"
                    >
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;