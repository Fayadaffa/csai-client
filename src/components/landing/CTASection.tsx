"use client";

// ============================================================
// CTASection — Images 5-6:
// Ilustrasi + heading kiri, form 2-kolom, buttons, footer.
// ============================================================

import { useState } from "react";
import type { ChangeEvent } from "react";
import { ctaFormFields } from "@/data/landingData";

type FormState = { email: string; size: string; goal: string; usecase: string };

// Person walking illustration (blue tree + person with briefcase, approximate design)
function WalkthroughIllustration() {
  return (
    <svg viewBox="0 0 240 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[200px]">
      {/* Tree */}
      <ellipse cx="72" cy="80" rx="40" ry="50" fill="#6366f1"/>
      <rect x="68" y="120" width="8" height="30" fill="#4f46e5"/>
      {/* Red berry */}
      <circle cx="50" cy="50" r="10" fill="#ef4444"/>
      {/* Person */}
      <circle cx="155" cy="80" r="22" fill="#f8d7c4"/>
      <rect x="133" y="110" width="44" height="55" rx="6" fill="#1e293b"/>
      {/* Arm + Briefcase */}
      <rect x="175" y="120" width="28" height="20" rx="4" fill="#374151"/>
      <rect x="178" y="116" width="8" height="6" rx="2" fill="#374151"/>
      {/* Leg left */}
      <rect x="137" y="160" width="14" height="35" rx="5" fill="#1e293b"/>
      <rect x="131" y="192" width="20" height="8" rx="4" fill="#111827"/>
      {/* Leg right */}
      <rect x="157" y="160" width="14" height="35" rx="5" fill="#1e293b"/>
      <rect x="157" y="192" width="20" height="8" rx="4" fill="#111827"/>
      {/* Scattered papers */}
      <rect x="95" y="170" width="30" height="22" rx="3" fill="white" stroke="#e2e8f0" strokeWidth="1" transform="rotate(-15 95 170)"/>
      <rect x="130" y="185" width="25" height="18" rx="3" fill="#6366f1" opacity=".3" transform="rotate(8 130 185)"/>
    </svg>
  );
}

export default function CTASection() {
  const [form, setForm] = useState<FormState>({ email: "", size: "", goal: "", usecase: "" });

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  function handleSubmit() {
    console.log("Demo requested:", form);
  }

  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400";

  return (
    <>
      {/* ── CTA Section ── */}
      <section id="cta" className="border-t border-slate-100 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          {/* Top row: illustration + heading */}
          <div className="mb-12 flex flex-col items-start gap-8 md:flex-row md:items-center">
            <div className="shrink-0">
              <WalkthroughIllustration />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Get a personalized CS AI walkthrough
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-500">
                Tell us about your team. We'll recommend the best workflow setup and integrations.
              </p>
            </div>
          </div>

          {/* 2-column form */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
            {/* Work email */}
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                Work email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder={ctaFormFields[0].placeholder}
                className={inputClass}
              />
              <p className="mt-1.5 text-xs text-slate-400">{ctaFormFields[0].helper}</p>
            </div>

            {/* Team size */}
            <div>
              <label htmlFor="size" className="mb-1.5 block text-sm font-medium text-slate-700">
                Team size
              </label>
              <select
                id="size"
                value={form.size}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="" disabled>Select your current support volume.</option>
                {["Just me", "2–10 people", "11–50 people", "51–200 people", "200+ people"].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              <p className="mt-1.5 text-xs text-slate-400">{ctaFormFields[1].helper}</p>
            </div>

            {/* Primary goal */}
            <div>
              <label htmlFor="goal" className="mb-1.5 block text-sm font-medium text-slate-700">
                Primary goal
              </label>
              <select
                id="goal"
                value={form.goal}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="" disabled>Choose what you want to improve first.</option>
                {["Reduce ticket handle time", "Improve CSAT", "Detect churn risk", "Scale without hiring", "Other"].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              <p className="mt-1.5 text-xs text-slate-400">{ctaFormFields[2].helper}</p>
            </div>

            {/* Use case */}
            <div>
              <label htmlFor="usecase" className="mb-1.5 block text-sm font-medium text-slate-700">
                Use case
              </label>
              <select
                id="usecase"
                value={form.usecase}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="" disabled>Optional—helps us tailor the demo.</option>
                {["B2B SaaS support", "Customer success management", "E-commerce support", "Internal IT helpdesk", "Other"].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              <p className="mt-1.5 text-xs text-slate-400">{ctaFormFields[3].helper}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={handleSubmit}
              className="rounded-lg bg-indigo-600 px-8 py-3 text-sm font-medium text-white hover:bg-indigo-700"
            >
              Request Demo
            </button>
            <a
              href="#pricing"
              className="rounded-lg border border-slate-300 px-8 py-3 text-sm font-medium text-slate-700 hover:border-slate-400 hover:bg-slate-50"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-100 bg-white py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 px-6 text-sm text-slate-500">
          <span>© CS AI — All rights reserved</span>
          {["Security", "Privacy", "Terms", "Contact", "Status"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-slate-800">
              {link}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
