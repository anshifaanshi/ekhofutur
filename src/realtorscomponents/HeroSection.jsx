import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    keywords: '',
    sellOrRent: 'Buy or Lease',
    propertyType: 'Project Type',
    location: 'Location',
    amenities: 'Specifications'
  });

  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://tse3.mm.bing.net/th/id/OIP.8cskRuPcOdZkMfkpG6bccAHaEo?pid=Api&P=0&h=220')`
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        {/* Logo/Brand */}
        <div className="mb-8 flex items-center gap-2 text-white">
          <div className="flex gap-1">
            <div className="w-1.5 h-6 bg-yellow-500 transform -skew-x-12"></div>
            <div className="w-1.5 h-6 bg-white transform -skew-x-12"></div>
          </div>
          <span className="text-sm font-bold tracking-[0.3em] uppercase">Echo Futur Builders & Realtors</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-6 leading-tight max-w-5xl">
          Constructing Excellence. <br />
          <span className="text-yellow-500">Guaranteed Value.</span>
        </h1>

        {/* Subheading */}
        <p className="text-white text-center text-lg md:text-xl mb-12 max-w-3xl leading-relaxed opacity-90">
          At Echo Futur, we don’t just build structures; we build trust. Whether it’s a dream home or a critical healthcare facility, our philosophy is simple: Uncompromising Quality with a unique Price Match Guarantee.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full max-w-md sm:max-w-none justify-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-10 py-4 rounded-lg transition-all duration-300 shadow-lg uppercase tracking-wider">
            Explore Projects
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold px-10 py-4 rounded-lg transition-all duration-300 uppercase tracking-wider">
            Get a Quote
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {/* Keywords Input */}
            <div className="md:col-span-1">
              <input
                type="text"
                placeholder="Keywords (e.g. Luxury)"
                value={formData.keywords}
                onChange={(e) => setFormData({...formData, keywords: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700 font-medium"
              />
            </div>

            {/* Buy or Lease Dropdown */}
            <div className="relative">
              <select
                value={formData.sellOrRent}
                onChange={(e) => setFormData({...formData, sellOrRent: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700 bg-white cursor-pointer font-medium"
              >
                <option>Buy or Lease</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Healthcare</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
            </div>

            {/* Project Type Dropdown */}
            <div className="relative">
              <select
                value={formData.propertyType}
                onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700 bg-white cursor-pointer font-medium"
              >
                <option>Project Type</option>
                <option>Custom Home</option>
                <option>Medical Facility</option>
                <option>Apartment Complex</option>
                <option>Retail Space</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
            </div>

            {/* Location Dropdown */}
            <div className="relative">
              <select
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700 bg-white cursor-pointer font-medium"
              >
                <option>Location</option>
                <option>Metropolitan</option>
                <option>Suburban</option>
                <option>Industrial Zone</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
            </div>

            {/* Amenities Dropdown */}
            <div className="relative">
              <select
                value={formData.amenities}
                onChange={(e) => setFormData({...formData, amenities: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700 bg-white cursor-pointer font-medium"
              >
                <option>Specifications</option>
                <option>Sustainable Design</option>
                <option>High-Tech Integration</option>
                <option>Architecture Only</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
            </div>

            {/* Search Button */}
            <div>
              <button className="w-full bg-gray-900 hover:bg-black text-yellow-500 font-bold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg h-full uppercase text-sm tracking-wider">
                Find My Vision
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}