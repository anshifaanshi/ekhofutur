import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function HomeCarousel({ services }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!services || services.length === 0) {
    return <div className="text-center text-white">No services available</div>;
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {services.map((service, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundColor: "#1a1a1a",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>

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

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 transition-all"
      >
        <ChevronLeft size={40} strokeWidth={2.5} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 transition-all"
      >
        <ChevronRight size={40} strokeWidth={2.5} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>

      {/* Social */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-6">
        <Facebook size={28} className="text-white hover:text-gray-300" />
        <Instagram size={28} className="text-white hover:text-gray-300" />
        <Twitter size={28} className="text-white hover:text-gray-300" />
        <Linkedin size={28} className="text-white hover:text-gray-300" />
      </div>

      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
        `}
      </style>
    </div>
  );
}
