import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { targetMarkets } from "@/data/dummyData";

export default function TargetMarketSection() {
  return (
    <SectionWrapper id="target" className="bg-white">
      <Container>
        <SectionTitle
          label="Target User"
          title="Untuk Siapa Produk Ini?"
          description="Persona user akan diperbarui berdasarkan riset dan brief produk di Sprint 2."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {targetMarkets.map((target, i) => (
            <div key={i} className="flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50 p-7 text-center shadow-sm">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl">
                {target.avatar}
              </div>
              <h3 className="mb-1 font-semibold text-slate-800">{target.role}</h3>
              <span className="mb-3 rounded-full bg-blue-50 px-3 py-0.5 text-xs font-semibold text-blue-600">
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
