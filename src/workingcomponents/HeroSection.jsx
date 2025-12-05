import { CheckIcon, ChevronRightIcon, VideoIcon } from "lucide-react";
import { motion } from "motion/react";
import TiltedImage from "./TitleImage";

export default function HeroSection() {
    const specialFeatures = [
        "No credit card",
        "30 days free trial",
        "Setup in 10 minutes",
    ];

    return (
        <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32">
            
            {/* Glowing Steel Blue blurred backgrounds */}
            <div className="absolute top-20 -z-10 left-1/4 w-72 h-72 bg-[#63a0d4] blur-[300px] rounded-full"></div>
            <div className="absolute top-64 -z-10 right-1/4 w-72 h-72 bg-[#5a9bd6] blur-[250px] rounded-full"></div>

            {/* Badge link */}
            <motion.a
                href="https://prebuiltui.com"
                className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-44 text-blue-100 bg-[#4682B4]/15"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <span className="bg-[#4682B4] text-white text-xs px-3.5 py-1 rounded-full">
                    NEW
                </span>
                <p className="flex items-center gap-1">
                    <span>Try 30 days free trial option</span>
                    <ChevronRightIcon size={16} className="group-hover:translate-x-0.5 transition duration-300" />
                </p>
            </motion.a>

            {/* Hero Heading */}
            <motion.h1
                className="text-5xl/17 md:text-6xl/21 font-medium max-w-2xl text-center mt-12"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                Why Choose Our Coworking Space?{" "}
                <span className="move-gradient px-3 rounded-xl text-nowrap bg-[#4682B4] text-white">
                    Our Amenities
                </span>
            </motion.h1>

            {/* Hero paragraph */}
            <motion.p
                className="text-base text-center text-slate-200 max-w-lg mt-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                No complexity. No noise. Just clean, reliable automation to boost your team’s efficiency.
            </motion.p>

            {/* Buttons */}
            <motion.div
                className="flex items-center gap-4 mt-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <button className="bg-[#315f7d] hover:bg-[#4682B4] text-white rounded-full px-7 h-11">
                    Get started
                </button>
                <button className="flex items-center gap-2 border border-[#4682B4] hover:bg-[#4682B4] transition rounded-full px-6 h-11">
                    <VideoIcon strokeWidth={1} />
                    <span>Watch demo</span>
                </button>
            </motion.div>

            {/* Features list */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-14 mt-12">
                {specialFeatures.map((feature, index) => (
                    <motion.p
                        className="flex items-center gap-2"
                        key={index}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.2}`, duration: 0.3 }}
                    >
                        <CheckIcon className="w-5 h-5 text-[#315f7d]" />
                        <span className="text-slate-400">{feature}</span>
                    </motion.p>
                ))}
            </div>

            {/* Tilted Image Component */}
            <TiltedImage />
        </div>
    );
}