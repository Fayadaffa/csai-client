import { processFlow } from "@/data/featuresData";

// Icon components for the process flow steps
function StepIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    message: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <rect x="4" y="8" width="32" height="22" rx="4" fill="#e0e7ff" stroke="#818cf8" strokeWidth="1.5" />
        <path d="M4 14 L20 24 L36 14" stroke="#6366f1" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    inbox: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <rect x="6" y="6" width="28" height="28" rx="4" fill="#e0e7ff" stroke="#818cf8" strokeWidth="1.5" />
        <path d="M6 24 L14 24 L16 28 L24 28 L26 24 L34 24" stroke="#6366f1" strokeWidth="1.5" fill="none" />
        <rect x="12" y="12" width="16" height="2.5" rx="1.25" fill="#a5b4fc" />
        <rect x="12" y="17" width="12" height="2.5" rx="1.25" fill="#c7d2fe" />
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <circle cx="20" cy="20" r="15" fill="#e0e7ff" stroke="#818cf8" strokeWidth="1.5" />
        <path d="M20 8 L22 16 L28 12 L24 18 L32 20 L24 22 L28 28 L22 24 L20 32 L18 24 L12 28 L16 22 L8 20 L16 18 L12 12 L18 16 Z" fill="#6366f1" opacity="0.8" />
      </svg>
    ),
    meeting: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <rect x="6" y="8" width="28" height="26" rx="4" fill="#e0e7ff" stroke="#818cf8" strokeWidth="1.5" />
        <rect x="6" y="8" width="28" height="8" rx="4" fill="#a5b4fc" />
        <circle cx="15" cy="24" r="2" fill="#6366f1" />
        <circle cx="20" cy="24" r="2" fill="#6366f1" />
        <circle cx="25" cy="24" r="2" fill="#c7d2fe" />
        <rect x="12" y="6" width="2" height="5" rx="1" fill="#818cf8" />
        <rect x="26" y="6" width="2" height="5" rx="1" fill="#818cf8" />
      </svg>
    ),
    workspace: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <rect x="4" y="6" width="32" height="22" rx="3" fill="#e0e7ff" stroke="#818cf8" strokeWidth="1.5" />
        <rect x="8" y="10" width="10" height="14" rx="2" fill="#a5b4fc" opacity="0.5" />
        <rect x="21" y="10" width="12" height="6" rx="1.5" fill="#6366f1" opacity="0.3" />
        <rect x="21" y="18" width="12" height="6" rx="1.5" fill="#c7d2fe" />
        <rect x="14" y="30" width="12" height="4" rx="2" fill="#818cf8" opacity="0.5" />
      </svg>
    ),
    report: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <rect x="6" y="4" width="28" height="32" rx="4" fill="#e0e7ff" stroke="#818cf8" strokeWidth="1.5" />
        <rect x="11" y="22" width="5" height="8" rx="1" fill="#6366f1" />
        <rect x="18" y="18" width="5" height="12" rx="1" fill="#818cf8" />
        <rect x="25" y="14" width="5" height="16" rx="1" fill="#a5b4fc" />
        <rect x="11" y="9" width="18" height="2.5" rx="1.25" fill="#c7d2fe" />
      </svg>
    ),
  };
  return <>{icons[icon] || null}</>;
}

export default function ProcessFlow() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">
            {processFlow.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            {processFlow.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-500">
            {processFlow.description}
          </p>
        </div>

        {/* Process steps — horizontal flow */}
        <div className="mt-14 relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-200 hidden lg:block" />

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {processFlow.steps.map((step, i) => (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                {/* Icon circle */}
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-white border-2 border-indigo-100 shadow-sm transition hover:shadow-md hover:border-indigo-300">
                  <StepIcon icon={step.icon} />
                </div>
                {/* Arrow between steps (desktop only) */}
                {i < processFlow.steps.length - 1 && (
                  <div className="absolute top-8 -right-4 hidden lg:block">
                    <svg viewBox="0 0 16 16" className="h-4 w-4 text-indigo-300">
                      <path d="M4 8 L12 8 M9 5 L12 8 L9 11" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
                {/* Label */}
                <h3 className="mt-3 text-sm font-semibold text-slate-800">{step.title}</h3>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
