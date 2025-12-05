import { CheckIcon } from "lucide-react";
import { motion } from "motion/react";
import { pricingData } from "./PricingData";
import SectionTitle from "./SectionTitle";

export default function PricingSection() {
    return (
        <div id="pricing" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle 
                text1="Pricing" 
                text2="Our Pricing Plans" 
                text3="Flexible pricing options designed to meet your needs — whether you're just getting started or scaling up." 
                textHighlightClass="text-[#4682B4]" // Steel Blue highlights
            />

            <div className="flex flex-wrap items-center justify-center gap-8 mt-20">
                {pricingData.map((plan, index) => (
                    <motion.div 
                        key={index} 
                        className={`w-72 text-center border border-[#315f7d] p-6 pb-16 rounded-xl ${plan.mostPopular ? 'bg-[#315f7d] relative' : 'bg-[#315f7d]/30'}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        {plan.mostPopular && (
                            <p className="absolute px-3 text-sm -top-3.5 left-3.5 py-1 bg-[#4682B4] text-white rounded-full">
                                Most Popular
                            </p>
                        )}
                        <p className="font-semibold text-white">{plan.name}</p>
                        <h1 className="text-3xl font-semibold text-white">
                            ${plan.price}
                            <span className="text-gray-500 font-normal text-sm">/{plan.period}</span>
                        </h1>
                        <ul className="list-none text-slate-300 mt-6 space-y-2">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <CheckIcon className="w-4.5 h-4.5 text-[#4682B4]" />
                                    <p>{feature}</p>
                                </li>
                            ))}
                        </ul>
                        <button 
                            type="button" 
                            className={`w-full py-2.5 rounded-md font-medium mt-7 transition-all ${plan.mostPopular ? 'bg-white text-[#4682B4] hover:bg-slate-200' : 'bg-[#4682B4] hover:bg-[#315f7d]'}`}
                        >
                            Get Started
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
