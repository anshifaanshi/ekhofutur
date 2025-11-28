import React, { useState } from "react";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <section className="relative flex flex-col items-center pb-16 pt-8 text-white"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #4682B4 100%)", // black + steel blue
      }}
    >
      <nav className="flex items-center border mx-4 max-md:w-full max-md:justify-between border-slate-700 px-6 py-4 rounded-full text-white text-sm">
        <a href="https://prebuiltui.com">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
            <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
            <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
            <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
          </svg>
        </a>

        <div className="hidden md:flex items-center gap-6 ml-7">
          {["Products", "Stories", "Pricing", "Docs"].map((item) => (
            <a key={item} href="#" className="relative overflow-hidden h-6 group">
              <span className="block group-hover:-translate-y-full transition-transform duration-300">{item}</span>
              <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">{item}</span>
            </a>
          ))}
        </div>

        <div className="hidden ml-14 md:flex items-center gap-4">
          <button className="border border-[#FFD700] hover:bg-[#FFD700] px-4 py-2 rounded-full text-sm font-medium transition text-black">
            Contact
          </button>
          <button className="bg-[#FFD700] hover:shadow-[0px_0px_30px_14px] shadow-[#FFD700]/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-400 transition duration-300">
            Get Started
          </button>
        </div>

        <button onClick={toggleMenu} className="md:hidden text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`absolute top-0 text-base left-0 bg-black w-full h-full flex-col items-center justify-center gap-4 transition-all ${menuOpen ? "flex" : "hidden"}`}>
          {["Products", "Customer Stories", "Pricing", "Docs"].map((item) => (
            <a key={item} onClick={closeMenu} className="hover:text-[#FFD700]" href="#">{item}</a>
          ))}
          <button onClick={closeMenu} className="border border-[#FFD700] hover:bg-[#FFD700] px-4 py-2 rounded-full text-sm font-medium text-black transition">
            Contact
          </button>
          <button onClick={closeMenu} className="bg-[#FFD700] hover:shadow-[0px_0px_30px_14px] shadow-[#FFD700]/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-400 transition duration-300">
            Get Started
          </button>
        </div>
      </nav>

      <div className="flex items-center gap-2 border border-white/15 rounded-full px-4 py-2 text-sm mt-24">
        <p>Explore how we help grow brands.</p>
        <a href="#" className="flex items-center gap-1 font-medium">
          Read more
          <svg className="mt-0.5" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.959 9.5h11.083m0 0L9.501 3.96m5.541 5.54-5.541 5.542" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <h1 className="text-4xl md:text-6xl text-center font-semibold max-w-3xl mt-5 bg-gradient-to-r from-white to-[#748298] text-transparent bg-clip-text">
        Solutions to Elevate Your Business Growth
      </h1>
      <p className="text-slate-300 md:text-base line-clamp-3 max-md:px-2 text-center max-w-2xl mt-3">
        Unlock potential with tailored strategies designed for success. Simplify challenges, maximize results, and stay ahead in the competitive market.
      </p>

      <div className="grid grid-cols-2 gap-2 mt-8 text-sm">
        <button className="px-8 py-3 bg-[#FFD700] hover:bg-yellow-400 transition rounded-full text-black">
          Get Started
        </button>
        <button className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-6 py-3">
          <span>Learn More</span>
          <svg className="mt-0.5" width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.25.5 4.75 4l-3.5 3.5" stroke="currentColor" strokeOpacity=".4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div aria-label="Photos of leaders" className="mt-12 flex max-md:overflow-x-auto gap-6 max-w-4xl w-full pb-6">
        {[
          "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=735&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=687&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=687&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop"
        ].map((src, index) => (
          <img key={index} alt="" className="w-36 h-44 rounded-lg hover:-translate-y-1 transition duration-300 object-cover flex-shrink-0" src={src} />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
