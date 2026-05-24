import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { solutions, solutionOverview } from "@/data/dummyData";

// Inline CS AI logo (matches top-right logo visible in design)
function CsAiLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 2a10 10 0 0 1 10 10"/>
          <path d="M12 22A10 10 0 0 1 2 12"/>
          <path d="m4.93 4.93 14.14 14.14"/>
        </svg>
      </div>
      <span className="text-2xl font-bold text-slate-800">CS AI</span>
    </div>
  );
}

export default function SolutionSection() {
  return (
    <SectionWrapper id="solution" className="bg-white">
      <Container>
        {/* Top row: heading + logo (matches design layout) */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              {solutionOverview.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-500">
              {solutionOverview.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={solutionOverview.primaryHref} size="lg">
                {solutionOverview.primaryCTA}
              </Button>
              <Button href={solutionOverview.secondaryHref} size="lg" variant="outline">
                {solutionOverview.secondaryCTA}
              </Button>
            </div>
          </div>
          {/* CS AI logo — top right as seen in design */}
          <div className="hidden md:block">
            <CsAiLogo />
          </div>
        </div>

        {/* Solution points */}
        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {solutions.map((item, i) => (
            <li key={i} className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <polyline points="2,6.5 5,9.5 11,3.5" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-800">{item.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-slate-500">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </SectionWrapper>
  );
}
