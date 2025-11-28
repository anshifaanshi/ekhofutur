import React, { useEffect, useState } from 'react';
import BubbleMenu from './homeComponents/NavBar';
import HomeCarousel from './homeComponents/HeroBg';

const items = [
  { label: 'home', href: '#', ariaLabel: 'Home', rotation: -8, hoverStyles: { bgColor: '#4682B4', textColor: '#ffffff' } },
  { label: 'about', href: '#', ariaLabel: 'About', rotation: 8, hoverStyles: { bgColor: '#4682B4', textColor: '#ffffff' } },
  { label: 'projects', href: '#', ariaLabel: 'Projects', rotation: 8, hoverStyles: { bgColor: '#4682B4', textColor: '#ffffff' } },
  { label: 'blog', href: '#', ariaLabel: 'Blog', rotation: 8, hoverStyles: { bgColor: '#4682B4', textColor: '#ffffff' } },
  { label: 'contact', href: '#', ariaLabel: 'Contact', rotation: -8, hoverStyles: { bgColor: '#4682B4', textColor: '#ffffff' } }
];

function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [text, setText] = useState("");
  const [lineWidth, setLineWidth] = useState(0);

  const fullText = "WELCOME TO EKHOFUTUR";

  // Typing + Erasing Animation
  useEffect(() => {
    let i = 0;
    let isErasing = false;

    const interval = setInterval(() => {
      if (!isErasing) {
        if (i < fullText.length) {
          setText(fullText.substring(0, i + 1));
          setLineWidth(((i + 1) / fullText.length) * 60);
          i++;
        } else {
          setTimeout(() => (isErasing = true), 1200);
        }
      } else {
        if (i > 0) {
          setText(fullText.substring(0, i - 1));
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
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#4682B4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            zIndex: 9999,
            color: '#ffffff',
            letterSpacing: '3px',
            transition: 'opacity 1s ease',
            opacity: showIntro ? 1 : 0,
          }}
        >
          <h1
            style={{
              fontSize: '3rem',
              fontWeight: '900',
              animation: 'zoom 1.2s ease',
              marginBottom: '10px'
            }}
          >
            {text}
          </h1>

          <div
            style={{
              height: '4px',
              background: '#FFD700',
              width: `${lineWidth}%`,
              maxWidth: '300px',
              transition: 'width 0.15s linear',
              borderRadius: '4px'
            }}
          ></div>

          <style>
            {`
              @keyframes zoom {
                0% { transform: scale(0.8); opacity: 0; }
                100% { transform: scale(1); opacity: 1; }
              }
            `}
          </style>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div
        style={{
          opacity: showIntro ? 0 : 1,
          transition: 'opacity 1.5s ease',
          pointerEvents: showIntro ? 'none' : 'auto'
        }}
      >
        {/* HERO SECTION WITH GRADIENT */}
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
          {/* Gradient blinds */}
          <HomeCarousel />

          {/* Navigation inside gradient */}
          <div style={{ position: 'absolute', top: 0, width: '100%' }}>
            <BubbleMenu
              logo={
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: '22px',
                    letterSpacing: '1px',
                    cursor: 'pointer',
                    padding: '20px',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#4682B4'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = ''; }}
                >
                  <span style={{ color: '#000000' }}>EKHO</span>
                  <span style={{ color: '#6B7280' }}>FUTUR</span>
                </span>
              }
              items={items}
              menuBg="transparent"
              menuContentColor="#ffffff"
              useFixedPosition={true}
            />
          </div>

          {/* Optional content in hero */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: '#ffffff'
            }}
          >
          
          </div>
        </div>

        {/* OTHER PAGE CONTENT */}
        <div style={{ padding: '80px 40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700' }}>Other Content</h2>
          <p style={{ marginTop: '10px', color: '#555' }}>
            This is the rest of your page content.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
