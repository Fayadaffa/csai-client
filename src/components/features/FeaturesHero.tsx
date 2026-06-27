import Image from "next/image";
import { featuresHero } from "@/data/featuresData";

export default function FeaturesHero() {
  return (
    <section className="relative overflow-hidden min-h-[480px] flex items-center py-20 px-6">
      {/* Gradient background — pink → purple → blue matching landing hero */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, #e879a0 0%, #c084fc 20%, #a855f7 35%, #7c3aed 50%, #6366f1 65%, #818cf8 80%, #c4b5fd 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(255,255,255,0.22) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12">
        {/* Left — Text */}
        <div className="lg:w-1/2 text-white">
          <span className="inline-block rounded-full bg-[#eef2ff] text-[#4f46e5] px-4 py-1.5 text-xs font-semibold border border-indigo-100/30">
            {featuresHero.badge}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl whitespace-pre-line">
            {featuresHero.headline}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/90 max-w-md">
            {featuresHero.description}
          </p>
        </div>

        {/* Right — Product mockup */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <Image
              src="/illustrations/features-hero-mockup.png"
              alt="CS AI Product Dashboard"
              width={520}
              height={400}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
