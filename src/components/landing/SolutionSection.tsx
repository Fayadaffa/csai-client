// ============================================================
// SolutionSection — "Built for measurable CS outcomes" (Image 3)
// 3 metric boxes + Resolution Velocity chart
// ============================================================

import { metrics } from "@/data/landingData";
import type { MetricItem } from "@/types/landing";

// SVG area chart approximating the wave in Image 3
function ResolutionChart() {
  // Wave path: starts mid-high → dips down → recovers → peaks → levels
  const line = "M 0,130 C 80,125 150,230 250,240 C 330,248 390,170 470,155 C 540,142 600,80 700,70 C 770,62 860,120 960,140 C 1020,152 1080,148 1180,155";
  const area = `${line} L 1180,290 L 0,290 Z`;

  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white p-6">
      <p className="mb-1 text-sm font-medium text-slate-800">Resolution Velocity</p>
      <p className="mb-6 text-xs text-slate-400">Median time (hours)</p>
      <div className="relative w-full">
        <svg viewBox="0 0 1200 300" className="w-full" preserveAspectRatio="none" style={{ height: 200 }}>
          {/* Grid lines */}
          {[60, 120, 180, 240].map((y) => (
            <line key={y} x1="0" y1={y} x2="1200" y2={y} stroke="#f1f5f9" strokeWidth="1" strokeDasharray="6 4"/>
          ))}
          {/* Area fill */}
          <path d={area} fill="#f1f5f9"/>
          {/* Line */}
          <path d={line} fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <p className="mt-1 text-right text-xs text-slate-400">Week</p>
      </div>
    </div>
  );
}

export default function SolutionSection() {
  return (
    <section id="solution" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading — center aligned */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Built for measurable CS outcomes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
            Track performance across response time, deflection, and retention signals—without extra tooling.
          </p>
        </div>

        {/* Metric boxes — 3 cols */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {metrics.map((metric: MetricItem, i: number) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white px-6 py-6">
              <p className="mb-2 text-xs text-slate-400">{metric.label}</p>
              <p className="text-5xl font-bold text-slate-900">{metric.value}</p>
              <p className="mt-1 text-sm text-slate-500">{metric.context}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <ResolutionChart />
      </div>
    </section>
  );
}
