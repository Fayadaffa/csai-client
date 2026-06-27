"use client";

import { useState } from "react";
import Image from "next/image";

export default function CTASection() {
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
      `  Name: ${form.name}\n` +
      `  Email: ${form.email}\n\n` +
      `Message/Questions:\n${form.message || "No additional message."}`
    );

    window.location.href = `mailto:${destinationEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="cta" className="bg-white py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6 lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/illustrations/cta-walkthrough.png"
                alt="CS AI walkthrough illustration"
                width={320}
                height={260}
                className="object-contain"
                priority={false}
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Get a personalized CS AI walkthrough
              </h2>
              <p className="mt-3 text-base text-slate-500">
                Tell us about your team. We&apos;ll recommend the best workflow setup and integrations.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm lg:w-1/2">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700">
                  Work email
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                />
                <p className="text-xs text-slate-400">We&apos;ll send a scheduling link.</p>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea
                  placeholder="Questions..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <button
                type="button"
                onClick={handleSendMail}
                className="mt-1 w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
              >
                Send Mail
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
