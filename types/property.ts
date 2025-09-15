export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  details: {
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    lotSize?: number;
    yearBuilt: number;
    propertyType: 'house' | 'apartment' | 'condo' | 'townhouse' | 'land';
    status: 'for-sale' | 'for-rent' | 'sold' | 'rented';
  };
  images: string[];
  features: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface PropertyFilters {
  priceRange: {
    min: number;
    max: number;
  };
  bedrooms?: number;
  bathrooms?: number;
  propertyType?: Property['details']['propertyType'];
  status?: Property['details']['status'];
  location?: string;
}
