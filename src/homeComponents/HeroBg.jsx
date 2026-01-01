import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

// Navbar Component
const  Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

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
    { name: "Wellness", link: "wellnes" },
    { name: "Solar", link: "solar" },
    { name: "EV Charging Station", link: "#ev-charging" },
    { name: "Pureflow", link: "#pureflow" },
    { name: "Ekho Digix", link: "#ekho-digix" }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="flex items-center justify-between px-8 py-6">
          <div className="flex items-center space-x-3 text-white">
            <span className="text-3xl font-bold tracking-wider">EF</span>
            <span className="text-sm tracking-widest font-light">EKHO FUTURE</span>
          </div>
          <button onClick={() => setIsMenuOpen(true)} className="text-white flex items-center space-x-2">
            <Menu size={28} />
            <span className="text-sm tracking-widest font-light">MENU</span>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[60] bg-[#111] transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
         <div className="flex items-center justify-between px-8 py-6">
          <div className="text-white text-3xl font-bold">EF</div>
          <button onClick={() => { setIsMenuOpen(false); setShowServices(false); }} className="text-white flex items-center space-x-2">
            <X size={28} />
            <span className="text-sm tracking-widest font-light">CLOSE</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row p-12 h-full overflow-y-auto">
          <div className="flex flex-col space-y-6">
            {['Home', 'About', 'Product'].map(item => (
              <a key={item} href="#" className="text-white text-5xl md:text-7xl font-bold hover:opacity-50 transition-opacity">{item}</a>
            ))}
            <button onClick={() => setShowServices(!showServices)} className="text-white text-5xl md:text-7xl font-bold text-left flex items-center">
              Services <ChevronRight className={`ml-4 transform ${showServices ? 'rotate-90' : ''}`} />
            </button>
            <a href="#" className="text-white text-5xl md:text-7xl font-bold">Contact</a>
          </div>

          {showServices && (
            <div className="mt-10 md:mt-0 md:ml-20 grid grid-cols-1 md:grid-cols-2 gap-4 pb-20">
              {services.map((s, i) => (
                <a key={i} href={s.link} className="text-gray-400 text-xl hover:text-white">{s.name}</a>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
// Home Component
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next');

  const slides = [
    {
      title: "Powering Tomorrow",
      subtitle: "EV Charging Stations",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1920&q=80",
      description: "Sustainable energy solutions for electric mobility"
    },
    {
      title: "Smile with Confidence",
      subtitle: "Dental Excellence",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&q=80",
      description: "Advanced dental care and aesthetic treatments"
    },
    {
      title: "Style Redefined",
      subtitle: "Fashion & Retail",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80",
      description: "Curated collections for the modern lifestyle"
    },
    {
      title: "Culinary Excellence",
      subtitle: "Hospitality & Dining",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80",
      description: "Unforgettable dining experiences"
    },
    {
      title: "Innovation Hub",
      subtitle: "Technology Solutions",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
      description: "Digital transformation for tomorrow's world"
    },
    {
      title: "Wellness Sanctuary",
      subtitle: "Health & Fitness",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80",
      description: "Holistic approach to health and wellbeing"
    },
    {
      title: "Building Dreams",
      subtitle: "Real Estate & Development",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
      description: "Creating spaces for life and business"
    }
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    if (isTransitioning) return;
    setDirection('next');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 1200);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setDirection('prev');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 1200);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          const isPrev = index === (currentSlide - 1 + totalSlides) % totalSlides;
          const isNext = index === (currentSlide + 1) % totalSlides;
          
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-all ${
                isActive ? 'z-20' : isPrev || isNext ? 'z-10' : 'z-0'
              }`}
              style={{
                opacity: isActive ? 1 : 0,
                transform: `
                  translateX(${
                    isActive ? '0%' : 
                    direction === 'next' && isPrev ? '-100%' :
                    direction === 'prev' && isNext ? '100%' :
                    '0%'
                  })
                  scale(${isActive ? 1 : 1.1})
                `,
                transition: isTransitioning 
                  ? 'all 1.2s cubic-bezier(0.65, 0, 0.35, 1)' 
                  : 'none',
                filter: `blur(${isActive ? '0px' : '10px'})`,
              }}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  style={{
                    transform: isTransitioning && isActive 
                      ? 'scale(1.05)' 
                      : 'scale(1)',
                    transition: 'transform 1.2s cubic-bezier(0.65, 0, 0.35, 1)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
              </div>
            </div>
          );
        })}

        {/* Liquid Water Flow Effect Overlays */}
        {isTransitioning && (
          <>
            {/* Wave 1 - Fast */}
            <div 
              className="absolute inset-0 z-30 pointer-events-none water-wave-1"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                animation: direction === 'next' 
                  ? 'liquidFlowRight1 1.2s cubic-bezier(0.65, 0, 0.35, 1)' 
                  : 'liquidFlowLeft1 1.2s cubic-bezier(0.65, 0, 0.35, 1)',
              }}
            />
            
            {/* Wave 2 - Medium */}
            <div 
              className="absolute inset-0 z-30 pointer-events-none water-wave-2"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, rgba(6, 182, 212, 0.25) 0%, transparent 60%)',
                animation: direction === 'next' 
                  ? 'liquidFlowRight2 1.2s cubic-bezier(0.65, 0, 0.35, 1)' 
                  : 'liquidFlowLeft2 1.2s cubic-bezier(0.65, 0, 0.35, 1)',
              }}
            />
            
            {/* Wave 3 - Slow */}
            <div 
              className="absolute inset-0 z-30 pointer-events-none water-wave-3"
              style={{
                background: 'linear-gradient(90deg, rgba(56, 189, 248, 0.2) 0%, rgba(14, 165, 233, 0.15) 50%, transparent 100%)',
                animation: direction === 'next' 
                  ? 'liquidFlowRight3 1.2s cubic-bezier(0.65, 0, 0.35, 1)' 
                  : 'liquidFlowLeft3 1.2s cubic-bezier(0.65, 0, 0.35, 1)',
              }}
            />

            {/* Ripple Effect */}
            <div 
              className="absolute inset-0 z-30 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                animation: 'rippleEffect 1.2s cubic-bezier(0.65, 0, 0.35, 1)',
              }}
            />
          </>
        )}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center z-40">
        <div className="px-16 max-w-4xl">
          {/* Subtitle */}
          <div 
            className={`text-blue-400 text-lg md:text-xl tracking-widest mb-4 font-light transition-all duration-1000 ${
              isTransitioning 
                ? 'opacity-0 blur-sm' 
                : 'opacity-100 blur-0'
            }`}
            style={{
              transform: isTransitioning 
                ? `translateX(${direction === 'next' ? '-100px' : '100px'}) translateY(10px)` 
                : 'translateX(0) translateY(0)',
              transition: 'all 1s cubic-bezier(0.65, 0, 0.35, 1)',
            }}
          >
            {slides[currentSlide].subtitle}
          </div>

          {/* Main Title */}
          <h1 
            className={`text-white font-bold mb-6 transition-all duration-1000 ${
              isTransitioning 
                ? 'opacity-0 blur-sm' 
                : 'opacity-100 blur-0'
            }`}
            style={{ 
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              lineHeight: '1.1',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '-0.02em',
              transform: isTransitioning 
                ? `translateX(${direction === 'next' ? '-80px' : '80px'}) translateY(20px)` 
                : 'translateX(0) translateY(0)',
              transition: 'all 1s cubic-bezier(0.65, 0, 0.35, 1) 0.05s',
            }}
          >
            {slides[currentSlide].title}
          </h1>

          {/* Description */}
          <p 
            className={`text-white/80 text-lg md:text-xl mb-8 font-light max-w-2xl transition-all duration-1000 ${
              isTransitioning 
                ? 'opacity-0 blur-sm' 
                : 'opacity-100 blur-0'
            }`}
            style={{
              transform: isTransitioning 
                ? `translateX(${direction === 'next' ? '-60px' : '60px'})` 
                : 'translateX(0)',
              transition: 'all 1s cubic-bezier(0.65, 0, 0.35, 1) 0.1s',
            }}
          >
            {slides[currentSlide].description}
          </p>

          {/* CTA Button */}
          <button 
            className={`text-white text-sm tracking-widest border-b-2 border-white pb-1 hover:pb-2 transition-all duration-300 font-light ${
              isTransitioning 
                ? 'opacity-0 blur-sm' 
                : 'opacity-100 blur-0'
            }`}
            style={{
              transform: isTransitioning 
                ? `translateX(${direction === 'next' ? '-60px' : '60px'})` 
                : 'translateX(0)',
              transition: 'all 1s cubic-bezier(0.65, 0, 0.35, 1) 0.15s',
            }}
          >
            Explore More
          </button>
        </div>
      </div>

      {/* Slide Counter - Right Side */}
      <div className="absolute top-1/2 right-12 transform -translate-y-1/2 text-white z-40">
        <div className="text-right">
          <div 
            className="text-6xl font-bold mb-2 transition-all duration-700" 
            style={{ 
              fontFamily: 'system-ui',
              transform: isTransitioning ? 'scale(1.2) translateY(-10px)' : 'scale(1) translateY(0)',
              opacity: isTransitioning ? 0.5 : 1,
            }}
          >
            {String(currentSlide + 1).padStart(2, '0')}
          </div>
          <div className="text-2xl font-light opacity-70">
            /{String(totalSlides).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Bottom Left - Tagline */}
      <div className="absolute bottom-20 left-16 z-40">
        <div className="text-white/60 text-sm tracking-widest font-light">
          DIVERSIFIED EXCELLENCE • UNIFIED VISION
        </div>
      </div>

      {/* Navigation Arrows - Bottom Center */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-8 z-40">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="text-white hover:scale-110 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <ChevronLeft size={48} strokeWidth={1.5} />
        </button>
        
        {/* Progress Bar */}
        <div className="w-32 h-[2px] bg-white/30 overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-300"
            style={{ 
              width: `${((currentSlide + 1) / totalSlides) * 100}%`,
            }}
          ></div>
        </div>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="text-white hover:scale-110 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <ChevronRight size={48} strokeWidth={1.5} />
        </button>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <style>{`
        @keyframes liquidFlowRight1 {
          0% {
            transform: translateX(-120%) scale(0.8) rotate(-5deg);
            opacity: 0;
          }
          30% {
            opacity: 0.6;
          }
          100% {
            transform: translateX(120%) scale(1.2) rotate(5deg);
            opacity: 0;
          }
        }

        @keyframes liquidFlowLeft1 {
          0% {
            transform: translateX(120%) scale(0.8) rotate(5deg);
            opacity: 0;
          }
          30% {
            opacity: 0.6;
          }
          100% {
            transform: translateX(-120%) scale(1.2) rotate(-5deg);
            opacity: 0;
          }
        }

        @keyframes liquidFlowRight2 {
          0% {
            transform: translateX(-100%) translateY(-10%) scale(0.9) skewX(-10deg);
            opacity: 0;
          }
          40% {
            opacity: 0.5;
          }
          100% {
            transform: translateX(100%) translateY(10%) scale(1.1) skewX(10deg);
            opacity: 0;
          }
        }

        @keyframes liquidFlowLeft2 {
          0% {
            transform: translateX(100%) translateY(-10%) scale(0.9) skewX(10deg);
            opacity: 0;
          }
          40% {
            opacity: 0.5;
          }
          100% {
            transform: translateX(-100%) translateY(10%) scale(1.1) skewX(-10deg);
            opacity: 0;
          }
        }

        @keyframes liquidFlowRight3 {
          0% {
            transform: translateX(-110%) translateY(5%) scale(1) skewX(-15deg);
            opacity: 0;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translateX(110%) translateY(-5%) scale(1.15) skewX(15deg);
            opacity: 0;
          }
        }

        @keyframes liquidFlowLeft3 {
          0% {
            transform: translateX(110%) translateY(5%) scale(1) skewX(15deg);
            opacity: 0;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translateX(-110%) translateY(-5%) scale(1.15) skewX(-15deg);
            opacity: 0;
          }
        }

        @keyframes rippleEffect {
          0% {
            transform: scale(0.5);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.3;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Home />
    </div>
  );
}