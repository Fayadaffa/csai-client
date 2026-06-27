import Image from "next/image";
import { features } from "@/data/landingData";
import { solutionOverview } from "@/data/dummyData";
import CsAiLogo from "@/components/CsAiLogo";

// Map feature index to its PNG illustration
const featureImages = [
  { src: "/illustrations/auto-triage-v3.png",    alt: "Auto-Triage illustration" },
  { src: "/illustrations/reply-drafts-v3.png",   alt: "Reply Drafts illustration" },
  { src: "/illustrations/churn-signals-v3.png",  alt: "Churn Signals illustration" },
  { src: "/illustrations/ai-workflows-v3.png",   alt: "AI Workflows illustration" },
  { src: "/illustrations/ai-summary-v3.png",     alt: "AI Summary illustration" },
  { src: "/illustrations/team-analytics-v3.png", alt: "Team Analytics illustration" },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              {solutionOverview.heading}
            </h2>
            <p className="mt-3 max-w-lg text-base text-slate-500">
              {solutionOverview.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={solutionOverview.primaryHref}
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                {solutionOverview.primaryCTA}
              </a>
              <a
                href={solutionOverview.secondaryHref}
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                {solutionOverview.secondaryCTA}
              </a>
            </div>
          </div>
          {/* Logo watermark */}
          <div className="flex-shrink-0 self-start opacity-70">
            <CsAiLogo size={32} textClassName="text-base font-bold text-slate-700" />
          </div>
        </div>

        {/* Feature grid: 3 columns */}
        <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div key={feature.label} className="flex flex-col gap-3">
              {/* Illustration — PNG from /public/illustrations */}
              <div className="relative h-[160px] w-full overflow-hidden rounded-2xl bg-slate-50 flex items-center justify-center p-4">
                <Image
                  src={featureImages[i].src}
                  alt={featureImages[i].alt}
                  width={280}
                  height={200}
                  className="object-contain h-full w-auto"
                  priority={i < 3}
                />
              </div>
              {/* Label & description */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {feature.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-800">
                  {feature.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
