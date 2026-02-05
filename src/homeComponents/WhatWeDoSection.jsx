import React from "react";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatWeDoSection() {
  const heading = "What we do?";
  const words = heading.split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-20 mt-20">
      <div className="relative shadow-2xl shadow-steelBlue/40 rounded-2xl overflow-hidden shrink-0">
        <img
          className="max-w-sm w-full object-cover rounded-2xl"
          src="https://i.postimg.cc/rw7qbsxt/business-people-team-up-together-work.jpg"
          alt=""
        />
        <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
          <div className="flex -space-x-4 shrink-0">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt="image"
              className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1"
            />
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
              alt="image"
              className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
              alt="image"
              className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]"
            />
            <div className="flex items-center justify-center text-xs text-white size-9 rounded-full border-[3px] border-white bg-steelBlue hover:-translate-y-1 transition z-[4]">
              50+
            </div>
          </div>
          <p className="text-sm font-medium text-slate-800">Join With Ekho Futur</p>
        </div>
      </div>

      <div className="text-sm text-slate-600 max-w-md">
        {/* Animated Section Title */}
        <motion.h1
          className="text-xl uppercase font-semibold mb-2 text-slate-700"
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
        </motion.h1>

        <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-steelBlue to-[#DDD9FF]"></div>
       <p className="mt-8">
  Ekho Future helps you succeed across multiple industries by delivering innovative solutions
  tailored to your unique needs, from fashion retail to cutting-edge technology.
</p>
<p className="mt-4">
  Whether you're shopping for the latest styles at our dress boutique, enhancing smiles at
  our dental studio, charging your electric vehicle, or transforming your business with our
  IT solutions, we're here to serve you.
</p>
<p className="mt-4">
  From personalized customer care to forward-thinking services, Ekho Future empowers you to
  live better and embrace the future with confidence.
</p>
        <button className="flex items-center gap-2 mt-8 hover:opacity-90 transition btn py-3 px-8 rounded-full text-white bg-steelBlue">
          <span>Read more</span>
          <ArrowRightIcon className="size-5" />
        </button>
      </div>
    </section>
  );
}
