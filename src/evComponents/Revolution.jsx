import React from 'react';
import { MapPin, Search } from 'lucide-react';

export default function RevolutionizeCharging() {
  return (
    <div className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Revolutionize the Way You Charge
            </h2>
            
            {/* Search Bar */}
            <div className="flex gap-3 mb-8">
              <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-200 flex-1">
                <MapPin className="w-5 h-5 text-gray-400" />
                <select className="bg-transparent text-gray-600 outline-none flex-1">
                  <option>Germany</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>France</option>
                </select>
              </div>
              
              <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-200 flex-1">
                <Search className="w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Kreuzberg, Berlin"
                  className="bg-transparent text-gray-600 outline-none flex-1"
                />
              </div>
              
              <button className="bg-[#4682B4] hover:bg-[#5F9EA0] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-md">
                Search
              </button>
            </div>
          </div>
          
          <div className="text-gray-600 text-lg leading-relaxed">
            <p>
              Experience the next generation of charging convenience with E-Station Finder. Easily locate and reserve charging stations near you, ensuring your electric vehicle is always powered and ready to go, no matter where you are.
            </p>
          </div>
        </div>

        {/* Map and Info Cards Section */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map Section - Takes 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-lg h-96">
            <img 
              src="/images/map.jpeg"
              alt="Map showing charging stations in Berlin"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Info Cards Column */}
          <div className="space-y-6">
            {/* Berlin Stats Card */}
            <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Berlin</h3>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">1.8K+</span>
              </div>
              <p className="text-gray-700 text-lg">Charging Stations</p>
              <div className="mt-6">
                <img 
                  src="/images/charging.jpeg" 
                  alt="Charging station"
                  className="w-32 h-32 object-cover rounded-xl ml-auto"
                />
              </div>
            </div>
            
            {/* Charging Station Image Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/images/charging.jpeg" 
                alt="Modern charging station"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#4682B4] bg-opacity-90 backdrop-blur-sm rounded-full p-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}