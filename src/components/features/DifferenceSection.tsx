import { csAiDifference } from "@/data/featuresData";

// Icon components for the difference section
function DiffIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    context: (
      <svg viewBox="0 0 24 24" className="w-8.5 h-8.5 text-indigo-600 transition-all duration-300 group-hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" fill="#EEF2FF" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        <circle cx="12" cy="12" r="5.5" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 1.5" />
        <circle cx="17" cy="8" r="1" fill="currentColor" />
        <circle cx="7" cy="15" r="1" fill="currentColor" />
      </svg>
    ),
    human: (
      <svg viewBox="0 0 24 24" className="w-8.5 h-8.5 text-indigo-600 transition-all duration-300 group-hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" fill="#EEF2FF" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="10" cy="9.5" r="2.5" fill="currentColor" />
        <path d="M5 17c0-2 2-3.5 5-3.5s5 1.5 5 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 9.5l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8z" fill="currentColor" />
        <path d="M12.5 12h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1.5 1.5" />
      </svg>
    ),
    data: (
      <svg viewBox="0 0 24 24" className="w-8.5 h-8.5 text-indigo-600 transition-all duration-300 group-hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" fill="#EEF2FF" stroke="currentColor" strokeWidth="1.8" />
        <rect x="7" y="12" width="2" height="5" rx="0.5" fill="currentColor" />
        <rect x="10.5" y="9.5" width="2" height="7.5" rx="0.5" fill="currentColor" />
        <rect x="14" y="8" width="2" height="9" rx="0.5" fill="currentColor" />
        <path d="M8 11.5l3.5-2.5 3.5-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="15" cy="7.5" r="1" fill="currentColor" />
      </svg>
    ),
    integration: (
      <svg viewBox="0 0 24 24" className="w-8.5 h-8.5 text-indigo-600 transition-all duration-300 group-hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" fill="#EEF2FF" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8.5 9.5l7-1M8.5 9.5l3.5 6M15.5 8.5l-3.5 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="8.5" cy="9.5" r="2" fill="currentColor" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="15.5" cy="8.5" r="2" fill="currentColor" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="12" cy="15.5" r="2" fill="currentColor" stroke="currentColor" strokeWidth="0.8" />
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
              className="group flex flex-col items-center text-center rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md"
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
