import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Users,
  Bath,
  Bed,
  MapPin,
  CheckCircle,
  Send,
  Wifi,
  Car,
  Tv,
  ChefHat,
  Coffee,
  WashingMachine,
  AirVent,
  Shield,
  Dumbbell,
  Trees,
  Waves
} from 'lucide-react';
import { apartments } from '../data/apartments';
import AutoScrollGallery from '../components/AutoScrollGallery';

const iconMap: { [key: string]: React.ReactNode } = {
  Wifi: <Wifi size={20} />,
  Car: <Car size={20} />,
  Tv: <Tv size={20} />,
  ChefHat: <ChefHat size={20} />,
  Coffee: <Coffee size={20} />,
  WashingMachine: <WashingMachine size={20} />,
  AirVent: <AirVent size={20} />,
  Shield: <Shield size={20} />,
  Dumbbell: <Dumbbell size={20} />,
  Trees: <Trees size={20} />,
  Waves: <Waves size={20} />,
  Refrigerator: <ChefHat size={20} />,
  Microwave: <ChefHat size={20} />
};

const ApartmentDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const apartment = apartments.find(apt => apt.id === id);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    message: '',
    booking_date: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!apartment) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Apartment Not Found</h1>
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value,
  }));
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '1',
        message: '',
        booking_date:'',
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Back to Apartments</span>
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <div className="h-96 group">
                  <AutoScrollGallery
                    images={apartment.images}
                    alt={apartment.name}
                    className="h-full"
                    autoScrollInterval={5000}
                  />
                </div>
              </div>

              {/* Apartment Info */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      {apartment.name}
                    </h1>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <MapPin size={18} />
                      <span>{apartment.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      ${apartment.price}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">per night</div>
                  </div>
                </div>

                {/* Specifications */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                    <Bed className="mx-auto mb-2 text-blue-600 dark:text-blue-400" size={24} />
                    <div className="font-semibold text-gray-900 dark:text-white">{apartment.bedrooms}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Bedrooms</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                    <Bath className="mx-auto mb-2 text-blue-600 dark:text-blue-400" size={24} />
                    <div className="font-semibold text-gray-900 dark:text-white">{apartment.bathrooms}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Bathrooms</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                    <Users className="mx-auto mb-2 text-blue-600 dark:text-blue-400" size={24} />
                    <div className="font-semibold text-gray-900 dark:text-white">{apartment.maxGuests}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Max Guests</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About This Apartment</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {apartment.description}
                  </p>
                </div>
              </div>

              {/* Amenities */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Amenities</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {apartment.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-blue-600 dark:text-blue-400 mt-1">
                        {iconMap[amenity.icon] || <CheckCircle size={20} />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{amenity.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{amenity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policies */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">House Rules & Policies</h2>
                <ul className="space-y-3">
                  {apartment.policies.map((policy, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-600 dark:text-gray-300">{policy}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Book Your Stay</h3>

                <form onSubmit={handleSubmit} className="space-y-4" method='POST'>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="booking_date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Booking Date *
                    </label>
                    <input
                      type="date"
                      id="booking_date"
                      name="booking_date"
                      value={formData.booking_date}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      {Array.from({ length: apartment.maxGuests }, (_, i) => i + 1).map(num => (
                        <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Any special requests or questions..."
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle size={20} />
                        <span>Inquiry Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </button>

                  <div className="text-center pt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Or call us directly at{' '}
                      <a href="tel:+256 758 267319" className="text-blue-600 dark:text-blue-400 hover:underline">
                        +256 758 267319
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetailPage;