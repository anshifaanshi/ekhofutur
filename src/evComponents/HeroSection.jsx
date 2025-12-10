import React from 'react';

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Find Your Nearest Charging Station in Seconds
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Quickly locate the closest electric car or easy bike charging station
              and stay powered up wherever you are.
            </p>
            
            <button className="bg-[#4682B4] hover:bg-[#5F9EA0] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              Search Now
            </button>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
              <img 
                src="/images/charging.jpeg" 
                alt="Electric car charging at station"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#4682B4] rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#5F9EA0] rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}