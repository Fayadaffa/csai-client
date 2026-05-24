import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { targetMarkets } from "@/data/dummyData";

export default function TargetMarketSection() {
  return (
    <SectionWrapper id="target" className="bg-slate-50">
      <Container>
        <SectionTitle
          label="Who It's For"
          title="Made for Every Layer of Your CS Team"
          description="Whether you lead strategy or handle tickets daily, CS AI fits naturally into your workflow."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {targetMarkets.map((target, i) => (
            <div
              key={i}
              className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-sm transition-all duration-200 hover:border-indigo-100 hover:bg-indigo-50"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-3xl">
                {target.avatar}
              </div>
              <h3 className="mb-1 font-semibold text-slate-800 transition-colors group-hover:text-indigo-700">
                {target.role}
              </h3>
              <span className="mb-3 rounded-full bg-indigo-50 px-3 py-0.5 text-xs font-semibold text-indigo-600 group-hover:bg-white">
                {target.segment}
              </span>
              <p className="text-sm leading-relaxed text-slate-500">{target.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
