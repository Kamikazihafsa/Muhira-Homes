import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Bath, Bed } from 'lucide-react';
import AutoScrollGallery from './AutoScrollGallery';
import { Apartment } from '../data/apartments';

interface ApartmentCardProps {
  apartment: Apartment;
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({ apartment }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden card-hover group">
      {/* Image Gallery */}
      <div className="relative h-80 overflow-hidden">
        <AutoScrollGallery
          images={apartment.images}
          alt={apartment.name}
          className="h-full"
        />
        
        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg hover-glow">
          ${apartment.price}/night
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {apartment.name}
          </h3>
          <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-1 hover-scale-sm">
              <Bed size={18} />
              <span>{apartment.bedrooms}</span>
            </div>
            <div className="flex items-center space-x-1 hover-scale-sm">
              <Bath size={18} />
              <span>{apartment.bathrooms}</span>
            </div>
            <div className="flex items-center space-x-1 hover-scale-sm">
              <Users size={18} />
              <span>{apartment.maxGuests}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {apartment.shortDescription}
        </p>

        {/* Quick Amenities Preview */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Amenities</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {apartment.amenities.slice(0, 4).map((amenity, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg text-center hover-scale-sm hover:bg-blue-50 dark:hover:bg-gray-600 transition-all duration-300"
                title={amenity.description}
              >
                <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                  {amenity.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex">
          <Link
            to={`/apartment/${apartment.id}`}
            className="flex-1 btn-primary bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;