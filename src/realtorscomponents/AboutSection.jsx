
import React from 'react';
import { Home, Shield, Users, Mountain } from 'lucide-react';

export default function AboutSection() {

  const features = [
    { icon: Home, title: 'Smart Home Design' },
    { icon: Users, title: 'Exceptional Lifestyle' },
    { icon: Shield, title: 'Complete 24/7 Security' },
    { icon: Mountain, title: 'Beautiful Scene Around' }
  ];

  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE IMAGE */}
          <div className="relative flex justify-center">

            {/* Yellow Decorative Dots */}
            <div className="absolute -left-8 -top-8 grid grid-cols-8 gap-2 opacity-80">
              {[...Array(64)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl w-full max-w-lg">
              <img 
                src="/images/builders1.jpg" 
                alt="Modern Home"
                className="w-full h-auto object-cover"
              />
            </div>

          </div>

          {/* RIGHT SIDE CONTENT */}
          <div>

            {/* Section Label */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <div className="w-1 h-6 bg-[#4682B4] transform -skew-x-12"></div>
                <div className="w-1 h-6 bg-[#4682B4] transform -skew-x-12"></div>
              </div>
              <span className="text-sm font-medium tracking-wider uppercase text-[#4682B4]">
                About Home Unik
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#4682B4] mb-6 leading-tight">
              The Leading Real Estate <br /> Marketplace
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum consectetur 
              adipiscing elit sed do eiusmod.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#4682B4]/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#4682B4]" />
                    </div>
                    <span className="text-[#4682B4] font-medium">
                      {feature.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Button */}
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Read More
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
