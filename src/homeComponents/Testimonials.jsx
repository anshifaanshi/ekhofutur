import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const data = [
    {
      review: 'Ekho Future transformed our office with their dental studio. Professional service, modern equipment, and a team that truly cares about patient comfort.',
      name: 'Sarah Ahmed',
      about: 'Dental Studio Client',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
    },
    {
      review: 'The EV charging stations are incredibly convenient and reliable. Fast charging, easy payment, and always well-maintained. Highly recommend!',
      name: 'Michael Chen',
      about: 'EV Charging Customer',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
    },
    {
      review: 'Found the perfect dress for my sister\'s wedding at their boutique. The collection is stunning and the staff made shopping a delightful experience.',
      name: 'Amira Hassan',
      about: 'Fashion Boutique Customer',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
    },
    {
      review: 'Their IT solutions team helped modernize our entire business infrastructure. Efficient, knowledgeable, and always available when we need support.',
      name: 'David Williams',
      about: 'IT Services Client',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
    },
    {
      review: 'Ekho Future\'s landscape design completely transformed our outdoor space. Creative vision meets exceptional execution. Absolutely thrilled with the results!',
      name: 'Fatima Al-Mansoori',
      about: 'Ekhora Scapes Client',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop',
    },
    {
      review: 'From cookware to home essentials, their product quality is outstanding. Great prices, beautiful designs, and customer service that goes above and beyond.',
      name: 'James Martinez',
      about: 'Retail Customer',
      rating: 5,
      image: 'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png',
    },
  ];

  // Split heading for gradient animation
  const heading = "Hear what our valued customers say about their experiences.";
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
        Real stories from real customers across our diverse range of services — from fashion and dental care to IT solutions and sustainable energy.
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

            <p className="text-slate-200 mb-3">"{item.review}"</p>
            <p className="text-gray-300 font-semibold">- {item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;