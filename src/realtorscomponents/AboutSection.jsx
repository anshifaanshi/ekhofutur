import React, { useState } from 'react';
import { Play, Home, Shield, Users, Mountain } from 'lucide-react';

export default function AboutSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    { icon: Home, title: 'Smart Home Design' },
    { icon: Users, title: 'Exceptional Lifestyle' },
    { icon: Shield, title: 'Complete 24/7 Security' },
    { icon: Mountain, title: 'Beautiful Scene Around' }
  ];

  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Images */}
          <div className="relative">
            {/* Decorative Dots Pattern */}
            <div className="absolute -left-8 -top-8 grid grid-cols-8 gap-2 opacity-40">
              {[...Array(64)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/builders1.jpg" 
                alt="Modern House"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Video Thumbnail with Play Button */}
            <div className="absolute bottom-8 left-8 w-72 h-48 z-20">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group cursor-pointer">
                <img 
                  src="/images/builders2.jpg" 
                  alt="Property Video"
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300">
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                  >
                    <Play className="w-8 h-8 text-blue-900 ml-1" fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Section Label */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <div className="w-1 h-6 bg-gray-600 transform -skew-x-12"></div>
                <div className="w-1 h-6 bg-gray-600 transform -skew-x-12"></div>
              </div>
              <span className="text-sm font-medium tracking-wider uppercase text-gray-600">
                About Home Unik
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
              The Leading Real Estate<br />About Marketplace.
            </h2>

            {/* Description */}
            <p className="text-gray-500 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-yellow-500" />
                    </div>
                    <span className="text-gray-600 font-medium">
                      {feature.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Read More Button */}
            <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Read More
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}