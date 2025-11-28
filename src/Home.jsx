
import React, { useEffect, useState } from "react";
import BubbleMenu from "./homeComponents/NavBar";
import HeroSection from "./homeComponents/HeroBg";
import Gallery from "./homeComponents/Gallery";
import WhatWeDoSection from "./homeComponents/WhatWeDoSection";
// MENU ITEMS
const items = [
  { label: "home", href: "#", rotation: -8 },
  { label: "about", href: "#", rotation: 8 },
  { label: "projects", href: "#", rotation: 8 },
  { label: "blog", href: "#", rotation: 8 },
  { label: "contact", href: "#", rotation: -8 },
];

// SERVICES DATA
const services = [
  {
    title: "Old School",
    description: "Timeless elegance with classic design principles.",
    image: "/images/oldschool.jpg",
  },
  {
    title: "Trend Setter",
    description: "Cutting-edge designs that define the future.",
    image: "https://i.postimg.cc/DZNFN69f/trendsetter-jpg.jpg",
  },
  {
    title: "Lubnas Dental Studio",
    description: "Modern professional dental care.",
    image: "https://i.postimg.cc/SxmsCTkY/dental-jpg.jpg",
  },
  {
    title: "Home Appliances",
    description: "Stylish and functional home appliances.",
    image: "/images/appliances.jpg",
  },
  {
    title: "Builders & Realtors",
    description: "Construction and real estate solutions.",
    image: "https://i.postimg.cc/zBTZdNkm/builders-jpg.jpg",
  },
  {
    title: "Co Working Space",
    description: "Collaborative workspaces for creativity.",
    image: "https://i.postimg.cc/RVBVxs3d/coworking.jpg",
  },
  {
    title: "Home Stays & Wellness Center",
    description: "Comfort + wellness for body & mind.",
    image: "https://i.postimg.cc/pXCxb2bC/cardio-equipment-area-in-gym-center.jpg",
  },
];

function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [text, setText] = useState("");
  const [lineWidth, setLineWidth] = useState(0);

  const fullText = "WELCOME TO EKHOFUTUR";

  useEffect(() => {
    let i = 0;
    let isErasing = false;

    const interval = setInterval(() => {
      if (!isErasing) {
        if (i < fullText.length) {
          setText(fullText.slice(0, i + 1));
          setLineWidth(((i + 1) / fullText.length) * 60);
          i++;
        } else {
          setTimeout(() => (isErasing = true), 1200);
        }
      } else {
        if (i > 0) {
          setText(fullText.slice(0, i - 1));
          setLineWidth(((i - 1) / fullText.length) * 60);
          i--;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowIntro(false), 700);
        }
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* INTRO SCREEN */}
      {showIntro && (
        <div className="intro-screen">
          <h1 className="intro-text">{text}</h1>
          <div className="intro-bar" style={{ width: `${lineWidth}%` }}></div>

          <style jsx>{`
            .intro-screen {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: #4682b4;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              z-index: 9999;
              color: #ffffff;
              letter-spacing: 3px;
              transition: opacity 1s ease;
              padding: 0 10px;
              box-sizing: border-box;
            }

            .intro-text {
              font-size: 8vw; /* Responsive font */
              font-weight: 900;
              animation: zoom 1.2s ease;
              text-align: center;
            }

            .intro-bar {
              height: 4px;
              background: #ffd700;
              max-width: 300px;
              transition: width 0.15s linear;
              border-radius: 4px;
              margin-top: 10px;
            }

            @keyframes zoom {
              0% {
                transform: scale(0.8);
                opacity: 0;
              }
              100% {
                transform: scale(1);
                opacity: 1;
              }
            }

            /* MOBILE ADJUSTMENTS */
            @media (max-width: 768px) {
              .intro-text {
                font-size: 10vw;
              }
            }

            @media (max-width: 480px) {
              .intro-text {
                font-size: 12vw;
              }
              .intro-bar {
                max-width: 200px;
              }
            }
          `}</style>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div
        style={{
          opacity: showIntro ? 0 : 1,
          transition: "opacity 1.5s ease",
        }}
      >
        {/* HERO SECTION */}
        <div style={{ position: "relative", height: "100vh" }}>
          <HeroSection />

          {/* Navbar */}
          <div style={{ position: "absolute", top: 0, width: "100%" }}>
            <BubbleMenu
              logo={
                <span style={{ fontWeight: 700, fontSize: "22px" }}>
                  <span style={{ color: "#000" }}>EKHO</span>
                  <span style={{ color: "#6B7280" }}>FUTUR</span>
                </span>
              }
              items={items}
              menuBg="transparent"
              menuContentColor="#fff"
              useFixedPosition={true}
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-white text-black">
      {/* What We Do Section */}
      <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24">
        <WhatWeDoSection />
      </section>

      {/* Gallery Section */}
      <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 bg-white">
        <Gallery />
      </section>
    </div>
    </>
  );
}

export default Home;