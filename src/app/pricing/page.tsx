"use client";

import type { JSX } from "react";
import { useState } from "react";

export default function PricingPage(): JSX.Element {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Starter",
      price: billingCycle === "monthly" ? "Rp 299K" : "Rp 239K",
      period: "/mo",
      billingInfo: billingCycle === "monthly" ? "Billed monthly" : "Billed annually",
      description: "For small businesses that are just starting with digital customer service.",
      features: [
        "1 User",
        "Up to 1,000 conversations / month",
        "Unified Inbox",
        "AI Draft Reply (Basic)",
        "Conversation Summary",
        "Basic Analytics",
        "Email Support",
      ],
      cta: "Try for Free",
      popular: false,
    },
    {
      name: "Growth",
      price: billingCycle === "monthly" ? "Rp 699K" : "Rp 559K",
      period: "/mo",
      billingInfo: billingCycle === "monthly" ? "Billed monthly" : "Billed annually",
      description: "For teams that want to improve speed and conversion.",
      features: [
        "5 Users",
        "Up to 10,000 conversations / month",
        "AI Draft Reply (Advanced)",
        "Intent classification",
        "Smart routing",
        "Lead scoring",
        "Advanced analytics",
      ],
      cta: "Start Now",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      billingInfo: "Custom requirements",
      description: "For large teams with enterprise and custom requirements.",
      features: [
        "Unlimited Agents",
        "All channels",
        "Full AI suite",
        "Custom integrations",
        "SLA monitoring",
        "Dedicated account manager",
        "24/7 priority support",
      ],
      cta: "Try for Free",
      popular: false,
    },
  ];

  const comparisonData = [
    { feature: "Unified Inbox", starter: "✓", growth: "✓", enterprise: "✓" },
    { feature: "AI Draft Reply", starter: "100/month", growth: "Unlimited", enterprise: "Unlimited" },
    { feature: "Intent Classification", starter: "—", growth: "✓", enterprise: "✓" },
    { feature: "Smart Routing", starter: "—", growth: "✓", enterprise: "✓" },
    { feature: "Conversation Summary", starter: "—", growth: "✓", enterprise: "✓" },
    { feature: "Lead Scoring", starter: "—", growth: "✓", enterprise: "✓" },
    { feature: "WhatsApp", starter: "✓", growth: "✓", enterprise: "✓" },
    { feature: "Instagram", starter: "✓", growth: "✓", enterprise: "✓" },
    { feature: "Email Channel", starter: "—", growth: "✓", enterprise: "✓" },
    { feature: "Custom Integration", starter: "—", growth: "—", enterprise: "✓" },
    { feature: "Analytics", starter: "Basic", growth: "Advanced", enterprise: "Custom" },
    { feature: "SLA Monitoring", starter: "—", growth: "—", enterprise: "✓" },
  ];

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer: "Yes! A 14-day free trial is available for the Growth plan. No credit card required.",
    },
    {
      question: "What happens if the agent limit is exhausted?",
      answer: "You will receive a notification. You can upgrade your plan at any time, and there will be no automatic charges.",
    },
    {
      question: "Is our data safe?",
      answer: "All data is end-to-end encrypted in accordance with international security standards.",
    },
    {
      question: "Can I change plans at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Billing will be adjusted on a prorated basis.",
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen pb-20 page-transition">
      {/* Hero Header */}
      <section className="relative z-0 overflow-hidden pt-24 pb-36 px-6 text-center text-white">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(135deg, #e879a0 0%, #c084fc 20%, #a855f7 35%, #7c3aed 50%, #6366f1 65%, #818cf8 80%, #c4b5fd 100%)",
          }}
        />
        <div className="mx-auto max-w-3xl flex flex-col items-center gap-4">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-semibold backdrop-blur-md border border-white/30 text-white">
            Price Plan
          </span>
          <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight leading-tight">
            Choose the Right Plan for Your Team
          </h1>
          <p className="text-base sm:text-lg text-white/90 font-medium">
            Start for free, upgrade anytime. No hidden fees.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-2 mb-4 flex items-center justify-center gap-1 bg-white/15 p-1 rounded-full backdrop-blur-md border border-white/20 w-max mx-auto">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-white text-[#3b3ec7] shadow-md"
                  : "text-white hover:text-white/80"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                billingCycle === "yearly"
                  ? "bg-white text-[#3b3ec7] shadow-md"
                  : "text-white hover:text-white/80"
              }`}
            >
              Yearly
              <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-extrabold uppercase tracking-wider ${
                billingCycle === "yearly"
                  ? "bg-[#3b3ec7] text-white"
                  : "bg-white text-[#3b3ec7]"
              }`}>
                Save 20%
              </span>
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/80 font-medium">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              14-day free trial
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                plan.popular
                  ? "bg-[#3b3ec7] text-white shadow-2xl scale-105 border-2 border-indigo-400 relative z-20"
                  : "bg-white text-slate-800 shadow-xl border border-slate-100 hover:shadow-2xl"
              }`}
            >
              {plan.popular && (
                <div className="self-center mb-6">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/20 border border-white/20 px-3.5 py-1 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
                    ✦ Most Popular
                  </span>
                </div>
              )}
              <h3 className={`text-xl font-bold ${plan.popular ? "text-white" : "text-slate-900"}`}>
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className={`text-4xl font-extrabold tracking-tight ${plan.popular ? "text-white" : "text-slate-900"}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`text-sm ${plan.popular ? "text-indigo-200" : "text-slate-400"}`}>
                    {plan.period}
                  </span>
                )}
              </div>
              <div className={`text-xs mt-1.5 font-medium ${plan.popular ? "text-indigo-200" : "text-slate-400"}`}>
                {plan.billingInfo}
              </div>
              <p className={`mt-3 text-xs leading-relaxed ${plan.popular ? "text-indigo-150 text-slate-200" : "text-slate-500"}`}>
                {plan.description}
              </p>

              <hr className={`my-6 border-t ${plan.popular ? "border-white/10" : "border-slate-100"}`} />

              <ul className="flex flex-col gap-3.5 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
                        plan.popular ? "bg-white/15 text-white" : "bg-blue-50 text-[#3b3ec7]"
                      }`}
                    >
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className={plan.popular ? "text-indigo-100" : "text-slate-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`mt-auto w-full py-3.5 rounded-xl font-bold text-sm shadow-sm transition duration-200 cursor-pointer ${
                  plan.popular
                    ? "bg-white text-[#3b3ec7] hover:bg-slate-100"
                    : "bg-[#3b3ec7] text-white hover:bg-[#2c2fa7]"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Compare Features Section */}
      <section className="max-w-6xl mx-auto px-6 mt-32">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold tracking-wider text-slate-400 uppercase">
            Compare Features
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
            Explore Everything
          </h2>
        </div>

        <div className="w-full overflow-hidden rounded-2xl border border-slate-100 shadow-lg bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#111322] text-white text-sm font-semibold">
                  <th className="py-4 px-6 font-medium">Filter</th>
                  <th className="py-4 px-6 text-center font-medium">Starter</th>
                  <th className="py-4 px-6 text-center font-medium text-indigo-300">
                    Growth ✦
                  </th>
                  <th className="py-4 px-6 text-center font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-700">
                {comparisonData.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-slate-100 ${
                      idx % 2 === 1 ? "bg-purple-50/30" : "bg-white"
                    }`}
                  >
                    <td className="py-4 px-6 font-medium text-slate-800">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-center font-medium">
                      {row.starter === "✓" ? (
                        <span className="inline-block text-[#3b3ec7] font-bold">✓</span>
                      ) : (
                        row.starter
                      )}
                    </td>
                    <td className="py-4 px-6 text-center font-medium text-[#3b3ec7]">
                      {row.growth === "✓" ? (
                        <span className="inline-block text-[#3b3ec7] font-bold">✓</span>
                      ) : (
                        row.growth
                      )}
                    </td>
                    <td className="py-4 px-6 text-center font-medium text-slate-700">
                      {row.enterprise === "✓" ? (
                        <span className="inline-block text-[#3b3ec7] font-bold">✓</span>
                      ) : (
                        row.enterprise
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 mt-32">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider text-slate-450 text-slate-400 uppercase">
            FAQ
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="text-base font-bold text-slate-800 leading-snug">
                  {faq.question}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ready CTA Section */}
      <section className="max-w-6xl mx-auto px-6 mt-32">
        <div className="relative z-0 rounded-3xl overflow-hidden py-16 px-8 text-center text-white shadow-xl">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(135deg, #e879a0 0%, #c084fc 20%, #a855f7 35%, #7c3aed 50%, #6366f1 65%, #818cf8 80%, #c4b5fd 100%)",
            }}
          />
          <h2 className="text-3xl font-extrabold sm:text-4xl max-w-2xl mx-auto leading-tight">
            Ready to Improve Your Customer Service Team’s Performance?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              className="bg-white hover:bg-slate-100 text-[#3b3ec7] px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition cursor-pointer"
            >
              Start Free Trial
            </button>
            <button
              type="button"
              className="bg-transparent border border-white/40 hover:bg-white/10 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition cursor-pointer"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
