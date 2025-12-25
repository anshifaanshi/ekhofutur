import React from 'react';
import { Play, ChevronRight, Star } from 'lucide-react';

export default function FitnessHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">Revamp</div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="hover:text-yellow-300 transition-colors">About</a>
          <a href="#services" className="hover:text-yellow-300 transition-colors">Services</a>
          <a href="#team" className="hover:text-yellow-300 transition-colors">Team</a>
          <a href="#testimonial" className="hover:text-yellow-300 transition-colors">Testimonial</a>
          <a href="#pricing" className="hover:text-yellow-300 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-yellow-300 transition-colors">FAQ's</a>
        </div>

        <button className="bg-yellow-300 text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
          Start Free Trial
          <ChevronRight size={20} />
        </button>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            ACHIEVE Y
            <span className="relative inline-block">
              <span className="relative z-10">O</span>
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="text-yellow-300 text-7xl">/</span>
              </span>
            </span>
            UR
            <br />
            <span className="text-slate-100">FITNESS DREAMS</span>
          </h1>

          <p className="text-lg text-slate-300 max-w-xl">
            Through personalized coaching, cutting edge techniques and support we will help you achieve the fitness goals you have always wanted
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-6">
            <button className="bg-yellow-300 text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
              Join Now
              <ChevronRight size={20} />
            </button>

            <button className="flex items-center gap-3 hover:gap-4 transition-all group">
              <div className="bg-white text-slate-900 rounded-full p-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
                <Play size={24} fill="currentColor" />
              </div>
              <span className="font-semibold">Watch video</span>
            </button>
          </div>

          {/* Rating Section */}
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/150?img=12" alt="Client" className="w-12 h-12 rounded-full border-2 border-slate-900" />
              <img src="https://i.pravatar.cc/150?img=13" alt="Client" className="w-12 h-12 rounded-full border-2 border-slate-900" />
              <img src="https://i.pravatar.cc/150?img=14" alt="Client" className="w-12 h-12 rounded-full border-2 border-slate-900" />
              <img src="https://i.pravatar.cc/150?img=15" alt="Client" className="w-12 h-12 rounded-full border-2 border-slate-900" />
            </div>
            
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                ))}
                <span className="ml-2 font-bold text-xl">4.9</span>
              </div>
              <p className="text-sm text-slate-300">10k+ Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-300 rounded-full blur-3xl opacity-20 transform scale-75"></div>
          <img 
            src="/images/fitness.jpeg" 
            alt="Fitness Model" 
            className="relative z-10 w-full h-auto object-cover rounded-lg shadow-2xl"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=1000&fit=crop";
            }}
          />
        </div>
      </div>
    </div>
  );
}