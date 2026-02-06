import React from 'react';

export default function PropertyListings() {
  const properties = [
    {
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
      category: 'Residential Excellence',
      title: 'Luxury Villas & Flats',
      description: 'Modern living spaces designed for comfort and elegance. We build custom farmhouses and private escapes that blend perfectly with nature.',
      tag: 'Dream Vision'
    },
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
      category: 'Commercial & Hospitality',
      title: 'Business Hubs & Eateries',
      description: 'High-functioning commercial spaces that drive growth and inviting atmospheres for restaurants and homestays.',
      tag: 'Growth Partners'
    },
    {
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
      category: 'Healthcare Infrastructure',
      title: 'Clinics & Hospitals',
      description: 'Specialized construction meeting the highest safety and technical standards. Precision in every blueprint for the medical field.',
      tag: 'Safety First'
    }
  ];

  return (
    <div className="bg-white py-24 px-4 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block px-4 py-1.5 mb-4 border border-blue-100 rounded-full bg-blue-50/50">
             <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">
               Our Diverse Project Portfolio
             </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1f3f5c] mb-6 tracking-tight">
            Guaranteed Value in Every <span className="text-blue-600">Square Foot</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            At Echo Futur, we don’t just build structures; we build trust. From your dream home 
            to critical healthcare facilities, our philosophy is simple: **Uncompromising Quality.**
          </p>
        </div>
        
        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((property, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-72">
                <div className="absolute top-5 left-5 z-20">
                  <span className="bg-white/90 backdrop-blur-sm text-[#1f3f5c] text-[10px] font-black px-3 py-2 rounded-lg uppercase tracking-widest shadow-sm">
                    {property.tag}
                  </span>
                </div>
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f3f5c]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Details */}
              <div className="p-8 flex-grow flex flex-col">
                <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.2em] block mb-3">
                  {property.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {property.title}
                </h3>

                <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                  {property.description}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <button className="text-[#1f3f5c] font-black text-xs uppercase tracking-widest hover:text-blue-600 transition-colors">
                    Explore Project →
                  </button>
                  {/* Small "Price Match" Badge for the portfolio */}
                  <div className="flex items-center gap-1 opacity-60">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Value Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Footer Callout */}
        <div className="mt-20 bg-[#1f3f5c] rounded-[2rem] p-10 text-center text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-110"></div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Have a unique vision?</h3>
          <p className="text-blue-100/80 mb-8 max-w-xl mx-auto">
            Our architectural innovation and **Price Match Guarantee** ensure you never have to choose between your budget and your vision.
          </p>
          <button className="bg-yellow-400 hover:bg-white text-gray-900 font-black px-10 py-4 rounded-xl transition-all duration-300 uppercase tracking-widest text-sm">
            Partner with Echo Futur
          </button>
        </div>

      </div>
    </div>
  );
}