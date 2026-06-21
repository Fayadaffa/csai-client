"use client";

import type { JSX } from "react";
import { useState } from "react";
import Image from "next/image";

export default function AboutPage(): JSX.Element {
  const [form, setForm] = useState({ email: "", name: "", message: "" });

  const handleSendMail = () => {
    if (!form.email || !form.name) {
      alert("Please fill in your Name and Email first.");
      return;
    }

    const destinationEmail = "support@csai.com";
    const subject = encodeURIComponent("Request CS AI Walkthrough");
    const body = encodeURIComponent(
      `Hello CS AI Team,\n\n` +
      `I am interested in a CS AI product walkthrough. Here are my details:\n` +
      `- Name: ${form.name}\n` +
      `- Email: ${form.email}\n\n` +
      `Message/Questions:\n${form.message || "No additional message."}`
    );

    window.location.href = `mailto:${destinationEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="bg-white min-h-screen page-transition">
      {/* Hero Header Section */}
      <section className="relative z-0 overflow-hidden pt-20 pb-24 px-6 text-white">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(135deg, #e879a0 0%, #c084fc 20%, #a855f7 35%, #7c3aed 50%, #6366f1 65%, #818cf8 80%, #c4b5fd 100%)",
          }}
        />
        <div className="mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left - Text content */}
          <div className="lg:col-span-7 flex flex-col gap-6 items-start">
            <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-semibold backdrop-blur-md border border-white/30 text-white">
              About Us
            </span>
            <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight leading-tight max-w-xl">
              AI-Powered Customer Service, Made Simple
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-lg">
              CS AI helps businesses manage conversations, automate responses, and delight customers—faster and smarter.
            </p>
          </div>

          {/* Right - Product Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-2 max-w-md md:max-w-none">
              <Image
                src="/illustrations/features-hero-mockup.png"
                alt="CS AI Dashboard"
                width={520}
                height={380}
                className="rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-[#eef2ff] py-20 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text content */}
          <div className="flex flex-col gap-6 items-start">
            {/* Icon Group */}
            <div className="bg-white text-[#3b3ec7] p-4 rounded-2xl flex items-center justify-center shadow-sm">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
              Who We Are
            </h2>
            <p className="text-base text-slate-700 leading-relaxed max-w-lg">
              We are a team of builders, designers, and problem solvers passionate about transforming customer communication. Our mission is to empower support and sales teams with AI tools that are easy to use and truly helpful.
            </p>
          </div>

          {/* Right - Team meeting illustration */}
          <div className="flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/illustrations/who-we-are.png"
                alt="CS AI Team Meeting Illustration"
                width={520}
                height={520}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Walkthrough Form Section */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          {/* Header Row: Illustration + Title */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="shrink-0">
              <Image
                src="/illustrations/cta-walkthrough.png"
                alt="Walkthrough Illustration"
                width={160}
                height={130}
                className="object-contain"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Get a personalized CS AI walkthrough
              </h2>
              <p className="mt-3 text-base text-slate-500 max-w-xl">
                Tell us about your team. We&apos;ll recommend the best workflow setup and integrations.
              </p>
            </div>
          </div>

          {/* Stacked Fields Form */}
          <form className="flex flex-col gap-6 max-w-2xl mx-auto">
            {/* Work email field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-slate-800">
                Work email
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-colors"
              />
              <p className="text-xs text-slate-400">
                We&apos;ll send a scheduling link.
              </p>
            </div>

            {/* Name field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-slate-800">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-colors"
              />
            </div>

            {/* Messages field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-slate-800">
                Messages
              </label>
              <textarea
                placeholder="Messages"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-colors resize-none"
              />
            </div>

            {/* Centered Send Mail button */}
            <div className="flex justify-center mt-4">
              <button
                type="button"
                onClick={handleSendMail}
                className="px-10 py-3.5 bg-[#4f46e5] hover:bg-[#3f37c9] text-white font-bold text-sm rounded-xl shadow-md transition duration-200 cursor-pointer text-center"
              >
                Send Mail
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
