import Link from "next/link";
import Navigation from "../components/Navigation";
import PropertyCard from "../components/PropertyCard";
import { featuredProperties } from "../data/mockProperties";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Your Perfect Property
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Search through thousands of properties to find your ideal home
          </p>
          
          {/* Simple Search */}
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter location or property type"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Link href="/properties">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                  Search Properties
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-gray-600">
              Browse our handpicked selection of quality properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/properties">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                View All Properties
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
              <div className="text-gray-600 text-sm">Properties</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">200+</div>
              <div className="text-gray-600 text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
              <div className="text-gray-600 text-sm">Cities</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">10+</div>
              <div className="text-gray-600 text-sm">Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-xl font-bold text-blue-400 mb-3">PropertyHub</div>
              <p className="text-gray-400 text-sm">
                Your trusted partner in real estate. Find, buy, and sell properties with ease.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/properties" className="hover:text-white">Properties</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>info@propertyhub.com</li>
                <li>+1 (555) 123-4567</li>
                <li>New York, NY</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2024 PropertyHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
