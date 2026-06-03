"use client";
import { metrics } from "@/data/landingData";

// Simple wave chart SVG
function ResolutionChart() {
  return (
    <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="mb-1 text-xs font-medium text-slate-400">Resolution Velocity</div>
      <div className="mb-4 text-xs text-slate-400">Median time (hours)</div>
      <svg viewBox="0 0 700 120" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Gradient fill */}
        <defs>
          <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Area fill */}
        <path
          d="M0 60 C50 40, 100 80, 150 70 C200 60, 250 30, 300 50 C350 70, 400 90, 450 75 C500 60, 550 40, 600 55 C630 63, 660 68, 700 65 L700 120 L0 120 Z"
          fill="url(#waveGrad)"
        />
        {/* Wave line */}
        <path
          d="M0 60 C50 40, 100 80, 150 70 C200 60, 250 30, 300 50 C350 70, 400 90, 450 75 C500 60, 550 40, 600 55 C630 63, 660 68, 700 65"
          stroke="#818cf8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Week label */}
        <text x="690" y="115" textAnchor="end" fill="#94a3b8" fontSize="10">
          Week
        </text>
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1={i * 175}
            y1="0"
            x2={i * 175}
            y2="110"
            stroke="#f1f5f9"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}

export default function ProblemSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Built for measurable CS outcomes
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Track performance across response time, deflection, and retention signals—without extra tooling.
          </p>
        </div>

        {/* Metrics row */}
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-1">
              <p className="text-xs font-medium text-slate-400">{metric.label}</p>
              <p className="text-4xl font-bold text-slate-900 sm:text-5xl">
                {metric.value}
              </p>
              <p className="text-xs text-slate-400">{metric.context}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <ResolutionChart />
      </div>
    </section>
  );
}
