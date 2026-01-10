import React from "react";
import { Link } from "react-router-dom";

// Simple single-column Timeline component
function Timeline({ data }) {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="space-y-8">
        {data.map((item, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-[#FFD700] pb-8">
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#FFD700] border-4 border-white"></div>
            
            {/* Content */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-3xl font-bold text-black mb-4">{item.title}</h3>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TimelineDemo() {
  const VisitButton = ({ to }) => {
    const isExternal = to.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={to}
          className="inline-block mb-4 px-4 py-2 bg-[#4682B4] text-white rounded-lg 
          hover:bg-[#FFD700] hover:text-black transition-all duration-300"
        >
          Visit Website
        </a>
      );
    }

    return (
      <Link
        to={to}
        className="inline-block mb-4 px-4 py-2 bg-[#4682B4] text-white rounded-lg 
        hover:bg-[#FFD700] hover:text-black transition-all duration-300"
      >
        Visit Website
      </Link>
    );
  };

  const timelineItems = [
    {
      title: "Old School",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-gray-600 md:text-sm">
            Bringing back the classic touch with vintage designs and traditional workflows.
          </p>
          <VisitButton to="/oldschool" />
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://assets.aceternity.com/templates/startup-1.webp",
              "https://assets.aceternity.com/templates/startup-2.webp",
              "https://assets.aceternity.com/templates/startup-3.webp",
              "https://assets.aceternity.com/templates/startup-4.webp",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Old School"
                className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Trend Setter",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-gray-600 md:text-sm">
            Innovative and ahead of the curve, we create designs that set trends in the industry.
          </p>
          <VisitButton to="/trendsetter" />
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://assets.aceternity.com/templates/startup-1.webp",
              "https://assets.aceternity.com/templates/startup-2.webp",
              "https://assets.aceternity.com/templates/startup-3.webp",
              "https://assets.aceternity.com/templates/startup-4.webp",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Trend Setter"
                className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Lubnas Dental Studio",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-gray-600 md:text-sm">
            Creating modern dental solutions with clean, professional, and approachable aesthetics.
          </p>
          <VisitButton to="/lubnas" />
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://assets.aceternity.com/templates/startup-1.webp",
              "https://assets.aceternity.com/templates/startup-2.webp",
              "https://assets.aceternity.com/templates/startup-3.webp",
              "https://assets.aceternity.com/templates/startup-4.webp",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Lubnas Dental Studio"
                className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Hopeful Steps",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-gray-600 md:text-sm">
            Empowering growth and new beginnings through thoughtful services and design.
          </p>
          <VisitButton to="/speech" />
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://assets.aceternity.com/templates/startup-1.webp",
              "https://assets.aceternity.com/templates/startup-2.webp",
              "https://assets.aceternity.com/templates/startup-3.webp",
              "https://assets.aceternity.com/templates/startup-4.webp",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Hopeful Steps"
                className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Spices",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-gray-600 md:text-sm">
            High-quality, innovative home appliances designed for modern lifestyles.
          </p>
          <VisitButton to="/homeappliances" />
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://assets.aceternity.com/templates/startup-1.webp",
              "https://assets.aceternity.com/templates/startup-2.webp",
              "https://assets.aceternity.com/templates/startup-3.webp",
              "https://assets.aceternity.com/templates/startup-4.webp",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Home Appliances"
                className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Compliment",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-gray-600 md:text-sm">
            Enhancing spaces and products with thoughtful design and attention to detail.
          </p>
          <VisitButton to="/compliment" />
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://assets.aceternity.com/templates/startup-1.webp",
              "https://assets.aceternity.com/templates/startup-2.webp",
              "https://assets.aceternity.com/templates/startup-3.webp",
              "https://assets.aceternity.com/templates/startup-4.webp",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Compliment"
                className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Pots & Pans",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-gray-600 md:text-sm">
            Quality cookware for modern kitchens, blending style and functionality.
          </p>
          <VisitButton to="/projects/pots-pans" />
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://assets.aceternity.com/templates/startup-1.webp",
              "https://assets.aceternity.com/templates/startup-2.webp",
              "https://assets.aceternity.com/templates/startup-3.webp",
              "https://assets.aceternity.com/templates/startup-4.webp",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Pots & Pans"
                className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Builders & Realtors",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-gray-600 md:text-sm">
            Expertly crafted real estate solutions for modern urban and residential developments.
          </p>
          <VisitButton to="/realtors" />
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://assets.aceternity.com/templates/startup-1.webp",
              "https://assets.aceternity.com/templates/startup-2.webp",
              "https://assets.aceternity.com/templates/startup-3.webp",
              "https://assets.aceternity.com/templates/startup-4.webp",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Builders & Realtors"
                className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Co Working Space",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-gray-600 md:text-sm">
            Collaborative and vibrant co-working environments for creative and professional minds.
          </p>
          <VisitButton to="/coworking" />
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://assets.aceternity.com/templates/startup-1.webp",
              "https://assets.aceternity.com/templates/startup-2.webp",
              "https://assets.aceternity.com/templates/startup-3.webp",
              "https://assets.aceternity.com/templates/startup-4.webp",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Co Working Space"
                className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Ekhora Scapes",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-gray-600 md:text-sm">
            Creative landscape and architectural solutions that elevate outdoor spaces.
          </p>
          <VisitButton to="/ekhora" />
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://assets.aceternity.com/templates/startup-1.webp",
              "https://assets.aceternity.com/templates/startup-2.webp",
              "https://assets.aceternity.com/templates/startup-3.webp",
              "https://assets.aceternity.com/templates/startup-4.webp",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Ekhora Scapes"
                className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Home Stays & Wellness center",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-gray-600 md:text-sm">
            Comfortable home stays and wellness centers for relaxation and rejuvenation.
          </p>
          <VisitButton to="/wellnes" />
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://assets.aceternity.com/templates/startup-1.webp",
              "https://assets.aceternity.com/templates/startup-2.webp",
              "https://assets.aceternity.com/templates/startup-3.webp",
              "https://assets.aceternity.com/templates/startup-4.webp",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Home Stays & Wellness center"
                className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Solar",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-gray-600 md:text-sm">
            Solar energy solutions for clean, renewable power.
          </p>
          <VisitButton to="solar" />
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://assets.aceternity.com/templates/startup-1.webp",
              "https://assets.aceternity.com/templates/startup-2.webp",
              "https://assets.aceternity.com/templates/startup-3.webp",
              "https://assets.aceternity.com/templates/startup-4.webp",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Solar"
                className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "EV Charging Stations",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-gray-600 md:text-sm">
            EV charging stations for sustainable transportation.
          </p>
          <VisitButton to="/ev" />
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://assets.aceternity.com/templates/startup-1.webp",
              "https://assets.aceternity.com/templates/startup-2.webp",
              "https://assets.aceternity.com/templates/startup-3.webp",
              "https://assets.aceternity.com/templates/startup-4.webp",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="EV Charging Stations"
                className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Pure Flow",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-gray-600 md:text-sm">
            Water purification solutions for safe, sustainable living.
          </p>
          <VisitButton to="/pureflow" />
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://assets.aceternity.com/templates/startup-1.webp",
              "https://assets.aceternity.com/templates/startup-2.webp",
              "https://assets.aceternity.com/templates/startup-3.webp",
              "https://assets.aceternity.com/templates/startup-4.webp",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Pure Flow"
                className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Ekho Digix",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-gray-600 md:text-sm">
            Digital solutions and innovative technology services for modern businesses.
          </p>
          <VisitButton to="/it" />
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://assets.aceternity.com/templates/startup-1.webp",
              "https://assets.aceternity.com/templates/startup-2.webp",
              "https://assets.aceternity.com/templates/startup-3.webp",
              "https://assets.aceternity.com/templates/startup-4.webp",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Ekho Digix"
                className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip py-20 bg-white">
      <Timeline data={timelineItems} />
    </div>
  );
}