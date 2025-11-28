import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function HomeCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
const services = [
  {
    title: "Old School",
    description: "Experience timeless elegance and classic design principles that never go out of style. We bring vintage charm to modern spaces.",
    image: "/images/oldschool.jpg"
  },
  {
    title: "Trend Setter",
    description: "Stay ahead with cutting-edge designs and innovative solutions. We create spaces that define the future of interior aesthetics.",
    image: "https://i.postimg.cc/DZNFN69f/trendsetter-jpg.jpg"
  },
  {
    title: "Lubnas Dental Studio",
    description: "Professional dental care in a modern, comfortable environment. State-of-the-art facilities for your complete oral health.",
    image: "https://i.postimg.cc/SxmsCTkY/dental-jpg.jpg"
  },
  {
    title: "Home Appliances",
    description: "Premium selection of modern home appliances that combine functionality with style for your everyday needs.",
    image: "/images/appliances.jpg"
  },
  {
    title: "Builders & Realtors",
    description: "Expert construction and real estate services. Building dreams and finding perfect homes for families.",
    image: "https://i.postimg.cc/zBTZdNkm/builders-jpg.jpg"
  },
  {
    title: "Co Working Space",
    description: "Dynamic collaborative workspaces designed for productivity and creativity. Where innovation meets community.",
    image: "https://i.postimg.cc/RVBVxs3d/coworking.jpg"
  },
  {
    title: "Home Stays & Wellness Center",
    description: "Peaceful retreats combining comfortable accommodation with holistic wellness experiences for body and mind.",
    image: "https://i.postimg.cc/pXCxb2bC/cardio-equipment-area-in-gym-center.jpg"
  }
];

  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel Slides */}
      {services.map((service, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${service.image || service.imagesrc})`,

              backgroundColor: '#1a1a1a' // Fallback color
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center px-4">
            <div className="text-center max-w-3xl text-white space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed px-4">
                {service.description}
              </p>
              <div className="pt-2">
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 transition-all duration-300"
      >
        <ChevronLeft size={40} strokeWidth={2.5} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 transition-all duration-300"
      >
        <ChevronRight size={40} strokeWidth={2.5} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Social Media Links */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-6">
        <a href="#" className="text-white hover:text-gray-300 transition-colors">
          <Facebook size={28} />
        </a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">
          <Instagram size={28} />
        </a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">
          <Twitter size={28} />
        </a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">
          <Linkedin size={28} />
        </a>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}