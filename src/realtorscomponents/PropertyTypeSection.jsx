import React from 'react';

export default function PropertyTypesSection() {
  const propertyTypes = [
    { name: 'Houses', count: 22, icon: 'home' },
    { name: 'Apartments', count: 32, icon: 'building' },
    { name: 'Office', count: 42, icon: 'office' },
    { name: 'Townhome', count: 18, icon: 'townhome' },
    { name: 'Bungalow', count: 40, icon: 'bungalow' }
  ];

  const renderIcon = (type) => {
    switch(type) {
      case 'home':
        return (
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      case 'building':
        return (
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'office':
        return (
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'townhome':
        return (
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
          </svg>
        );
      case 'bungalow':
        return (
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              <div className="w-1 h-6 bg-gray-600 transform -skew-x-12"></div>
              <div className="w-1 h-6 bg-gray-600 transform -skew-x-12"></div>
            </div>
            <span className="text-sm font-medium tracking-wider uppercase text-gray-600">
              Property Types
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Explore Apartment Types
          </h2>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {propertyTypes.map((property, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group cursor-pointer relative overflow-hidden"
            >
              {/* Animated Yellow Border - grows from bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-500 transition-all duration-500 ease-out group-hover:h-full group-hover:opacity-10 rounded-2xl"></div>
              
              {/* Content */}
              <div className="flex flex-col items-center text-center relative z-10">
                {/* Icon Circle */}
                <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-yellow-500 transition-all duration-500">
                  {renderIcon(property.icon)}
                </div>
                
                {/* Property Name */}
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {property.name}
                </h3>
                
                {/* Property Count */}
                <p className="text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                  {property.count} Properties
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}