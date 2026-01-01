import React from 'react';

const OurStory = () => {
  return (
    <section className="w-full font-sans">
      {/* Top Image Section */}
      <div 
        className="relative h-[300px] md:h-[450px] w-full flex items-center px-8 md:px-16 lg:px-24"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://i.postimg.cc/MpCrxJBD/Download-Free-Vectors-Images-Photos-Videos-Vecteezy.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight uppercase">
          Our Story
        </h1>
      </div>

      {/* Content Section */}
      <div className="bg-[#111111] text-white py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-light">
            Maps and Vogs have made a name for itself as a travel brand signifying quality & reliability, 
            be it for Business, Leisure, MICE, Events, or its Educational travel segment.
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-12 font-light">
            Endowed with an in-depth knowledge of the business and keen awareness of global travel trends 
            for over 20 years, our founders decided to move forward from the conservative travel sector 
            to explore more groundbreaking travel. Hence Maps & Vogs was founded.
          </p>

          <h2 className="text-white text-xl md:text-2xl font-bold tracking-tight">
            Our expertise team is well-versed in handling
          </h2>
        </div>
      </div>
    </section>
  );
};

export default OurStory;