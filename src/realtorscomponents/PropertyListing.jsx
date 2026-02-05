import React from 'react';

export default function PropertyListings() {
  const properties = [
    {
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
      category: 'Residential Excellence',
      title: 'Luxury Villas & Flats',
      description: 'Modern living spaces designed for comfort and elegance. High-end finishes with a focus on contemporary aesthetics.',
      tag: 'Dream Homes'
    },
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
      category: 'Commercial & Hospitality',
      title: 'Business Hubs & Restaurants',
      description: 'High-functioning commercial spaces and inviting atmospheres designed to drive growth and welcome guests.',
      tag: 'Urban Growth'
    },
    {
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
      category: 'Healthcare Infrastructure',
      title: 'Clinics & Hospitals',
      description: 'Specialized construction meeting the highest safety and technical standards for the modern medical field.',
      tag: 'Technical Precision'
    }
  ];

  return (
    <div className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Diverse Project Portfolio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Our expertise spans across residential, commercial, and specialized sectors. 
            We bring the same level of precision to every blueprint.
          </p>
        </div>
        
        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-yellow-500/50 hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-72">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {property.tag}
                  </span>
                </div>
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Details */}
              <div className="p-8">
                <span className="text-yellow-600 font-bold text-xs uppercase tracking-[0.2em] block mb-2">
                  {property.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {property.title}
                </h3>

                <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                  {property.description}
                </p>

                <div className="pt-6 border-t border-gray-200">
                  <button className="w-full bg-gray-900 hover:bg-yellow-500 hover:text-gray-900 text-white font-bold py-3.5 rounded-xl transition-all duration-300 text-sm uppercase tracking-widest">
                    View Project Details
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