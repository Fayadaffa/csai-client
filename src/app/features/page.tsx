import type { Metadata } from "next";
import FeaturesHero from "@/components/features/FeaturesHero";
import ProcessFlow from "@/components/features/ProcessFlow";
import PowerfulFeatures from "@/components/features/PowerfulFeatures";
import ActionSection from "@/components/features/ActionSection";
import DifferenceSection from "@/components/features/DifferenceSection";
import CTASection from "@/components/landing/CTASection";

export const metadata: Metadata = {
  title: "Features — CS AI",
  description:
    "Explore the full feature set of CS AI: AI-first inbox, empathetic replies, churn indicators, smart routing, summaries, and predictive insights.",
};

export default function FeaturesPage() {
  return (
    <main className="page-transition">
      <FeaturesHero />
      <ProcessFlow />
      <PowerfulFeatures />
      <ActionSection />
      <DifferenceSection />
      <CTASection />
    </main>
  );
}
