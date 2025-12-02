import React from "react";

import HeroSection from "./homeComponents/HeroBg";
import Gallery from "./homeComponents/Gallery";
import WhatWeDoSection from "./homeComponents/WhatWeDoSection";
import AboutOurApps from "./homeComponents/AboutOurApps";
import WorkflowSteps from "./homeComponents/WorkFlowStep";
import Testimonials from "./homeComponents/Testimonials";
import { TimelineDemo } from "./homeComponents/TimeLineDemo";
import Footer from './homeComponents/Footer'


function Home() {
  const demoItems = [
  { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];
  return (
    <>
      {/* HERO SECTION WITH GHOST CURSOR */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Ghost Cursor */}
    
        <HeroSection />
        {/* Add Navbar here if needed */}
      </div>

      {/* WHAT WE DO + GALLERY */}
      <div className="w-full bg-white text-black">
        <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24">
          <WhatWeDoSection />
      
        </section>

        <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 bg-white">
          <Gallery />
        </section>
        <TimelineDemo/>
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

      <Testimonials />
      <Footer/>
    </>
  );
}

export default Home;
