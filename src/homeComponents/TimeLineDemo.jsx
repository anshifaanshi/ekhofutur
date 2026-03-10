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
              <h3 className="text-5xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight">{item.title}</h3>
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
              "https://i.postimg.cc/xCSmHcK2/20260110-135802.avif",
              "https://i.postimg.cc/MHpvbRXZ/20260110-140148.jpg",
              "https://i.postimg.cc/TPv1NBhQ/20260110-135904.jpg",
              "https://i.postimg.cc/pT6t4nqX/20260110-140051.avif",
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
              "https://i.postimg.cc/cHQbMg2n/20260110-111923.avif",
              "https://i.postimg.cc/JncpBwH2/20260110-111940.avif",
              "https://i.postimg.cc/gj2HXxWF/20260110-112120.avif",
              "https://i.postimg.cc/gj2HXxWF/20260110-112120.avif",
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
              "https://i.postimg.cc/QdbwvTd6/IMG-2059.avif",
              "https://i.postimg.cc/gc8MfZMt/IMG-2061.avif",
              "https://i.postimg.cc/jdRhmknC/IMG-2062.avif",
              "https://i.postimg.cc/yxsFqkdj/IMG-2067.avif",
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
   // {
     // title: "Hopeful Steps",
      //content: (
       // <div>
         // <p className="mb-4 text-xs font-normal text-gray-600 md:text-sm">
           // Empowering growth and new beginnings through thoughtful services and design.
          //</p>
          //<VisitButton to="/speech" />
         // <div className="grid grid-cols-2 gap-4">
          //  {[
            //  "https://assets.aceternity.com/templates/startup-1.webp",
              //"https://assets.aceternity.com/templates/startup-2.webp",
             // "https://assets.aceternity.com/templates/startup-3.webp",
             // "https://assets.aceternity.com/templates/startup-4.webp",
            //].map((img, index) => (
              //<img
               // key={index}
                //src={img}
                //alt="Hopeful Steps"
                //className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 shadow-lg"
              ///>
            //))}
          //</div>
        //</div>
     // ),
    //},
    //{
      //title: "Spices",
      //content: (
       // <div>
         // <p className="mb-4 text-xs font-normal text-gray-600 md:text-sm">
           // High-quality, innovative home appliances designed for modern lifestyles.
          //</p>
          //<VisitButton to="/homeappliances" />
         // <div className="grid grid-cols-2 gap-4">
           // {[
             // "https://assets.aceternity.com/templates/startup-1.webp",
              //"https://assets.aceternity.com/templates/startup-2.webp",
              //"https://assets.aceternity.com/templates/startup-3.webp",
              //"https://assets.aceternity.com/templates/startup-4.webp",
            //].map((img, index) => (
              //<img
                //key={index}
               // src={img}
                //alt="Home Appliances"
                //className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 shadow-lg"
              ///>
            //))}
          //</div>
        //</div>
      //),
    //},
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
              "https://i.postimg.cc/brYX6Nj2/IMG-3812.avif",
              "https://i.postimg.cc/J4yYRBKh/IMG-3814.avif",
              "https://i.postimg.cc/CLf73pLq/IMG-3815.avif",
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
          <VisitButton to="https://pots-beta.vercel.app/" />
          <div className="grid grid-cols-2 gap-4">
            {["https://i.postimg.cc/xdj8SMyH/IMG-2042.avif ",
              "https://i.postimg.cc/xCw9qzHc/IMG-2050.avif",
              "https://i.postimg.cc/P5ShYcYh/IMG-2052-(1).avif",
              "https://i.postimg.cc/4dtrLF7z/IMG-2056.avif",
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
              "https://i.postimg.cc/mgmdWB53/Whats-App-Image-2026-03-10-at-2-39-01-PM.jpg",
              "https://i.postimg.cc/C1TkW2Sn/Whats-App-Image-2026-03-10-at-2-39-02-PM-(1).jpg",
              "https://i.postimg.cc/fR199P3P/Whats-App-Image-2026-03-10-at-2-39-01-PM.jpg",
              "https://i.postimg.cc/J7KHq0D3/Whats-App-Image-2026-03-10-at-2-39-02-PM-(1).jpg",
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
    //{
      //title: "Co Working Space",
      //content: (
       // <div>
         // <p className="mb-4 text-xs font-normal text-gray-600 md:text-sm">
           // Collaborative and vibrant co-working environments for creative and professional minds.
          //</p>
          //<VisitButton to="/coworking" />
         // <div className="grid grid-cols-2 gap-4">
           // {[
             // "https://assets.aceternity.com/templates/startup-1.webp",
             // "https://assets.aceternity.com/templates/startup-2.webp",
             // "https://assets.aceternity.com/templates/startup-3.webp",
             // "https://assets.aceternity.com/templates/startup-4.webp",
            //].map((img, index) => (
             // <img
               // key={index}
               // src={img}
                //alt="Co Working Space"
               // className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 shadow-lg"
              ///>
            //))}
          //</div>
        //</div>
     // ),
    //},
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
              "https://i.postimg.cc/kXWypPgB/20260110-113349.avif",
              "https://i.postimg.cc/SKn2HcG4/20260110-113458.avif",
              "https://i.postimg.cc/3J6HnpW9/20260110-113438.avif",
              "https://i.postimg.cc/SKn2HcG4/20260110-113458.avif",
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
              "https://i.postimg.cc/d0vJpRgV/Whats-App-Image-2026-03-10-at-2-22-33-PM.jpg",
              "https://i.postimg.cc/v8jbbwpy/Whats-App-Image-2026-03-10-at-2-22-33-PM.jpg",
              "https://i.postimg.cc/br2Xsd4g/Whats-App-Image-2026-03-10-at-2-22-33-PM.jpg",
              "https://i.postimg.cc/hjX41DHj/Whats-App-Image-2026-03-10-at-2-22-33-PM.jpg",
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
   // {
     // title: "Solar",
      //content: (
        //<div>
          //<p className="mb-4 text-xs font-normal text-gray-600 md:text-sm">
            //Solar energy solutions for clean, renewable power.
          //</p>
          //<VisitButton to="solar" />
          //<div className="grid grid-cols-2 gap-4">
            //{[
              //"https://assets.aceternity.com/templates/startup-1.webp",
              //"https://assets.aceternity.com/templates/startup-2.webp",
              //"https://assets.aceternity.com/templates/startup-3.webp",
              //"https://assets.aceternity.com/templates/startup-4.webp",
            //].map((img, index) => (
              //<img
                //key={index}
                //src={img}
                //alt="Solar"
                //className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 shadow-lg"
              ///>
           // ))}
          //</div>
        //</div>
     // ),
    //},
    //{
      //title: "EV Charging Stations",
      //content: (
        //<div>
          //<p className="mb-4 text-xs font-normal text-gray-600 md:text-sm">
            //EV charging stations for sustainable transportation.
          //</p>
          //<VisitButton to="/ev" />
          //<div className="grid grid-cols-2 gap-4">
            //{[
              //"https://assets.aceternity.com/templates/startup-1.webp",
              //"https://assets.aceternity.com/templates/startup-2.webp",
              //"https://assets.aceternity.com/templates/startup-3.webp",
              //"https://assets.aceternity.com/templates/startup-4.webp",
            //].map((img, index) => (
              //<img
                //key={index}
                //src={img}
                //alt="EV Charging Stations"
                //className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 shadow-lg"
              ///>
            //))}
          //</div>
        //</div>
     // ),
    //},
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
              "https://i.postimg.cc/HnQg6V3n/Whats-App-Image-2026-03-10-at-3-12-52-PM.jpg",
              "https://i.postimg.cc/wjWd4K54/Whats-App-Image-2026-03-10-at-3-12-52-PM.jpg",
              "https://i.postimg.cc/SNkFyQgb/Whats-App-Image-2026-03-10-at-3-12-53-PM.jpg",
              "https://i.postimg.cc/8P132KCT/Whats-App-Image-2026-03-10-at-3-12-54-PM.jpg",
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
              "https://i.postimg.cc/0y4BJ9dX/Whats-App-Image-2026-03-10-at-3-12-21-PM.jpg",
              "https://i.postimg.cc/Y96nVYcZ/Whats-App-Image-2026-03-10-at-3-12-22-PM.jpg",
              "https://i.postimg.cc/QM5091MM/Whats-App-Image-2026-03-10-at-3-12-22-PM.jpg",
              "https://i.postimg.cc/SNvrgD22/Whats-App-Image-2026-03-10-at-3-12-22-PM.jpg",
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