import { motion } from "framer-motion";

export default function AboutOurApps() {
  const sectionData = [
    {
      title: "Lightning-Fast Performance",
      description: "Built with speed — minimal load times and optimized.",
      image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png",
      className: "py-10 border-b border-slate-700 md:py-0 md:border-r md:border-b-0 md:px-10"
    },
    {
      title: "Beautifully Designed Components",
      description: "Modern, pixel-perfect UI components ready for any project.",
      image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png",
      className: "py-10 border-b border-slate-700 md:py-0 lg:border-r md:border-b-0 md:px-10"
    },
    {
      title: "Plug-and-Play Integration",
      description: "Simple setup with support for React, Next.js and Tailwind CSS.",
      image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png",
      className: "py-10 border-b border-slate-700 md:py-0 md:border-b-0 md:px-10"
    },
  ];

  // Split heading for animation
  const heading = "About Our Apps";
  const words = heading.split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return (
    <section
      id="about"
      className="flex flex-col items-center py-16"
    >
      {/* Section heading with yellow gradient animation */}
      <motion.h2
        className="text-4xl font-bold text-white text-center mb-10"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
      >
        {firstPart}{" "}
        <motion.span
          className="bg-gradient-to-t from-yellow-400 to-yellow-600 p-1 bg-left inline-block bg-no-repeat"
          initial={{ backgroundSize: "0% 100%" }}
          whileInView={{ backgroundSize: "100% 100%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeInOut" }}
        >
          {lastWord}
        </motion.span>
      </motion.h2>

      <p className="text-center text-slate-300 max-w-2xl mb-12">
        A visual collection of our most recent works — each piece crafted with intention, emotion, and style.
      </p>

      <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-0 gap-8">
        {sectionData.map((data, index) => (
          <motion.div
            key={data.title}
            className={data.className}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
          >
            <div className="size-10 p-2 bg-indigo-600/20 border border-indigo-600/30 rounded">
              <img src={data.image} alt={data.title} className="w-full h-auto" />
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-base font-medium text-white">{data.title}</h3>
              <p className="text-sm text-slate-300">{data.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
