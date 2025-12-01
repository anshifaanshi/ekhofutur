import React from "react";

import HeroSection from "./homeComponents/HeroBg";
import Gallery from "./homeComponents/Gallery";
import WhatWeDoSection from "./homeComponents/WhatWeDoSection";
import AboutOurApps from "./homeComponents/AboutOurApps";
import WorkflowSteps from "./homeComponents/WorkFlowStep";
import Testimonials from "./homeComponents/Testimonials";

// MENU ITEMS
const items = [
  { label: "home", href: "#", rotation: -8 },
  { label: "about", href: "#", rotation: 8 },
  { label: "projects", href: "#", rotation: 8 },
  { label: "blog", href: "#", rotation: 8 },
  { label: "contact", href: "#", rotation: -8 },
];

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div style={{ opacity: 1, transition: "opacity 1.5s ease" }}>
        <div style={{ position: "relative", height: "100vh" }}>
          <HeroSection />
          {/* Navbar can go here if needed */}
        </div>
      </div>

      {/* WHAT WE DO + GALLERY */}
      <div className="w-full bg-white text-black">
        <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24">
          <WhatWeDoSection />
        </section>

        <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 bg-white">
          <Gallery />
        </section>
      </div>

      {/* COMBINED ABOUT + WORKFLOW SECTION */}
      <section
        style={{
          background: "linear-gradient(135deg, #000000 0%, #4682B4 100%)",
        }}
        className="w-full"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <AboutOurApps />
          <WorkflowSteps />
        
        </div>
     
      </section>
      <Testimonials/>
    </>
  );
}

export default Home;

