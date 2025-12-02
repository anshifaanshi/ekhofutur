import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function RealEstateHero() {
  const [formData, setFormData] = useState({
    keywords: '',
    sellOrRent: 'Sell or Rent',
    propertyType: 'Property Type',
    location: 'Location',
    amenities: 'Amenities',
  });

  return (
    <div className="min-h-screen relative">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-20 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-8 h-8 border-t-4 border-l-4 border-blue-900 rounded-tl-lg"></div>
                <div className="w-8 h-8 border-t-4 border-r-4 border-blue-900 rounded-tr-lg -ml-4"></div>
              </div>
              <span className="text-2xl font-bold">
                <span className="text-blue-900">Home</span>
                <span className="text-yellow-500"> Unik</span>
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {["Home", "Services", "About", "Testimonial", "Blog"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-yellow-500 font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Book Now Button */}
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-md">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/builders.jpg')`
      }} />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <div className="mb-8 flex items-center gap-2 text-white">
          <div className="flex gap-1">
            <div className="w-1 h-6 bg-white transform -skew-x-12"></div>
            <div className="w-1 h-6 bg-white transform -skew-x-12"></div>
          </div>
          <span className="text-sm font-medium tracking-wider uppercase">Welcome to Home Unik</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-6 leading-tight">
          Invest Today in<br />Your Dream Home
        </h1>

        <p className="text-white text-center text-lg mb-12 max-w-3xl leading-relaxed opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

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
            <input
              type="text"
              placeholder="Enter keywords"
              value={formData.keywords}
              onChange={(e) => setFormData({...formData, keywords: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700"
            />

            {["sellOrRent","propertyType","location","amenities"].map((field, idx) => (
              <div key={idx} className="relative">
                <select
                  value={formData[field]}
                  onChange={(e) => setFormData({...formData, [field]: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700 bg-white cursor-pointer"
                >
                  {field === "sellOrRent" && <>
                    <option>Sell or Rent</option>
                    <option>Sell</option>
                    <option>Rent</option>
                  </>}
                  {field === "propertyType" && <>
                    <option>Property Type</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Condo</option>
                  </>}
                  {field === "location" && <>
                    <option>Location</option>
                    <option>New York</option>
                    <option>Los Angeles</option>
                    <option>Chicago</option>
                    <option>Miami</option>
                  </>}
                  {field === "amenities" && <>
                    <option>Amenities</option>
                    <option>Pool</option>
                    <option>Gym</option>
                    <option>Parking</option>
                    <option>Garden</option>
                  </>}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
              </div>
            ))}

            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg h-full">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
