"use client";

import { useState } from "react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { heroData } from "@/data/dummyData";

export default function HeroSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative min-h-[520px] overflow-hidden py-24 md:py-32">
      {/* ── Gradient wave background (matches design: pink → purple → blue) ── */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, #e91e8c 0%, #9c27b0 28%, #5c35cc 52%, #3949ab 72%, #1a237e 100%)",
          }}
        />
        {/* Wave blobs — approximate the flowing silk effect */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 15% 50%, rgba(255,20,147,0.55) 0%, transparent 70%), " +
              "radial-gradient(ellipse 60% 80% at 60% 30%, rgba(99,44,222,0.45) 0%, transparent 65%), " +
              "radial-gradient(ellipse 70% 50% at 85% 70%, rgba(30,60,200,0.50) 0%, transparent 65%)",
          }}
        />
        {/* Subtle noise / shimmer overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg,rgba(255,255,255,.15) 0px,transparent 2px,transparent 8px,rgba(255,255,255,.08) 10px)",
          }}
        />
      </div>

      <Container>
        <div className="flex max-w-2xl flex-col gap-7">
          {/* Headline */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            {heroData.headline}
          </h1>

          {/* Description */}
          <p className="max-w-lg text-lg leading-relaxed text-white/85">
            {heroData.description}
          </p>

          {/* Email input */}
          <div className="w-full max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={heroData.emailPlaceholder}
              className="w-full rounded-lg border-0 bg-white px-5 py-3.5 text-sm text-slate-700 placeholder-slate-400 shadow-md outline-none ring-1 ring-white/20 focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Button
              href={heroData.primaryHref}
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 border-transparent text-white shadow-lg"
            >
              {heroData.primaryCTA}
            </Button>
            <Button
              href={heroData.secondaryHref}
              size="lg"
              variant="outline"
              className="!border-white !text-white hover:!bg-white/15"
            >
              {heroData.secondaryCTA}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
