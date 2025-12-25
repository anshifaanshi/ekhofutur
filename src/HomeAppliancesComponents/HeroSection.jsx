import React from 'react';
import { CheckCircle, Globe } from 'lucide-react';

export default function HomeSection() {
  return (
    <div 
      className="min-h-screen py-16 px-6"
      style={{
        background: "linear-gradient(135deg, #4682B4 0%, #5F9EA0 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold">Home</h3>
              <div className="flex items-center gap-2">
                <span className="text-lg font-medium">Salford & Co.</span>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
              </div>
            </div>

            {/* Main Title */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                Appliances Repair Services
              </h1>
              <p className="text-xl text-white/90">
                Expert Care for Every Appliance.
              </p>
            </div>

            {/* Our Services */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Our Services:</h2>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#4682B4]" />
                </div>
                <span className="text-lg font-medium">Washing Machine Repair</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#4682B4]" />
                </div>
                <span className="text-lg font-medium">Oven and Stove Repair</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button className="bg-[#4682B4] hover:bg-[#5F9EA0] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 shadow-xl">
                Contact Us
              </button>
              <button className="bg-[#5F9EA0] hover:bg-[#4682B4] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 shadow-xl">
                Discount 30% Off
              </button>
            </div>

            {/* Website Info */}
            <div className="flex items-center gap-3 pt-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-[#4682B4]" />
              </div>
              <div>
                <p className="text-sm text-white/80">Our Website</p>
                <p className="font-semibold text-lg">www.reallygreatsite.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-4">
              <img 
                src="/images/home.jpeg"
                alt="Appliance repair service"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>

            {/* Small Circular Image - Top Left */}
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-white rounded-full overflow-hidden shadow-xl border-8 border-white/20">
              <img 
                src="/images/home.jpeg"
                alt="Service detail"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Play Button Overlay */}
            <div className="absolute bottom-12 right-12 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#4682B4] border-b-8 border-b-transparent ml-1"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-12 right-1/4 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}