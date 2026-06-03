import { csAiDifference } from "@/data/featuresData";

// Icon components for the difference section
function DiffIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    context: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <circle cx="24" cy="24" r="20" fill="#eef2ff" />
        <circle cx="24" cy="24" r="8" fill="#818cf8" opacity="0.4" />
        <circle cx="24" cy="24" r="3" fill="#6366f1" />
        {/* Radar rings */}
        <circle cx="24" cy="24" r="13" stroke="#a5b4fc" strokeWidth="1" fill="none" strokeDasharray="3 2" />
        <circle cx="24" cy="24" r="18" stroke="#c7d2fe" strokeWidth="1" fill="none" strokeDasharray="3 2" />
        {/* Dots */}
        <circle cx="14" cy="16" r="2" fill="#6366f1" opacity="0.6" />
        <circle cx="35" cy="20" r="2" fill="#818cf8" opacity="0.6" />
        <circle cx="18" cy="34" r="2" fill="#a5b4fc" opacity="0.6" />
      </svg>
    ),
    human: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <circle cx="24" cy="24" r="20" fill="#eef2ff" />
        {/* Person */}
        <circle cx="17" cy="18" r="5" fill="#a5b4fc" />
        <path d="M9 34 Q9 27 17 27 Q25 27 25 34" fill="#a5b4fc" opacity="0.6" />
        {/* AI star */}
        <path d="M33 14 L34.5 19 L38 16 L36 20 L40 22 L36 23 L37 28 L33 25 L29 28 L30 23 L26 22 L30 20 L28 16 L31.5 19 Z" fill="#6366f1" opacity="0.7" />
        {/* Handshake line */}
        <path d="M22 24 L28 22" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 1.5" />
      </svg>
    ),
    data: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <circle cx="24" cy="24" r="20" fill="#eef2ff" />
        {/* Bar chart */}
        <rect x="12" y="24" width="5" height="12" rx="1.5" fill="#c7d2fe" />
        <rect x="19" y="18" width="5" height="18" rx="1.5" fill="#818cf8" />
        <rect x="26" y="14" width="5" height="22" rx="1.5" fill="#6366f1" />
        <rect x="33" y="20" width="5" height="16" rx="1.5" fill="#a5b4fc" />
        {/* Trend line */}
        <path d="M14 22 L21 16 L28 12 L35 18" stroke="#6366f1" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Sparkle */}
        <circle cx="35" cy="12" r="2" fill="#6366f1" opacity="0.5" />
      </svg>
    ),
    integration: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <circle cx="24" cy="24" r="20" fill="#eef2ff" />
        {/* Puzzle pieces / connection */}
        <rect x="10" y="16" width="12" height="12" rx="3" fill="#a5b4fc" />
        <rect x="26" y="20" width="12" height="12" rx="3" fill="#6366f1" opacity="0.7" />
        {/* Connection bridge */}
        <rect x="20" y="22" width="8" height="4" rx="2" fill="#818cf8" />
        {/* Small dots for APIs */}
        <circle cx="14" cy="36" r="2" fill="#c7d2fe" />
        <circle cx="20" cy="38" r="2" fill="#a5b4fc" />
        <circle cx="26" cy="36" r="2" fill="#818cf8" opacity="0.5" />
        <circle cx="32" cy="38" r="2" fill="#6366f1" opacity="0.4" />
      </svg>
    ),
  };
  return <>{icons[icon] || null}</>;
}

export default function DifferenceSection() {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {csAiDifference.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-500">
            {csAiDifference.description}
          </p>
        </div>

        {/* 4-column grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {csAiDifference.items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4">
                <DiffIcon icon={item.icon} />
              </div>
              <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
