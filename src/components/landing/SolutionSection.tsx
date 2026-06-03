import Image from "next/image";
import { trustItems } from "@/data/landingData";

// Map trust items to their PNG illustrations
const trustImages = [
  { src: "/illustrations/trust-citations.png",    alt: "Citations & AI grounded answers" },
  { src: "/illustrations/trust-privacy.png",      alt: "Privacy-first data handling" },
  { src: "/illustrations/trust-workflow.png",      alt: "Workflow approvals" },
  { src: "/illustrations/trust-agent-assist.png",  alt: "Agent assist, not replacement" },
];

export default function SolutionSection() {
  return (
    <section id="trust" className="bg-slate-50 py-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Designed for trust and control
          </h2>
          <p className="mt-3 text-base text-slate-500">
            CS AI gives you guardrails, visibility, and secure workflows—so teams can move faster safely.
          </p>
        </div>

        {/* 2x2 grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {trustItems.map((item, i) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              {/* Illustration + Title */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 overflow-hidden rounded-xl bg-slate-50 p-2">
                  <Image
                    src={trustImages[i].src}
                    alt={trustImages[i].alt}
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
                    {item.category}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>
              </div>
              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-500">
                {item.description}
              </p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
