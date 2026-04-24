import React from "react";
import { Link } from "react-router-dom";

const VisitButton = ({ to }) => {
  const isExternal = to.startsWith("http");
  const cls =
    "inline-block mb-4 px-4 py-2 bg-[#4682B4] text-white rounded-lg hover:bg-[#FFD700] hover:text-black transition-all duration-300";
  return isExternal ? (
    <a href={to} className={cls}>Visit Website</a>
  ) : (
    <Link to={to} className={cls}>Visit Website</Link>
  );
};

// 4 images in a 2x2 grid (2 up, 2 down)
const ImageRow = ({ images, alt }) => (
  <div className="grid grid-cols-2 gap-2">
    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={alt}
        className="h-32 w-full rounded-lg object-cover shadow-md"
      />
    ))}
  </div>
);

// A sub-item card — compact, designed to sit in a 2-col grid
function SubItem({ title, description, to, images }) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col gap-3">
      <h4 className="text-xl font-bold text-[#1a1a1a]">{title}</h4>
      <p className="text-xs font-normal text-gray-600">{description}</p>
      <VisitButton to={to} />
      <ImageRow images={images} alt={title} />
    </div>
  );
}

// A category section: big heading, then 2 sub-items side by side
function CategorySection({ heading, subItems }) {
  return (
    <div className="relative pl-8 border-l-2 border-[#FFD700] pb-8">
      {/* Timeline dot */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#FFD700] border-4 border-white"></div>

      {/* Main heading banner */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm mb-4">
        <h3 className="text-5xl font-extrabold text-[#1a1a1a] tracking-tight">{heading}</h3>
      </div>

      {/* 2-column sub-items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subItems.map((item, i) => (
          <SubItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

// A standalone timeline item (no sub-items, just a heading + content)
function StandaloneItem({ title, description, to, images }) {
  return (
    <div className="relative pl-8 border-l-2 border-[#FFD700] pb-8">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#FFD700] border-4 border-white"></div>
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-5xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight">{title}</h3>
        <p className="mb-4 text-xs font-normal text-gray-600 md:text-sm">{description}</p>
        <VisitButton to={to} />
        <ImageRow images={images} alt={title} />
      </div>
    </div>
  );
}

export function TimelineDemo() {
  return (
    <div className="relative w-full overflow-clip py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="space-y-8">

          {/* Outdoor Clothings */}
          <CategorySection
            heading="Outdoor Clothings"
            subItems={[
              {
                title: "Old School",
                description: "Bringing back the classic touch with vintage designs and traditional workflows.",
                to: "/oldschool",
                images: [
                  "https://i.postimg.cc/xCSmHcK2/20260110-135802.avif",
                  "https://i.postimg.cc/MHpvbRXZ/20260110-140148.jpg",
                  "https://i.postimg.cc/TPv1NBhQ/20260110-135904.jpg",
                  "https://i.postimg.cc/pT6t4nqX/20260110-140051.avif",
                ],
              },
              {
                title: "Trend Setter",
                description: "Innovative and ahead of the curve, we create designs that set trends in the industry.",
                to: "/trendsetter",
                images: [
                  "https://i.postimg.cc/cHQbMg2n/20260110-111923.avif",
                  "https://i.postimg.cc/JncpBwH2/20260110-111940.avif",
                  "https://i.postimg.cc/gj2HXxWF/20260110-112120.avif",
                  "https://i.postimg.cc/gj2HXxWF/20260110-112120.avif",
                ],
              },
            ]}
          />

          {/* Life Care */}
          <CategorySection
            heading="Life Care"
            subItems={[
              {
                title: "Lubnas Dental Clinic",
                description: "Creating modern dental solutions with clean, professional, and approachable aesthetics.",
                to: "/lubnas",
                images: [
                  "https://i.postimg.cc/QdbwvTd6/IMG-2059.avif",
                  "https://i.postimg.cc/gc8MfZMt/IMG-2061.avif",
                  "https://i.postimg.cc/jdRhmknC/IMG-2062.avif",
                  "https://i.postimg.cc/yxsFqkdj/IMG-2067.avif",
                ],
              },
              {
                title: "Hopeful Steps",
                description: "Empowering growth and new beginnings through thoughtful services and design.",
                to: "/speech",
                images: [
                  "https://assets.aceternity.com/templates/startup-1.webp",
                  "https://assets.aceternity.com/templates/startup-2.webp",
                  "https://assets.aceternity.com/templates/startup-3.webp",
                  "https://assets.aceternity.com/templates/startup-4.webp",
                ],
              },
            ]}
          />

          {/* Smart Kitchen */}
          <CategorySection
            heading="Smart Kitchen"
            subItems={[
              {
                title: "Compliment",
                description: "Enhancing spaces and products with thoughtful design and attention to detail.",
                to: "/compliment",
                images: [
                  "https://i.postimg.cc/brYX6Nj2/IMG-3812.avif",
                  "https://i.postimg.cc/J4yYRBKh/IMG-3814.avif",
                  "https://i.postimg.cc/CLf73pLq/IMG-3815.avif",
                  "https://assets.aceternity.com/templates/startup-4.webp",
                ],
              },
              {
                title: "Pots And Pan",
                description: "Quality cookware for modern kitchens, blending style and functionality.",
                to: "https://pots-beta.vercel.app/",
                images: [
                  "https://i.postimg.cc/xdj8SMyH/IMG-2042.avif",
                  "https://i.postimg.cc/xCw9qzHc/IMG-2050.avif",
                  "https://i.postimg.cc/P5ShYcYh/IMG-2052-(1).avif",
                  "https://i.postimg.cc/4dtrLF7z/IMG-2056.avif",
                ],
              },
            ]}
          />

          {/* Builders & Realtors — standalone */}
          <StandaloneItem
            title="Builders & Realtors"
            description="Expertly crafted real estate solutions for modern urban and residential developments."
            to="/realtors"
            images={[
              "https://i.postimg.cc/mgmdWB53/Whats-App-Image-2026-03-10-at-2-39-01-PM.jpg",
              "https://i.postimg.cc/C1TkW2Sn/Whats-App-Image-2026-03-10-at-2-39-02-PM-(1).jpg",
              "https://i.postimg.cc/fR199P3P/Whats-App-Image-2026-03-10-at-2-39-01-PM.jpg",
              "https://i.postimg.cc/J7KHq0D3/Whats-App-Image-2026-03-10-at-2-39-02-PM-(1).jpg",
            ]}
          />

          {/* Ekhora Scapes (Tours and Packages) */}
          <CategorySection
            heading="Ekhora Scapes (Tours and Packages)"
            subItems={[
              {
                title: "Retreats",
                description: "Creative landscape and architectural solutions that elevate outdoor spaces.",
                to: "/ekhora",
                images: [
                  "https://i.postimg.cc/kXWypPgB/20260110-113349.avif",
                  "https://i.postimg.cc/SKn2HcG4/20260110-113458.avif",
                  "https://i.postimg.cc/3J6HnpW9/20260110-113438.avif",
                  "https://i.postimg.cc/SKn2HcG4/20260110-113458.avif",
                ],
              },
              {
                title: "Wellness Centre",
                description: "Comfortable home stays and wellness centers for relaxation and rejuvenation.",
                to: "/wellnes",
                images: [
                  "https://i.postimg.cc/d0vJpRgV/Whats-App-Image-2026-03-10-at-2-22-33-PM.jpg",
                  "https://i.postimg.cc/v8jbbwpy/Whats-App-Image-2026-03-10-at-2-22-33-PM.jpg",
                  "https://i.postimg.cc/br2Xsd4g/Whats-App-Image-2026-03-10-at-2-22-33-PM.jpg",
                  "https://i.postimg.cc/hjX41DHj/Whats-App-Image-2026-03-10-at-2-22-33-PM.jpg",
                ],
              },
            ]}
          />

          {/* Pure Flow — standalone */}
          <StandaloneItem
            title="Pure Flow"
            description="Water purification solutions for safe, sustainable living."
            to="/pureflow"
            images={[
              "https://i.postimg.cc/HnQg6V3n/Whats-App-Image-2026-03-10-at-3-12-52-PM.jpg",
              "https://i.postimg.cc/wjWd4K54/Whats-App-Image-2026-03-10-at-3-12-52-PM.jpg",
              "https://i.postimg.cc/SNkFyQgb/Whats-App-Image-2026-03-10-at-3-12-53-PM.jpg",
              "https://i.postimg.cc/8P132KCT/Whats-App-Image-2026-03-10-at-3-12-54-PM.jpg",
            ]}
          />

          {/* Ekho Nova */}
          <CategorySection
            heading="Ekho Nova"
            subItems={[
              {
                title: "Solar",
                description: "Solar energy solutions for clean, renewable power.",
                to: "/solar",
                images: [
                  "https://assets.aceternity.com/templates/startup-1.webp",
                  "https://assets.aceternity.com/templates/startup-2.webp",
                  "https://assets.aceternity.com/templates/startup-3.webp",
                  "https://assets.aceternity.com/templates/startup-4.webp",
                ],
              },
              {
                title: "Ekho Elevators",
                description: "Modern elevator solutions for residential and commercial buildings.",
                to: "/elevators",
                images: [
                  "https://assets.aceternity.com/templates/startup-1.webp",
                  "https://assets.aceternity.com/templates/startup-2.webp",
                  "https://assets.aceternity.com/templates/startup-3.webp",
                  "https://assets.aceternity.com/templates/startup-4.webp",
                ],
              },
            ]}
          />

          {/* Co Working Space */}
          <CategorySection
            heading="Co Working Space"
            subItems={[
              {
                title: "Co Working Space",
                description: "Collaborative and vibrant co-working environments for creative and professional minds.",
                to: "/coworking",
                images: [
                  "https://assets.aceternity.com/templates/startup-1.webp",
                  "https://assets.aceternity.com/templates/startup-2.webp",
                  "https://assets.aceternity.com/templates/startup-3.webp",
                  "https://assets.aceternity.com/templates/startup-4.webp",
                ],
              },
            ]}
          />

          {/* Ekho Digix & Experience Centre */}
          <CategorySection
            heading="Ekho Digix & Experience Centre"
            subItems={[
              {
                title: "Agency",
                description: "Digital solutions and innovative technology services for modern businesses.",
                to: "/it",
                images: [
                  "https://i.postimg.cc/0y4BJ9dX/Whats-App-Image-2026-03-10-at-3-12-21-PM.jpg",
                  "https://i.postimg.cc/Y96nVYcZ/Whats-App-Image-2026-03-10-at-3-12-22-PM.jpg",
                  "https://i.postimg.cc/QM5091MM/Whats-App-Image-2026-03-10-at-3-12-22-PM.jpg",
                  "https://i.postimg.cc/SNvrgD22/Whats-App-Image-2026-03-10-at-3-12-22-PM.jpg",
                ],
              },
              {
                title: "Ekho Skillbyte Academy",
                description: "Skill development and training programs empowering the next generation of professionals.",
                to: "/academy",
                images: [
                  "https://assets.aceternity.com/templates/startup-1.webp",
                  "https://assets.aceternity.com/templates/startup-2.webp",
                  "https://assets.aceternity.com/templates/startup-3.webp",
                  "https://assets.aceternity.com/templates/startup-4.webp",
                ],
              },
            ]}
          />

        </div>
      </div>
    </div>
  );
}