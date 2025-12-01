import React from "react";
import { motion } from "framer-motion";

export default function Example() {
  const heading = "Our Latest Creations";
  const words = heading.split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  const description =
    "A visual collection of our most recent works - each piece crafted with intention, emotion, and style.";

  const images = [
    "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&h=800&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&h=800&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&h=800&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1729086046027-09979ade13fd?q=80&h=800&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1601568494843-772eb04aca5d?q=80&h=800&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585687501004-615dfdfde7f1?q=80&h=800&w=800&auto=format&fit=crop",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      {/* Animated Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
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

      <p className="text-center text-slate-300 max-w-lg mx-auto mb-10">{description}</p>

      {/* Desktop view – expanding gallery */}
      <div className="hidden md:flex items-center gap-2 h-[400px] w-full max-w-4xl mt-10 mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full"
          >
            <img
              className="h-full w-full object-cover object-center"
              src={img}
              alt={`image-${index}`}
            />
          </div>
        ))}
      </div>

      {/* Mobile view – horizontal scroll */}
      <div className="md:hidden flex gap-4 overflow-x-auto mt-6 px-4 py-4 scrollbar-hide">
        {images.map((img, index) => (
          <div
            key={index}
            className="min-w-[250px] h-[300px] rounded-lg overflow-hidden shrink-0"
          >
            <img
              className="h-full w-full object-cover object-center"
              src={img}
              alt={`image-${index}`}
            />
          </div>
        ))}
      </div>
    </>
  );
}
