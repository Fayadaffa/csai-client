"use client";

import { useState } from "react";
import { heroData } from "@/data/landingData";

export default function HeroSection() {
  const [email, setEmail] = useState<string>("");

  return (
    <section className="relative min-h-[460px] overflow-hidden py-20 md:py-28">
      {/* ── Gradient wave background: pink → purple → blue ── */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg,#e91e8c 0%,#9c27b0 25%,#5c35cc 50%,#3949ab 72%,#1a237e 100%)",
          }}
        />
        {/* Flowing radial blobs that approximate the silk wave in the design */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 10% 55%,rgba(255,10,140,.60) 0%,transparent 65%)," +
              "radial-gradient(ellipse 65% 90% at 55% 25%,rgba(110,50,230,.50) 0%,transparent 60%)," +
              "radial-gradient(ellipse 75% 55% at 88% 75%,rgba(25,55,200,.55) 0%,transparent 60%)",
          }}
        />
        {/* Shimmer lines */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(130deg,rgba(255,255,255,.9) 0px,transparent 1px,transparent 9px,rgba(255,255,255,.4) 10px)",
          }}
        />
      </div>

      {/* Content — left-aligned, matches design */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex max-w-[600px] flex-col gap-6">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            {heroData.headline}
          </h1>
          <p className="text-base leading-relaxed text-white/80 md:text-lg">
            {heroData.subheadline}
          </p>

          {/* Email input */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={heroData.emailPlaceholder}
            className="w-full max-w-[480px] rounded-lg bg-white px-5 py-3.5 text-sm text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-300"
          />

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={heroData.primaryHref}
              className="rounded-lg bg-indigo-600 px-7 py-3 text-sm font-medium text-white hover:bg-indigo-700"
            >
              {heroData.primaryCTA}
            </a>
            <a
              href={heroData.secondaryHref}
              className="rounded-lg border border-white px-7 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              {heroData.secondaryCTA}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
