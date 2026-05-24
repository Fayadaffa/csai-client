// ============================================================
// FeaturesSection — 6 feature cards 2×3 grid (Image 2)
// ============================================================

import FeatureCard from "@/components/landing/FeatureCard";
import { features } from "@/data/landingData";
import type { FeatureItem } from "@/types/landing";

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-0 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature: FeatureItem, i: number) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
