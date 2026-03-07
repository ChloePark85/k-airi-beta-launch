import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import BetaSignupSection from "@/components/BetaSignupSection";
import FAQSection from "@/components/FAQSection";

const Index = () => (
  <div className="min-h-screen">
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <FeaturesSection />
    <BetaSignupSection />
    <FAQSection />
    <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border/30">
      © 2026 K-AIRI. All rights reserved.
    </footer>
  </div>
);

export default Index;
