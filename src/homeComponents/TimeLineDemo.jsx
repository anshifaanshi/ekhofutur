import React from "react";
import { Link } from "react-router-dom";
import { Timeline } from "./TimeLine";

export function TimelineDemo() {
  // Reusable button using Link
  const VisitButton = ({ to }) => (
    <Link
      to={to}
      className="inline-block mb-4 px-4 py-2 bg-[#4682B4] text-white rounded-lg 
      hover:bg-[#FFD700] hover:text-black transition-all duration-300"
    >
      Visit Website
    </Link>
  );

  const timelineItems = [
    {
      title: "Old School",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-100 md:text-sm">
            Bringing back the classic touch with vintage designs and traditional workflows.
          </p>
          <VisitButton to="/projects/old-school" />
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
          <VisitButton to="/projects/trend-setter" />
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
          <VisitButton to="/projects/lubnas-dental" />
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
      title: "Home Appliances",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-100 md:text-sm">
            High-quality, innovative home appliances designed for modern lifestyles.
          </p>
          <VisitButton to="/projects/home-appliances" />
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
          <VisitButton to="/projects/co-working-space" />
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
      title: "Home Stays & Wellness center",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-100 md:text-sm">
            Comfortable home stays and wellness centers for relaxation and rejuvenation.
          </p>
          <VisitButton to="/projects/home-stays-wellness" />
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
      title: "EV Stations",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-100 md:text-sm">
            Environmentally friendly and strategically placed EV charging stations.
          </p>
          <VisitButton to="/projects/ev-stations" />
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
                alt="EV Stations"
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
