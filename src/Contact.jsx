import React from 'react';
import { MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-[#0f0f0f] text-white font-sans min-h-screen py-24 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading - Matches the heavyweight bold font */}
        <h1 className="text-6xl md:text-8xl font-black mb-24 tracking-tighter">
          Get In Touch
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-12">
            <h3 className="text-2xl font-bold mb-8">Contact Info</h3>
            
            <div className="flex items-start">
              <span className="text-xs font-bold tracking-[0.2em] text-white uppercase w-24 pt-2">PHONE</span>
              <div className="flex-1 border-b border-white/20 pb-2">
                <a href="tel:+97470073765" className="text-lg hover:text-gray-400 transition-colors">
                  +974 7007 3765
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-xs font-bold tracking-[0.2em] text-white uppercase w-24 pt-2">E-MAIL</span>
              <div className="flex-1 border-b border-white/20 pb-2">
                <a href="mailto:info@mapsandvogs.com" className="text-lg hover:text-gray-400 transition-colors">
                  info@mapsandvogs.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-xs font-bold tracking-[0.2em] text-white uppercase w-24 pt-2">OFFICE</span>
              <div className="flex-1">
                <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                  Office 305, 3rd Floor, Abdul Jaleel Abdul Ghani Building, Old Airport Road, Doha State of Qatar
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Social/Alternative Contact (Replacing the Form) */}
          <div className="flex flex-col justify-start">
            <h3 className="text-2xl font-bold mb-8">Connect With Us</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Our support team is available 24/7 to assist you with your travel and lifestyle needs across our global branches.
            </p>
            
            <div className="flex flex-col space-y-6">
              <a href="#" className="group flex items-center justify-between border border-white/20 p-6 hover:bg-white hover:text-black transition-all">
                <span className="font-bold tracking-widest uppercase text-sm">Our Portfolio</span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </a>
              <a href="https://wa.me/97470073765" className="group flex items-center justify-between border border-white/20 p-6 hover:bg-white hover:text-black transition-all">
                <span className="font-bold tracking-widest uppercase text-sm">Chat on WhatsApp</span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Floating WhatsApp Button - Exact as per picture */}
      <a 
        href="https://wa.me/97470073765" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-50"
      >
        <div className="bg-transparent border-2 border-white rounded-full p-2 hover:scale-110 transition-transform">
          <MessageCircle size={32} fill="white" className="text-black" />
        </div>
      </a>
    </div>
  );
};

export default Contact;