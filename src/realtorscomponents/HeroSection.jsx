import React, { useState } from 'react';
import { ChevronDown, Search, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    keywords: '',
    sector: 'Project Sector',
    projectType: 'Construction Type',
    budget: 'Budget Range',
    timeline: 'Timeline'
  });

  return (
    <div className="min-h-screen relative font-sans">
      {/* Background Image with optimized overlay for text readability */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop')`
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
        
        {/* Brand Tagline */}
        <div className="mb-6 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-white">
            <div className="flex gap-1">
              <div className="w-1.5 h-6 bg-yellow-500 transform -skew-x-12"></div>
              <div className="w-1.5 h-6 bg-blue-400 transform -skew-x-12"></div>
            </div>
            <span className="text-xs md:text-sm font-black tracking-[0.4em] uppercase text-blue-200">
              Echo Futur Builders & Realtors
            </span>
          </div>
          {/* Quality Badge */}
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/20">
            <ShieldCheck className="w-4 h-4 text-yellow-500" />
            <span className="text-white text-[10px] font-bold uppercase tracking-widest">No Compromise in Quality</span>
          </div>
        </div>

        {/* Impactful Heading */}
        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[1.1] max-w-6xl tracking-tight">
          Your Vision is Our <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            Blueprint.
          </span>
        </h1>

        {/* Subheading focusing on the Price Match Guarantee */}
        <p className="text-blue-50 text-center text-lg md:text-2xl mb-10 max-w-3xl leading-relaxed font-light">
          Combining architectural innovation with a unique <strong className="font-bold text-white underline decoration-yellow-500 decoration-2">Price Match Guarantee</strong>. From luxury villas to state-of-the-art hospitals.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mb-20 w-full max-w-md sm:max-w-none justify-center">
          <button className="bg-yellow-500 hover:bg-white text-gray-900 font-black px-12 py-5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-white/20 uppercase tracking-widest text-sm">
            Explore Portfolio
          </button>
          <button className="bg-transparent border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-black px-12 py-5 rounded-xl transition-all duration-300 uppercase tracking-widest text-sm">
            Request Quote
          </button>
        </div>

        {/* Filter Bar - Tailored to Echo Futur Services */}
        <div className="bg-white rounded-[2rem] shadow-2xl p-2 w-full max-w-6xl border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            
            {/* Sector Type */}
            <div className="relative group">
              <select
                value={formData.sector}
                onChange={(e) => setFormData({...formData, sector: e.target.value})}
                className="w-full pl-6 pr-10 py-5 bg-gray-50 rounded-2xl appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800 font-bold text-sm cursor-pointer"
              >
                <option>Project Sector</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Healthcare</option>
                <option>Hospitality</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-yellow-500 transition-colors" size={18} />
            </div>

            {/* Construction Type */}
            <div className="relative group">
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                className="w-full pl-6 pr-10 py-5 bg-gray-50 rounded-2xl appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800 font-bold text-sm cursor-pointer"
              >
                <option>Construction Type</option>
                <option>New Build</option>
                <option>Renovation</option>
                <option>Interior Fit-out</option>
                <option>Custom Farmhouse</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-yellow-500 transition-colors" size={18} />
            </div>

            {/* Budget Range - Reinforcing the Value proposition */}
            <div className="relative group">
              <select
                value={formData.budget}
                onChange={(e) => setFormData({...formData, budget: e.target.value})}
                className="w-full pl-6 pr-10 py-5 bg-gray-50 rounded-2xl appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800 font-bold text-sm cursor-pointer"
              >
                <option>Budget Range</option>
                <option>Standard (Competitive)</option>
                <option>Premium Luxury</option>
                <option>Infrastructure Scale</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-yellow-500 transition-colors" size={18} />
            </div>

            {/* Timelines */}
            <div className="relative group">
              <select
                value={formData.timeline}
                onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                className="w-full pl-6 pr-10 py-5 bg-gray-50 rounded-2xl appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800 font-bold text-sm cursor-pointer"
              >
                <option>Timeline</option>
                <option>Immediate Start</option>
                <option>Next 3 Months</option>
                <option>Next 6 Months</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-yellow-500 transition-colors" size={18} />
            </div>

            {/* Search Button */}
            <div className="p-1">
              <button className="w-full h-full bg-gray-900 hover:bg-yellow-500 text-yellow-500 hover:text-gray-900 font-black px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group uppercase text-xs tracking-widest">
                <Search size={18} />
                Find Excellence
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Trust Note */}
        <p className="mt-8 text-white/50 text-xs font-bold uppercase tracking-[0.2em]">
          End-to-End Solutions: From Land Acquisition to Final Handover
        </p>

      </div>
    </div>
  );
}