// ============================================================
// ProblemSection — "Everything your CS team needs"
// Sesuai Image 1: heading besar kiri, CS AI logo kanan, 2 button.
// ============================================================

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Top row: heading left + CS AI logo right */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Left */}
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Everything your CS team needs
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              From inbox automation to proactive insights—powered by one model, one workflow.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#features"
                className="rounded-lg bg-indigo-600 px-7 py-3 text-sm font-medium text-white hover:bg-indigo-700"
              >
                Explore features
              </a>
              <a
                href="#cta"
                className="rounded-lg border border-slate-300 px-7 py-3 text-sm font-medium text-slate-700 hover:border-slate-400 hover:bg-slate-50"
              >
                Book a demo
              </a>
            </div>
          </div>

          {/* Right — CS AI logo (matches design: icon + text, right side) */}
          <div className="hidden shrink-0 items-center gap-2.5 md:flex">
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="15" stroke="#5c6bc0" strokeWidth="2"/>
              <circle cx="16" cy="16" r="5" fill="#5c6bc0"/>
              <line x1="3" y1="3" x2="29" y2="29" stroke="#5c6bc0" strokeWidth="2" strokeLinecap="round"/>
              <ellipse cx="16" cy="16" rx="13" ry="6" stroke="#5c6bc0" strokeWidth="1.5" fill="none"/>
            </svg>
            <span className="text-2xl font-bold text-slate-800">CS AI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
