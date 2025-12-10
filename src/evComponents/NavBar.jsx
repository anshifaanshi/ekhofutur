import React, { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <nav className="bg-gray-50 py-6 px-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-gray-900">EV Station</h1>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Charging Stations", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setActiveLink(item)}
              className={`text-lg font-medium transition-colors duration-300 ${
                activeLink === item
                  ? "text-[#4682B4]"
                  : "text-gray-600 hover:text-[#4682B4]"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg text-base font-medium transition-colors duration-300 shadow-md">
            Find a charge station
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-900">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden mt-4 space-y-3">
        {["Home", "Charging Stations", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            onClick={() => setActiveLink(item)}
            className={`block text-lg font-medium transition-colors duration-300 ${
              activeLink === item
                ? "text-[#4682B4]"
                : "text-gray-600 hover:text-[#4682B4]"
            }`}
          >
            {item}
          </a>
        ))}
        <button className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg text-base font-medium transition-colors duration-300 shadow-md mt-4">
          Find a charge station
        </button>
      </div>
    </nav>
  );
};

export default Navbar;