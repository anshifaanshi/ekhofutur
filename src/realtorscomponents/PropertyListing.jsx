import React from 'react';

export default function PropertyListings() {
  const properties = [
    {
      image: '/images/builders3.jpg',
      title: 'Presidential Towers',
      description: '2 Bedroom Villa for Rent in Al Barsha Studio, Al Barsha , Al Barsha.',
      price: '$9,575'
    },
    {
      image: '/images/builders4.jpg',
      title: 'Presidential Towers',
      description: '2 Bedroom Villa for Rent in Al Barsha Studio, Al Barsha , Al Barsha.',
      price: '$9,575'
    },
    {
      image: '/images/builders5.jpg',
      title: 'Presidential Towers',
      description: '2 Bedroom Villa for Rent in Al Barsha Studio, Al Barsha , Al Barsha.',
      price: '$9,575'
    }
  ];

  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Property Image */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Property Details */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {property.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {property.description}
                </p>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  {/* Price */}
                  <span className="text-2xl font-bold text-gray-900">
                    {property.price}
                  </span>

                  {/* View More Button */}
                  <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-300 text-sm">
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}