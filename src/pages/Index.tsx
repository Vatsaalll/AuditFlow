
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import MissionSection from "@/components/sections/MissionSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "AuditFlow - AI-Powered Code Auditing & Tech Debt Management";
  }, []);

  return (
    <div className="min-h-screen">
      <Header isHomePage={true} />
      
      <main>
        <HeroSection />
        <FeaturedSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TestimonialsSection />
        <MissionSection />
        <PricingSection />
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
