// ============================================================
// TargetMarketSection — Image 4 + Image 5
// Part 1: "Designed for trust and control" — 2×2 trust cards
// Part 2: "Loved by support leaders and CS teams" — testimonials
// ============================================================

import { trustItems, testimonials } from "@/data/landingData";
import type { TrustItem, TestimonialItem } from "@/types/landing";

// Small SVG illustrations for trust cards (simplified)
const trustIcons: Record<number, JSX.Element> = {
  0: ( // Citations
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <rect x="8" y="6" width="34" height="44" rx="4" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5"/>
      <line x1="15" y1="20" x2="35" y2="20" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="15" y1="28" x2="32" y2="28" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="44" cy="16" r="12" fill="#6366f1"/>
      <circle cx="44" cy="11" r="4" fill="white"/>
      <rect x="41" y="16" width="6" height="8" rx="1" fill="white"/>
    </svg>
  ),
  1: ( // Privacy
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <circle cx="22" cy="24" r="12" fill="#e2e8f0"/>
      <circle cx="22" cy="18" r="5" fill="#94a3b8"/>
      <ellipse cx="22" cy="30" rx="10" ry="7" fill="#94a3b8"/>
      <circle cx="40" cy="30" r="12" fill="#e2e8f0"/>
      <circle cx="40" cy="24" r="5" fill="#94a3b8"/>
      <ellipse cx="40" cy="36" rx="10" ry="7" fill="#94a3b8"/>
    </svg>
  ),
  2: ( // Workflow
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <rect x="4" y="6" width="36" height="44" rx="4" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5"/>
      <rect x="12" y="16" width="20" height="14" rx="2" fill="#6366f1"/>
      <circle cx="48" cy="20" r="10" fill="#e2e8f0"/>
      <circle cx="48" cy="15" r="4" fill="#94a3b8"/>
      <ellipse cx="48" cy="25" rx="8" ry="5" fill="#94a3b8"/>
      <line x1="14" y1="38" x2="30" y2="38" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="14" y1="44" x2="26" y2="44" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  3: ( // Agent assist
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <rect x="4" y="10" width="32" height="42" rx="4" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5"/>
      <rect x="10" y="18" width="20" height="6" rx="2" fill="#6366f1" opacity=".4"/>
      <rect x="10" y="28" width="20" height="6" rx="2" fill="#6366f1" opacity=".4"/>
      <rect x="10" y="38" width="14" height="6" rx="2" fill="#6366f1" opacity=".4"/>
      <circle cx="46" cy="25" r="12" fill="#e2e8f0"/>
      <circle cx="46" cy="18" r="5" fill="#94a3b8"/>
      <ellipse cx="46" cy="32" rx="10" ry="6" fill="#94a3b8"/>
    </svg>
  ),
};

function TrustCard({ item, index }: { item: TrustItem; index: number }) {
  return (
    <div className="flex gap-5 rounded-xl border border-slate-200 bg-white p-6">
      {/* Icon */}
      <div className="shrink-0">{trustIcons[index]}</div>

      {/* Text */}
      <div className="min-w-0">
        <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
        <p className="mt-0.5 text-xs text-slate-400">{item.category}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-slate-200 px-2.5 py-0.5 text-xs text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#f59e0b">
          <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z"/>
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ item }: { item: TestimonialItem }) {
  const initials = item.name.split(" ").map((n) => n[0]).join("");
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-slate-100 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-300 text-xs font-semibold text-slate-600">
            {initials}
          </div>
          <p className="text-sm font-medium text-slate-800">{item.name}</p>
        </div>
        <StarRating />
      </div>
      <p className="text-sm leading-relaxed text-slate-600">{item.message}</p>
      <div className="flex gap-2 text-base">
        <span>✨</span>
        <span>📈</span>
      </div>
    </div>
  );
}

export default function TargetMarketSection() {
  return (
    <>
      {/* ── Part 1: Trust & Control ── */}
      <section id="trust" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Designed for trust and control
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
              CS AI gives you guardrails, visibility, and secure workflows—so teams can move faster safely.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {trustItems.map((item: TrustItem, i: number) => (
              <TrustCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Part 2: Testimonials ── */}
      <section id="testimonials" className="bg-white py-10 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Loved by support leaders and CS teams
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-500">
              Grayscale simplicity, real outcomes. Here's what teams say after switching to CS AI.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((item: TestimonialItem, i: number) => (
              <TestimonialCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
