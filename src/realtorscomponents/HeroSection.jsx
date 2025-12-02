import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    keywords: '',
    sellOrRent: 'Sell or Rent',
    propertyType: 'Property Type',
    location: 'Location',
    amenities: 'Amenities'
  });

  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/builders.jpg')`
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        {/* Logo/Brand */}
        <div className="mb-8 flex items-center gap-2 text-white">
          <div className="flex gap-1">
            <div className="w-1 h-6 bg-white transform -skew-x-12"></div>
            <div className="w-1 h-6 bg-white transform -skew-x-12"></div>
          </div>
          <span className="text-sm font-medium tracking-wider uppercase">Welcome to Home Unik</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-6 leading-tight">
          Invest Today in<br />Your Dream Home
        </h1>

        {/* Subheading */}
        <p className="text-white text-center text-lg mb-12 max-w-3xl leading-relaxed opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mb-16">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg">
            View Property
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300">
            Contact Now
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {/* Keywords Input */}
            <div className="md:col-span-1">
              <input
                type="text"
                placeholder="Enter keywords"
                value={formData.keywords}
                onChange={(e) => setFormData({...formData, keywords: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700"
              />
            </div>

            {/* Sell or Rent Dropdown */}
            <div className="relative">
              <select
                value={formData.sellOrRent}
                onChange={(e) => setFormData({...formData, sellOrRent: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700 bg-white cursor-pointer"
              >
                <option>Sell or Rent</option>
                <option>Sell</option>
                <option>Rent</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
            </div>

            {/* Property Type Dropdown */}
            <div className="relative">
              <select
                value={formData.propertyType}
                onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700 bg-white cursor-pointer"
              >
                <option>Property Type</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Condo</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
            </div>

            {/* Location Dropdown */}
            <div className="relative">
              <select
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700 bg-white cursor-pointer"
              >
                <option>Location</option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
                <option>Miami</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
            </div>

            {/* Amenities Dropdown */}
            <div className="relative">
              <select
                value={formData.amenities}
                onChange={(e) => setFormData({...formData, amenities: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700 bg-white cursor-pointer"
              >
                <option>Amenities</option>
                <option>Pool</option>
                <option>Gym</option>
                <option>Parking</option>
                <option>Garden</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
            </div>

            {/* Search Button */}
            <div>
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg h-full">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}