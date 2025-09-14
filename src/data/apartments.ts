export interface Apartment {
  id: string;
  name: string;
  price: number;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  size: number;
  description: string;
  shortDescription: string;
  amenities: {
    icon: string;
    name: string;
    description: string;
  }[];
  premiumFeatures?: {
    name: string;
    description: string;
    hours?: string;
  }[];
  location: string;
  policies: string[];
}

export const apartments: Apartment[] = [
  {
    id: 'apartment-1',
    name: 'Modern Apartment',
    price: 55,
    images: [
  '/images/modern-apartment/living-room.jpg',
  '/images/modern-apartment/kitchen.jpg',
  '/images/modern-apartment/bedroom.jpg',
  '/images/modern-apartment/bedroom2.jpg',
  '/images/modern-apartment/dining.jpg'
],
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 3,
    size: 850,
    shortDescription: 'A comfortable and modern 2-bedroom apartment perfect for families or groups.',
    description: 'Experience comfort and style in this beautifully designed 2-bedroom apartment. Featuring a fully equipped kitchen, spacious living area, and modern amenities, this space is perfect for families or groups seeking a relaxing stay. The apartment boasts contemporary furnishings, high-speed internet, and all the conveniences of home.',
    location: 'Muyenga, Kampala',
    policies: [
      'Pets allowed with prior approval',
      'Quiet hours: 10 PM - 8 AM',
      'Maximum occupancy: 3 guests'
    ],
    amenities: [
      { icon: 'ChefHat', name: 'Full Kitchen', description: 'Complete kitchen with all appliances and cookware' },
      { icon: 'Refrigerator', name: 'Refrigerator', description: 'Full-size refrigerator with freezer compartment' },
      { icon: 'Microwave', name: 'Microwave', description: 'Built-in microwave oven for quick meals' },
      { icon: 'Tv', name: 'Smart TV', description: '55" Smart TV with streaming services' },
      { icon: 'Wifi', name: 'Free WiFi', description: 'High-speed fiber internet throughout' },
      { icon: 'WashingMachine', name: 'Laundry', description: 'In-unit washer and dryer' },
      { icon: 'Car', name: 'Free Parking', description: 'Dedicated parking space included' },
      { icon: 'AirVent', name: 'AC/Heating', description: 'Individual climate control system' },
      { icon: 'Coffee', name: 'Coffee Station', description: 'Premium coffee maker and supplies' },
      { icon: 'Shield', name: 'Security', description: '24/7 security and keyless entry' }
    ]
  },
  {
    id: 'apartment-2',
    name: 'Luxury Suite',
    price: 65,
    images: [
  '/images/luxury-suite/living.jpg',
  '/images/luxury-suite/kitchen.jpg',
  '/images/luxury-suite/bedroom.jpg',
  '/images/luxury-suite/patio.jpg',
  '/images/luxury-suite/dining.jpg'
],
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    size: 1200,
    shortDescription: 'Our premium apartment featuring exclusive access to luxury amenities.',
    description: 'Indulge in luxury with our premium suite featuring spacious living areas and exclusive access to world-class amenities. This elegantly appointed apartment offers the perfect blend of comfort and sophistication, with high-end furnishings, premium appliances, and access to our exclusive swimming pool and spa facilities.',
    location: 'Muyenga, Kampala',
    policies: [
      'Adults only (18+)',
      'Quiet hours: 9 PM - 9 AM',
      'Maximum occupancy: 4 guests',
      'Pool access requires key card'
    ],
    amenities: [
      { icon: 'ChefHat', name: 'Gourmet Kitchen', description: 'Premium kitchen with high-end appliances' },
      { icon: 'Tv', name: 'Entertainment System', description: '65" Smart TV with surround sound' },
      { icon: 'Dumbbell', name: 'Fitness Equipment', description: 'Personal exercise equipment in unit' },
      { icon: 'Trees', name: 'Garden Access', description: 'Private garden and outdoor terrace' },
      { icon: 'Wifi', name: 'Premium WiFi', description: 'Ultra-fast fiber internet connection' },
      { icon: 'Car', name: 'Covered Parking', description: 'Protected underground parking' },
      { icon: 'AirVent', name: 'Climate Control', description: 'Advanced HVAC with air purification' },
      { icon: 'Coffee', name: 'Espresso Machine', description: 'Professional-grade coffee station' },
      { icon: 'WashingMachine', name: 'Premium Laundry', description: 'High-end washer/dryer with steam' },
      { icon: 'Shield', name: 'Concierge Service', description: '24/7 concierge and room service' }
    ]
  }
];