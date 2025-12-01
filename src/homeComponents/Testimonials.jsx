import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const data = [
    {
      review: 'Super clean and easy to use. These Tailwind + React components saved me hours of dev time and countless lines of extra code!',
      name: 'Richard Nelson',
      about: 'Founder & CEO',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
    },
    {
      review: 'The design quality is top-notch. Perfect balance between simplicity and style. Highly recommend for any creative developer!',
      name: 'Sophia Martinez',
      about: 'Founder & CEO',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
    },
    {
      review: 'Absolutely love the reusability of these components. My workflow feels 10x faster now with cleaner and more consistent layouts.',
      name: 'Ethan Roberts',
      about: 'Founder & CEO',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
    },
    {
      review: 'Clean, elegant, and efficient. These components are a dream for any modern web developer who values beautiful code.',
      name: 'Isabella Kim',
      about: 'Founder & CEO',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
    },
    {
      review: "I've tried dozens of UI kits, but this one just feels right. Everything works seamlessly and looks incredibly polished.",
      name: 'Liam Johnson',
      about: 'Founder & CEO',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop',
    },
    {
      review: 'Brilliantly structured components with clean, modern styling. Makes development a joy and design updates super quick.',
      name: 'Ava Patel',
      about: 'Founder & CEO',
      rating: 5,
      image: 'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png',
    },
  ];

  // Split heading for gradient animation
  const heading = "Here what our trusted users say about our best AI agents.";
  const words = heading.split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return (
    <section className="mt-32 flex flex-col items-center py-16">
      {/* Animated Section Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-5"
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
        Empower your business with AI agents that optimize processes and accelerate performance.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="relative w-full max-w-88 p-6 rounded-xl border border-yellow-400 bg-black/20 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_#facc15,0_0_25px_#fbbf24,0_0_40px_#f59e0b]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 300 }}
          >
            {/* Electric Glow Effect */}
            <div className="absolute inset-0 rounded-xl border border-yellow-400 opacity-25 blur-xl animate-pulse pointer-events-none"></div>

            <div className="relative flex items-center justify-between mb-4">
              <div>
                <p className="font-medium text-yellow-400">{item.about}</p>
              </div>
              <img
                className="w-12 h-12 rounded-full border-2 border-yellow-400"
                src={item.image}
                alt={item.name}
              />
            </div>

            <p className="text-slate-200 mb-3">“{item.review}”</p>
            <p className="text-gray-300 font-semibold">- {item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
