import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Menu, X, ChevronRight } from "lucide-react"

import OurStory from './aboutcomponents/OurStory'
import ServicesSection from './aboutcomponents/ServiceSection'

/* ---------------- NAVBAR ---------------- */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showServices, setShowServices] = useState(false)

  const services = [
    { name: "Old School", link: "oldschool" },
    { name: "Trendsetter", link: "trendsetter" },
    { name: "Lubna's Dental Studio", link: "lubnas" },
    { name: "Speech", link: "speech" },
    { name: "Home Appliances", link: "homeappliances" },
    { name: "Compliment", link: "compliment" },
    { name: "Pots & Pets", link: "#pots-pets" },
    { name: "Realtors", link: "realtors" },
    { name: "Coworking", link: "coworking" },
    { name: "Ekhora Scapes", link: "#ekhora-scapes" },
    { name: "Wellness", link: "wellness" },
    { name: "Solar", link: "solar" },
    { name: "EV Charging Station", link: "#ev-charging" },
    { name: "Pureflow", link: "#pureflow" },
    { name: "Ekho Digix", link: "#ekho-digix" }
  ]

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="flex items-center justify-between px-8 py-6">
          <div className="flex items-center space-x-3 text-white">
            <span className="text-3xl font-bold tracking-wider">EF</span>
            <span className="text-sm tracking-widest font-light">EKHO FUTURE</span>
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white flex items-center space-x-2"
          >
            <Menu size={28} />
            <span className="text-sm tracking-widest font-light">MENU</span>
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-[#111] transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center justify-between px-8 py-6">
          <div className="text-white text-3xl font-bold">EF</div>
          <button
            onClick={() => {
              setIsMenuOpen(false)
              setShowServices(false)
            }}
            className="text-white flex items-center space-x-2"
          >
            <X size={28} />
            <span className="text-sm tracking-widest font-light">CLOSE</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row p-12 h-full overflow-y-auto">
          {/* Main Links */}
          <div className="flex flex-col space-y-6">
            <Link to="/" className="text-white text-5xl md:text-7xl font-bold hover:opacity-50">
              Home
            </Link>

            <Link to="/aboutus" className="text-white text-5xl md:text-7xl font-bold hover:opacity-50">
              About
            </Link>

            <Link to="/product" className="text-white text-5xl md:text-7xl font-bold hover:opacity-50">
              Product
            </Link>

            <button
              onClick={() => setShowServices(!showServices)}
              className="text-white text-5xl md:text-7xl font-bold text-left flex items-center"
            >
              Services
              <ChevronRight
                className={`ml-4 transition-transform ${
                  showServices ? "rotate-90" : ""
                }`}
              />
            </button>

            <Link to="/contact" className="text-white text-5xl md:text-7xl font-bold hover:opacity-50">
              Contact
            </Link>
          </div>

          {/* Services List */}
          {showServices && (
            <div className="mt-10 md:mt-0 md:ml-20 grid grid-cols-1 md:grid-cols-2 gap-4 pb-20">
              {services.map((s, i) => (
                <Link
                  key={i}
                  to={s.link}
                  className="text-gray-400 text-xl hover:text-white transition-colors"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

/* ---------------- ABOUT US PAGE ---------------- */
function AboutUs() {
  return (
    <div>
      <Navbar />
      <OurStory />
      <ServicesSection />
    </div>
  )
}

export default AboutUs
