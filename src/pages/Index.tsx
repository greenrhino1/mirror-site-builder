import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhatWeBuySection from "@/components/WhatWeBuySection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <HowItWorksSection />
      <WhatWeBuySection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
};

export default Index;
