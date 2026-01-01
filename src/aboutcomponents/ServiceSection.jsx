import React from 'react';
import { 
  Plane, 
  Globe, 
  Lightbulb, 
  BarChart3, 
  Send, 
  CalendarCheck,
  MessageCircle // WhatsApp icon
} from 'lucide-react';

const ServicesSection = () => {
  // Mapping your provided services list to the layout icons
  const services = [
    { name: "Old School", link: "oldschool", desc: "A new idea in premium travel design curated by experts.", icon: <Plane className="w-10 h-10" /> },
    { name: "Trendsetter", link: "trendsetter", desc: "We know that it's incredibly important to spend your holiday well.", icon: <Globe className="w-10 h-10" /> },
    { name: "Lubna's Dental Studio", link: "lubnas", desc: "Our passion to empower youth, led us into specialized care.", icon: <Lightbulb className="w-10 h-10" /> },
    { name: "Speech", link: "speech", desc: "Being an efficient service provider, we take pride in customized solutions.", icon: <BarChart3 className="w-10 h-10" /> },
    { name: "Home Appliances", link: "homeappliances", desc: "Your premier management company committed to curating quality.", icon: <Send className="w-10 h-10" /> },
    { name: "Compliment", link: "compliment", desc: "With decades of experience, our teams have been serving globally.", icon: <CalendarCheck className="w-10 h-10" /> },
  ];

  return (
    <section className="bg-[#0f0f0f] text-white py-20 px-8 md:px-20 relative">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-bold mb-16 tracking-tight">
        Our expertise team is well-versed in handling
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flex items-start space-x-6 group">
            {/* Icon Column */}
            <div className="flex-shrink-0 text-white group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>

            {/* Content Column */}
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-bold tracking-widest mb-3 uppercase">
                {service.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {service.desc}
              </p>
              <a 
                href={service.link}
                className="border border-white/40 px-5 py-1.5 text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-white hover:text-black transition-all duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Floating WhatsApp Button (Matches screenshot) */}
      <a 
        href="https://wa.me/yournumber" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-transparent border-2 border-white p-2 rounded-full hover:scale-110 transition-transform z-40"
      >
        <MessageCircle size={32} fill="white" className="text-black" />
      </a>
    </section>
  );
};

export default ServicesSection;