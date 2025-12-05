import HeroSection from "./workingcomponents/HeroSection";
import FeaturesSection from "./workingcomponents/FeaturesSection";
import TestimonialSection from "./workingcomponents/TestmonialSection";
import PricingSection from "./workingcomponents/PricingSection";

import CTASection from "./workingcomponents/CTASection";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <TestimonialSection />
            <PricingSection />
            
            <CTASection />
        </>
    );
}