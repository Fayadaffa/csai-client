import { testimonials } from "@/data/landingData";

// Star rating
function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 12 12" className="h-3 w-3 fill-amber-400">
          <path d="M6 1l1.2 3.7H11L8.1 7l1.2 3.7L6 8.5 2.7 10.7 3.9 7 1 4.7h3.8z" />
        </svg>
      ))}
    </div>
  );
}

// Avatar initials circle
function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  const colors = ["bg-indigo-100 text-indigo-600", "bg-purple-100 text-purple-600", "bg-pink-100 text-pink-600"];
  const idx = name.charCodeAt(0) % colors.length;
  return (
    <div
      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${colors[idx]}`}
    >
      {initials}
    </div>
  );
}

// Simple mini chart SVG per card
function MiniChart({ idx }: { idx: number }) {
  const paths = [
    "M0 20 C10 18, 20 10, 30 8 C40 6, 50 12, 60 10",
    "M0 18 C10 15, 20 8, 30 6 C40 4, 50 6, 60 4",
    "M0 22 C10 20, 20 12, 30 10 C40 8, 50 14, 60 8",
  ];
  return (
    <svg viewBox="0 0 60 28" className="h-8 w-14" fill="none">
      <path d={paths[idx]} stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" />
      <path d={`${paths[idx]} L60 28 L0 28 Z`} fill="#e0e7ff" opacity="0.5" />
    </svg>
  );
}

export default function TargetMarketSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Loved by support leaders and CS teams
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Grayscale simplicity, real outcomes. Here&apos;s what teams say after switching to CS AI.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              {/* Top: avatar + name + stars */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Avatar name={t.name} />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
                <Stars />
              </div>

              {/* Message — truncated like in the design */}
              <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">
                {t.message}
              </p>

              {/* Mini chart */}
              <div className="flex justify-end">
                <MiniChart idx={i} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
