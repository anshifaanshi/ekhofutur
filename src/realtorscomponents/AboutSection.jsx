import React from 'react';
import { Home, Shield, Activity, BadgePercent } from 'lucide-react';

export default function AboutSection() {
  // Updated features to align with Echo Futur's specific value propositions
  const features = [
    { icon: Home, title: 'Residential & Commercial' },
    { icon: BadgePercent, title: 'Price Match Guarantee' },
    { icon: Shield, title: 'No Quality Compromise' },
    { icon: Activity, title: 'Healthcare Infrastructure' }
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
                alt="Echo Futur Construction Excellence"
                className="w-full h-auto object-cover"
              />
              {/* Floating Quote/Badge */}
              <div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-yellow-400 z-20 hidden md:block">
                <p className="text-[#4682B4] font-bold text-sm italic">
                  "Your vision is our blueprint."
                </p>
              </div>
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
                About Echo Futur
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#4682B4] mb-6 leading-tight">
              Constructing Excellence with <br /> 
              <span className="text-yellow-500">Uncompromising Quality</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Echo Futur Builders & Realtors, we don’t just build structures; we build trust. 
              As the infrastructure arm of the Echo Futur group, we combine architectural 
              innovation with a unique <strong>Price Match Guarantee</strong>, ensuring you never 
              have to choose between your budget and your vision.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed italic border-l-2 border-gray-200 pl-4">
              From land acquisition and architectural design to the final handover, 
              our team manages the entire lifecycle of your project.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-12 h-12 bg-[#4682B4]/10 rounded-lg flex items-center justify-center group-hover:bg-[#4682B4] transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#4682B4] group-hover:text-white" />
                    </div>
                    <span className="text-[#1f3f5c] font-semibold text-sm md:text-base">
                      {feature.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide text-sm">
                Build Your Future
              </button>
              <p className="text-[#4682B4] font-medium text-sm">
                Quality you can stand on.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}