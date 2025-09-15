import { Property } from '../types/property';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    description: 'Stunning contemporary villa with panoramic city views, featuring high-end finishes, smart home technology, and resort-style amenities.',
    price: 2850000,
    location: {
      address: '1234 Hillcrest Drive',
      city: 'Beverly Hills',
      state: 'CA',
      zipCode: '90210',
      coordinates: { lat: 34.0736, lng: -118.4004 }
    },
    details: {
      bedrooms: 5,
      bathrooms: 6,
      sqft: 4500,
      lotSize: 8000,
      yearBuilt: 2021,
      propertyType: 'house',
      status: 'for-sale'
    },
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop'
    ],
    features: ['Pool', 'Home Theater', 'Wine Cellar', 'Smart Home', 'Garage', 'Garden'],
    agent: {
      name: 'Sarah Johnson',
      phone: '+1 (555) 123-4567',
      email: 'sarah@luxuryrealty.com',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: 'Downtown Penthouse',
    description: 'Exclusive penthouse apartment in the heart of downtown with floor-to-ceiling windows and private rooftop terrace.',
    price: 1750000,
    location: {
      address: '789 Metropolitan Ave',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      coordinates: { lat: 40.7589, lng: -73.9851 }
    },
    details: {
      bedrooms: 3,
      bathrooms: 3,
      sqft: 2800,
      yearBuilt: 2019,
      propertyType: 'apartment',
      status: 'for-sale'
    },
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop'
    ],
    features: ['Rooftop Terrace', 'Concierge', 'Gym', 'City Views', 'Parking', 'Storage'],
    agent: {
      name: 'Michael Chen',
      phone: '+1 (555) 987-6543',
      email: 'michael@urbanproperties.com',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: '3',
    title: 'Cozy Family Home',
    description: 'Charming family home in quiet neighborhood with large backyard, updated kitchen, and excellent school district.',
    price: 650000,
    location: {
      address: '456 Oak Street',
      city: 'Austin',
      state: 'TX',
      zipCode: '78701',
      coordinates: { lat: 30.2672, lng: -97.7431 }
    },
    details: {
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2200,
      lotSize: 6000,
      yearBuilt: 2015,
      propertyType: 'house',
      status: 'for-sale'
    },
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop'
    ],
    features: ['Large Backyard', 'Updated Kitchen', 'Fireplace', 'Garage', 'Near Schools'],
    agent: {
      name: 'Emily Rodriguez',
      phone: '+1 (555) 456-7890',
      email: 'emily@familyhomes.com',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-08')
  },
  {
    id: '4',
    title: 'Luxury Waterfront Condo',
    description: 'Elegant waterfront condominium with stunning ocean views, private beach access, and world-class amenities.',
    price: 1250000,
    location: {
      address: '321 Ocean Drive',
      city: 'Miami',
      state: 'FL',
      zipCode: '33139',
      coordinates: { lat: 25.7617, lng: -80.1918 }
    },
    details: {
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1800,
      yearBuilt: 2020,
      propertyType: 'condo',
      status: 'for-sale'
    },
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=600&fit=crop'
    ],
    features: ['Ocean Views', 'Beach Access', 'Pool', 'Spa', 'Valet Parking', 'Balcony'],
    agent: {
      name: 'David Martinez',
      phone: '+1 (555) 321-0987',
      email: 'david@oceanfront.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-12')
  },
  {
    id: '5',
    title: 'Modern Townhouse',
    description: 'Contemporary townhouse with open floor plan, rooftop deck, and attached garage in trendy neighborhood.',
    price: 850000,
    location: {
      address: '987 Maple Lane',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      coordinates: { lat: 47.6062, lng: -122.3321 }
    },
    details: {
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1950,
      yearBuilt: 2018,
      propertyType: 'townhouse',
      status: 'for-sale'
    },
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop'
    ],
    features: ['Rooftop Deck', 'Garage', 'Modern Kitchen', 'Hardwood Floors', 'Walk-in Closet'],
    agent: {
      name: 'Lisa Thompson',
      phone: '+1 (555) 654-3210',
      email: 'lisa@modernliving.com',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face'
    },
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  },
  {
    id: '6',
    title: 'Charming Cottage',
    description: 'Quaint cottage with vintage charm, beautiful garden, and cozy interior perfect for a peaceful lifestyle.',
    price: 425000,
    location: {
      address: '159 Rose Garden Way',
      city: 'Portland',
      state: 'OR',
      zipCode: '97201',
      coordinates: { lat: 45.5152, lng: -122.6784 }
    },
    details: {
      bedrooms: 2,
      bathrooms: 1,
      sqft: 1200,
      lotSize: 4000,
      yearBuilt: 1955,
      propertyType: 'house',
      status: 'for-sale'
    },
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop'
    ],
    features: ['Garden', 'Fireplace', 'Vintage Details', 'Quiet Street', 'Covered Porch'],
    agent: {
      name: 'Robert Wilson',
      phone: '+1 (555) 789-0123',
      email: 'robert@charminghomes.com',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face'
    },
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03')
  }
];

export const featuredProperties = mockProperties.slice(0, 3);
