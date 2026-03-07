import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import BetaSignupSection from "@/components/BetaSignupSection";
import FAQSection from "@/components/FAQSection";

const Index = () => (
  <div className="min-h-screen overflow-x-hidden">
    <HeroSection />
    <div className="relative">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 0%, hsl(270 60% 4%) 50%, transparent 100%)" }} />
      <ProblemSection />
    </div>
    <SolutionSection />
    <FeaturesSection />
    <BetaSignupSection />
    <FAQSection />
    <footer className="py-10 text-center text-muted-foreground text-sm border-t" style={{ borderColor: "hsl(270 30% 15% / 0.5)" }}>
      <span className="font-display tracking-wide">© 2026 K-AIRI</span>
      <span className="mx-2">·</span>
      <span>All rights reserved.</span>
    </footer>
  </div>
);

export default Index;
