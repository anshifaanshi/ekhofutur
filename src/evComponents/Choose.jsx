import React from 'react';

export default function WhyChooseUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Why Choose Our Charging Network?
            </h2>
            
            {/* Feature Card */}
            <div className="bg-orange-500 rounded-2xl p-8 shadow-2xl max-w-md">
              <h3 className="text-5xl font-bold text-white mb-4">100%</h3>
              <h4 className="text-2xl font-bold text-white mb-3">Reliable Network</h4>
              <p className="text-white text-lg leading-relaxed">
                Your Reliable Guide to the Nearest Charging Stations, Anytime, Anywhere.
              </p>
            </div>
            
            {/* Transparent Pricing */}
            <div className="space-y-2">
              <h4 className="text-2xl font-semibold text-gray-300">Transparent Pricing</h4>
              <p className="text-gray-400 text-lg">
                Easily check and compare charging rates.
              </p>
            </div>
          </div>
          
          {/* Right Side - Images */}
          <div className="relative">
            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/charging.jpeg" 
                alt="Electric car at charging station"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* About Our Service Badge */}
            <div className="absolute top-8 right-8 bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 shadow-xl max-w-xs">
              <h5 className="text-sm font-semibold text-gray-400 mb-3 tracking-wide">
                ABOUT OUR SERVICE
              </h5>
              <p className="text-white text-base leading-relaxed">
                Discover Why We're the Trusted and Preferred Choice for Tens of Thousands of EV Owners Nationwide — Unmatched Convenience, Reliability, and Service Excellence at Every Step.
              </p>
            </div>
            
            {/* Bottom Right Image - Charging Cable */}
            <div className="absolute -bottom-12 -right-8 w-64 h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-900">
              <img 
                src="/images/charging.jpeg" 
                alt="EV charging cable"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-6 right-1/3 w-24 h-24 bg-teal-500 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}