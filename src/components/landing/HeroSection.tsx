"use client";
import { heroData } from "@/data/landingData";
import CsAiLogo from "@/components/CsAiLogo";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[520px] flex flex-col items-center justify-center py-24 px-6">
      {/* Gradient background matching design: pink → purple → blue → lavender */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, #e879a0 0%, #c084fc 20%, #a855f7 35%, #7c3aed 50%, #6366f1 65%, #818cf8 80%, #c4b5fd 100%)",
        }}
      />
      {/* Subtle light overlay for depth */}
      <div
        className="absolute inset-0 -z-10 opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(255,255,255,0.22) 0%, transparent 70%)",
        }}
      />

      {/* Headline */}
      <div className="mx-auto max-w-2xl text-center text-white">
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {heroData.headline}
        </h1>
        <p className="mt-4 text-base font-normal leading-relaxed text-white/80 sm:text-lg">
          {heroData.subheadline}
        </p>

        {/* Email input */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <input
            type="email"
            placeholder={heroData.emailPlaceholder}
            className="w-full max-w-xs rounded-xl border border-white/20 bg-white/15 px-4 py-3 text-sm text-white placeholder-white/60 backdrop-blur-sm outline-none focus:border-white/60 focus:ring-2 focus:ring-white/30 sm:w-64"
          />
        </div>

        {/* CTA Buttons */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href={heroData.primaryHref}
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700 hover:shadow-lg"
          >
            {heroData.primaryCTA}
          </a>
          <a
            href={heroData.secondaryHref}
            className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            {heroData.secondaryCTA}
          </a>
        </div>
      </div>

      {/* Decorative bottom-right logo watermark */}
      <div className="absolute bottom-6 right-8 opacity-20">
        <CsAiLogo size={28} textClassName="text-sm font-bold text-white" className="flex items-center gap-2" />
      </div>
    </section>
  );
}
