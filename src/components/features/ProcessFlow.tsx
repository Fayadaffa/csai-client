import { processFlow } from "@/data/featuresData";

function StepIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "message":
      return (
        <svg viewBox="0 0 24 24" className="w-8.5 h-8.5 text-indigo-600 transition-all duration-300 group-hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="5" width="18" height="14" rx="3.5" fill="#EEF2FF" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 7l9 5.5 9-5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "inbox":
      return (
        <svg viewBox="0 0 24 24" className="w-8.5 h-8.5 text-indigo-600 transition-all duration-300 group-hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6h16v7H4V6z" fill="#EEF2FF" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 12h4.5c.5 0 .9.3 1.1.7l.8 1.6c.2.4.6.7 1.1.7h3c.5 0 .9-.3 1.1-.7l.8-1.6c.2-.4.6-.7 1.1-.7H21v6.5a2 2 0 01-2 2H5a2 2 0 01-2-2V12z" fill="#EEF2FF" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 24 24" className="w-8.5 h-8.5 text-indigo-600 transition-all duration-300 group-hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" fill="#EEF2FF" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 6.5v11M6.5 12h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-60" />
          <path d="M12 8.5l1.2 2.3 2.3 1.2-2.3 1.2-1.2 2.3-1.2-2.3-2.3-1.2 2.3-1.2z" fill="currentColor" />
        </svg>
      );
    case "meeting":
      return (
        <svg viewBox="0 0 24 24" className="w-8.5 h-8.5 text-indigo-600 transition-all duration-300 group-hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4.5" width="18" height="15" rx="3.5" fill="#EEF2FF" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 9.5h18" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 2v3M16 2v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <rect x="6" y="12.5" width="4" height="4" rx="1" fill="currentColor" />
          <rect x="14" y="12.5" width="4" height="4" rx="1" fill="currentColor" className="opacity-40" />
        </svg>
      );
    case "workspace":
      return (
        <svg viewBox="0 0 24 24" className="w-8.5 h-8.5 text-indigo-600 transition-all duration-300 group-hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4.5" width="18" height="15" rx="3" fill="#EEF2FF" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 8.5h18" stroke="currentColor" strokeWidth="1.8" />
          <rect x="6" y="11.5" width="4" height="5" rx="0.5" fill="currentColor" opacity="0.5" />
          <rect x="12" y="11.5" width="6" height="2" rx="0.5" fill="currentColor" />
          <rect x="12" y="14.5" width="4" height="2" rx="0.5" fill="currentColor" opacity="0.5" />
        </svg>
      );
    case "report":
      return (
        <svg viewBox="0 0 24 24" className="w-8.5 h-8.5 text-indigo-600 transition-all duration-300 group-hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 3h11l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V3z" fill="#EEF2FF" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M15 3v5h5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <rect x="7" y="14" width="2.2" height="5" rx="0.5" fill="currentColor" />
          <rect x="10.7" y="11" width="2.2" height="8" rx="0.5" fill="currentColor" />
          <rect x="14.4" y="15" width="2.2" height="4" rx="0.5" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ProcessFlow() {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
            {processFlow.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            {processFlow.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-slate-500 leading-relaxed">
            {processFlow.description}
          </p>
        </div>

        <div className="hidden lg:block relative mt-16 px-4">
          <div className="absolute top-10 left-[8.33%] right-[8.33%] h-[1.5px] bg-indigo-50/70 z-0 hidden lg:block pointer-events-none">
            {[10, 30, 50, 70, 90].map((percent, idx) => (
              <div
                key={idx}
                style={{ left: `${percent}%` }}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-1.5 flex items-center justify-center"
              >
                <svg className="w-3.5 h-3.5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-6 gap-x-6 xl:gap-x-10 relative z-10">
            {processFlow.steps.map((step) => (
              <div key={step.title} className="relative flex flex-col items-center text-center group">
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-[20px] bg-white border border-indigo-50 shadow-[0_8px_24px_rgba(99,102,241,0.03)] transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_12px_30px_rgba(99,102,241,0.08)]">
                  <StepIcon icon={step.icon} />
                </div>

                <h3 className="mt-4 text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[11px] text-slate-400 font-medium leading-relaxed max-w-[140px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="block lg:hidden max-w-md mx-auto mt-12 px-4">
          <div className="flex flex-col">
            {processFlow.steps.map((step, i) => (
              <div key={step.title} className="flex gap-5 pb-8 last:pb-0 relative group">
                <div className="flex flex-col items-center flex-shrink-0 relative">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-[16px] bg-white border border-indigo-50 shadow-[0_6px_18px_rgba(99,102,241,0.02)] transition-all duration-300 group-hover:scale-105 group-hover:border-indigo-200 group-hover:shadow-[0_8px_24px_rgba(99,102,241,0.06)]">
                    <StepIcon icon={step.icon} />
                  </div>
                  {i < 5 && (
                    <div className="absolute top-16 bottom-0 left-1/2 -translate-x-1/2 w-[1.5px] bg-indigo-50 group-hover:bg-indigo-300 transition-colors duration-300" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400 font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
