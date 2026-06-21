import HeroSection        from "@/components/landing/HeroSection";
import ProblemSection     from "@/components/landing/ProblemSection";
import FeaturesSection    from "@/components/landing/FeaturesSection";
import SolutionSection    from "@/components/landing/SolutionSection";
import TargetMarketSection from "@/components/landing/TargetMarketSection";
import CTASection         from "@/components/landing/CTASection";

export default function LandingPage() {
  return (
    <main className="page-transition">
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <SolutionSection />
      <TargetMarketSection />
      <CTASection />
    </main>
  );
}
