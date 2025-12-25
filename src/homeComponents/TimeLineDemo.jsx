import React from "react";
import { Link } from "react-router-dom";
import { Timeline } from "./TimeLine";

export function TimelineDemo() {
  // VisitButton supports internal + external links automatically
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
          <p className="mb-4 text-xs font-normal text-neutral-100 md:text-sm">
            Bringing back the classic touch with vintage designs and traditional workflows.
          </p>
          <VisitButton to="https://oldschool-three.vercel.app/" />
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
          <p className="mb-4 text-xs font-normal text-neutral-100 md:text-sm">
            Innovative and ahead of the curve, we create designs that set trends in the industry.
          </p>
          <VisitButton to="https://trendsetter-three.vercel.app/" />
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
          <p className="mb-4 text-xs font-normal text-neutral-100 md:text-sm">
            Creating modern dental solutions with clean, professional, and approachable aesthetics.
          </p>
          <VisitButton to="https://coruscating-blancmange-28365c.netlify.app/" />
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
          <p className="mb-4 text-xs font-normal text-neutral-100 md:text-sm">
            Empowering growth and new beginnings through thoughtful services and design.
          </p>
          <VisitButton to="https://trendsetter-three.vercel.app/" />
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
      title: "Home Appliances",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-100 md:text-sm">
            High-quality, innovative home appliances designed for modern lifestyles.
          </p>
          <VisitButton to="https://homeappliances-one.vercel.app/" />
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
          <p className="mb-4 text-xs font-normal text-neutral-100 md:text-sm">
            Enhancing spaces and products with thoughtful design and attention to detail.
          </p>
          <VisitButton to="/projects/compliment" />
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
          <p className="mb-4 text-xs font-normal text-neutral-100 md:text-sm">
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
          <p className="mb-4 text-xs font-normal text-neutral-100 md:text-sm">
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
          <p className="mb-4 text-xs font-normal text-neutral-100 md:text-sm">
            Collaborative and vibrant co-working environments for creative and professional minds.
          </p>
          <VisitButton to="https://coworkingspace-psi.vercel.app/" />
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
          <p className="mb-4 text-xs font-normal text-neutral-100 md:text-sm">
            Creative landscape and architectural solutions that elevate outdoor spaces.
          </p>
          <VisitButton to="/projects/ekhora-scapes" />
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
          <p className="mb-4 text-xs font-normal text-neutral-100 md:text-sm">
            Comfortable home stays and wellness centers for relaxation and rejuvenation.
          </p>
          <VisitButton to="https://wellnesscenter-six.vercel.app/" />
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
          <p className="mb-4 text-xs font-normal text-neutral-100 md:text-sm">
            Solar energy solutions for clean, renewable power.
          </p>
          <VisitButton to="https://solar-two-nu.vercel.app/" />
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
          <p className="mb-4 text-xs font-normal text-neutral-100 md:text-sm">
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
          <p className="mb-4 text-xs font-normal text-neutral-100 md:text-sm">
            Water purification solutions for safe, sustainable living.
          </p>
          <VisitButton to="/projects/pure-flow" />
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
          <p className="mb-4 text-xs font-normal text-neutral-100 md:text-sm">
            Digital solutions and innovative technology services for modern businesses.
          </p>
          <VisitButton to="https://itservice-92jh.vercel.app/" />
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
    <div
      className="relative w-full overflow-clip py-20"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #4682B4 100%)",
      }}
    >
      <Timeline data={timelineItems} />
    </div>
  );
}
