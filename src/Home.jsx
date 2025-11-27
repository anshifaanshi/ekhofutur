import React, { useRef } from 'react';
import BubbleMenu from './homeComponents/NavBar';
import FloatingLines from './homeComponents/HeroBg';

const items = [
  { label: 'home', href: '#', ariaLabel: 'Home', rotation: -8, hoverStyles: { bgColor: '#4682B4', textColor: '#ffffff' } },
  { label: 'about', href: '#', ariaLabel: 'About', rotation: 8, hoverStyles: { bgColor: '#4682B4', textColor: '#ffffff' } },
  { label: 'projects', href: '#', ariaLabel: 'Projects', rotation: 8, hoverStyles: { bgColor: '#4682B4', textColor: '#ffffff' } },
  { label: 'blog', href: '#', ariaLabel: 'Blog', rotation: 8, hoverStyles: { bgColor: '#4682B4', textColor: '#ffffff' } },
  { label: 'contact', href: '#', ariaLabel: 'Contact', rotation: -8, hoverStyles: { bgColor: '#4682B4', textColor: '#ffffff' } }
];

function Home() {
  const containerRef = useRef(null);

  return (
    <>
      {/* Navigation */}
      <div>
        <BubbleMenu
          logo={
            <span
              style={{
                fontWeight: 700,
                fontSize: '22px',
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                padding: '20px'
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#4682B4'; }}
              onMouseLeave={e => { e.currentTarget.style.color = ''; }}
            >
              <span style={{ color: '#000000' }}>EKHO</span>
              <span style={{ color: '#6B7280' }}>FUTUR</span>
            </span>
          }
          items={items}
          menuAriaLabel="Toggle navigation"
          menuBg="#ffffff"
          menuContentColor="#111111"
          useFixedPosition={false}
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
        />
      </div>

      {/* Hero Section */}
      <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }} ref={containerRef}>
        {/* Background Floating Lines */}
        <FloatingLines
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />

        {/* Heading, description, and button */}
        <div
          style={{
            position: 'absolute',
            top: '60%', // moved a bit up from 65%
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            width: '90%',
            maxWidth: '800px'
          }}
        >
          {/* Heading */}
          <h1 style={{ fontSize: '4rem', fontWeight: '900', lineHeight: 1.1, marginBottom: '1rem' }}>
            <span style={{ color: '#000000' }}>EKHO</span>{' '}
            <span style={{ color: '#6B7280' }}>FUTUR</span>
          </h1>

          {/* Short description */}
          <p
            style={{
              marginTop: '1rem',
              fontSize: '1.2rem',
              color: '#000000',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.5',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Transparent Button with animated gradient overlay */}
          <button
            style={{
              marginTop: '2rem',
              padding: '0.8rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              border: '2px solid #6B7280',
              borderRadius: '8px',
              background: 'transparent',
              color: '#6B7280',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '200%',
                height: '100%',
                background:
                  'linear-gradient(120deg, rgba(255,255,255,0.2), rgba(255,255,255,0.5), rgba(255,255,255,0.2))',
                transform: 'skewX(-20deg)',
                animation: 'slide 2s linear infinite',
              }}
            />
            <span style={{ position: 'relative', zIndex: 1 }}>Explore More</span>
          </button>

          {/* Keyframes animation */}
          <style>
            {`
              @keyframes slide {
                0% { transform: translateX(-100%) skewX(-20deg); }
                100% { transform: translateX(100%) skewX(-20deg); }
              }

              /* Responsive adjustments */
              @media (max-width: 768px) {
                h1 { font-size: 3rem; }
                p { font-size: 1rem; }
                button { padding: 0.7rem 1.5rem; font-size: 0.95rem; }
              }

              @media (max-width: 480px) {
                h1 { font-size: 2.2rem; }
                p { font-size: 0.9rem; }
                button { padding: 0.6rem 1.2rem; font-size: 0.9rem; }
              }
            `}
          </style>
        </div>
      </div>
    </>
  );
}

export default Home;
