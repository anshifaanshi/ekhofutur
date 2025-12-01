import React from "react";
import { Timeline } from "./TimeLine";

export function TimelineDemo() {
  const timelineItems = [
    {
      title: "Old School",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Bringing back the classic touch with vintage designs and traditional workflows.
          </p>
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
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Innovative and ahead of the curve, we create designs that set trends in the industry.
          </p>
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
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Creating modern dental solutions with clean, professional, and approachable aesthetics.
          </p>
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
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            High-quality, innovative home appliances designed for modern lifestyles.
          </p>
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
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Expertly crafted real estate solutions for modern urban and residential developments.
          </p>
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
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Collaborative and vibrant co-working environments for creative and professional minds.
          </p>
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
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Comfortable home stays and wellness centers for relaxation and rejuvenation.
          </p>
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
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Environmentally friendly and strategically placed EV charging stations.
          </p>
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
    <div className="relative w-full overflow-clip">
      <Timeline data={timelineItems} />
    </div>
  );
}
