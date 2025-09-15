'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import { mockProperties } from '../../../data/mockProperties';

export default function PropertyDetailPage() {
  const params = useParams();
  const propertyId = params.id as string;
  const property = mockProperties.find(p => p.id === propertyId);
  
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  if (!property) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Property Not Found</h1>
            <p className="text-gray-600 mb-8">The property you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/properties">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                Back to Properties
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! The agent will contact you soon.');
    setShowContactForm(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex mb-6 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-700">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/properties" className="text-blue-600 hover:text-blue-700">Properties</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-500">{property.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Property Header */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h1>
                    <p className="text-gray-600">
                      {property.location.address}, {property.location.city}, {property.location.state} {property.location.zipCode}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {formatPrice(property.price)}
                    </div>
                    <span className={`inline-block px-3 py-1 text-sm rounded ${
                      property.details.status === 'for-sale' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {property.details.status === 'for-sale' ? 'For Sale' : 'For Rent'}
                    </span>
                  </div>
                </div>

                {/* Property Stats */}
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div className="bg-white rounded p-3">
                    <div className="text-lg font-semibold text-gray-900">{property.details.bedrooms}</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="bg-white rounded p-3">
                    <div className="text-lg font-semibold text-gray-900">{property.details.bathrooms}</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="bg-white rounded p-3">
                    <div className="text-lg font-semibold text-gray-900">{property.details.sqft.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Sq Ft</div>
                  </div>
                  <div className="bg-white rounded p-3">
                    <div className="text-lg font-semibold text-gray-900">{property.details.yearBuilt}</div>
                    <div className="text-sm text-gray-600">Built</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              {/* Property Details */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Property Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Property Type</span>
                    <p className="text-gray-900 capitalize">{property.details.propertyType}</p>
                  </div>
                  {property.details.lotSize && (
                    <div>
                      <span className="text-sm font-medium text-gray-500">Lot Size</span>
                      <p className="text-gray-900">{property.details.lotSize.toLocaleString()} sq ft</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
                {/* Agent Info */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3"></div>
                  <h3 className="text-lg font-semibold text-gray-900">{property.agent.name}</h3>
                  <p className="text-gray-600 text-sm">Licensed Agent</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <span className="text-gray-600">Phone:</span>
                    <span className="ml-2 text-gray-900">{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-600">Email:</span>
                    <span className="ml-2 text-gray-900">{property.agent.email}</span>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => setShowContactForm(!showContactForm)}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Contact Agent
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-200 transition-colors">
                    Schedule Tour
                  </button>
                </div>

                {/* Contact Form */}
                {showContactForm && (
                  <div className="mt-6 pt-6 border-t">
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <input
                        type="tel"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
