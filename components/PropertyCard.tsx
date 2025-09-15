import Link from 'next/link';
import { Property } from '../types/property';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link href={`/properties/${property.id}`}>
      <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {property.title}
            </h3>
            <p className="text-sm text-gray-600">
              {property.location.city}, {property.location.state}
            </p>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-blue-600">
              {formatPrice(property.price)}
            </div>
            <span className={`inline-block px-2 py-1 text-xs rounded ${
              property.details.status === 'for-sale' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-blue-100 text-blue-700'
            }`}>
              {property.details.status === 'for-sale' ? 'For Sale' : 'For Rent'}
            </span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {property.description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span>{property.details.bedrooms} beds</span>
          <span>{property.details.bathrooms} baths</span>
          <span>{property.details.sqft.toLocaleString()} sqft</span>
          <span className="capitalize">{property.details.propertyType}</span>
        </div>
      </div>
    </Link>
  );
}
