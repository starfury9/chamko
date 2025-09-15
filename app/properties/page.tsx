'use client';

import { useState, useMemo } from 'react';
import Navigation from '../../components/Navigation';
import PropertyCard from '../../components/PropertyCard';
import { mockProperties } from '../../data/mockProperties';
import { Property, PropertyFilters } from '../../types/property';

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<PropertyFilters>({
    priceRange: { min: 0, max: 10000000 },
    bedrooms: undefined,
    bathrooms: undefined,
    propertyType: undefined,
    status: undefined,
    location: undefined,
  });
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high' | 'newest' | 'oldest'>('newest');

  const filteredAndSortedProperties = useMemo(() => {
    const filtered = mockProperties.filter((property) => {
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = 
          property.title.toLowerCase().includes(searchLower) ||
          property.location.city.toLowerCase().includes(searchLower) ||
          property.location.state.toLowerCase().includes(searchLower);
        
        if (!matchesSearch) return false;
      }

      if (property.price < filters.priceRange.min || property.price > filters.priceRange.max) {
        return false;
      }

      if (filters.bedrooms && property.details.bedrooms < filters.bedrooms) {
        return false;
      }

      if (filters.propertyType && property.details.propertyType !== filters.propertyType) {
        return false;
      }

      if (filters.status && property.details.status !== filters.status) {
        return false;
      }

      return true;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'newest':
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });
  }, [searchTerm, filters, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setFilters({
      priceRange: { min: 0, max: 10000000 },
      bedrooms: undefined,
      bathrooms: undefined,
      propertyType: undefined,
      status: undefined,
      location: undefined,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">All Properties</h1>
            <p className="text-gray-600">
              Browse {mockProperties.length} available properties
            </p>
          </div>

          {/* Simple Filters */}
          <div className="bg-gray-50 rounded-lg p-4 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <input
                type="text"
                placeholder="Search location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              
              <select 
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === 'all') {
                    setFilters(prev => ({ ...prev, priceRange: { min: 0, max: 10000000 } }));
                  } else if (value === '0-500k') {
                    setFilters(prev => ({ ...prev, priceRange: { min: 0, max: 500000 } }));
                  } else if (value === '500k-1m') {
                    setFilters(prev => ({ ...prev, priceRange: { min: 500000, max: 1000000 } }));
                  } else if (value === '1m+') {
                    setFilters(prev => ({ ...prev, priceRange: { min: 1000000, max: 10000000 } }));
                  }
                }}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">Any Price</option>
                <option value="0-500k">Under $500k</option>
                <option value="500k-1m">$500k - $1M</option>
                <option value="1m+">$1M+</option>
              </select>

              <select 
                value={filters.bedrooms || ''}
                onChange={(e) => setFilters(prev => ({ 
                  ...prev, 
                  bedrooms: e.target.value ? parseInt(e.target.value) : undefined 
                }))}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Any Beds</option>
                <option value="1">1+ Beds</option>
                <option value="2">2+ Beds</option>
                <option value="3">3+ Beds</option>
                <option value="4">4+ Beds</option>
              </select>

              <select 
                value={filters.propertyType || ''}
                onChange={(e) => setFilters(prev => ({ 
                  ...prev, 
                  propertyType: e.target.value as Property['details']['propertyType'] || undefined 
                }))}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Any Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
              </select>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">
                {filteredAndSortedProperties.length} properties found
              </p>
              
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 text-sm text-blue-600 hover:text-blue-700"
                >
                  Clear filters
                </button>
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          {filteredAndSortedProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No properties match your criteria</p>
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
