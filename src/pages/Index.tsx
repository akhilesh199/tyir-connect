import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CommunitiesSection from "@/components/CommunitiesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CommunitiesSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
};

export default Index;
