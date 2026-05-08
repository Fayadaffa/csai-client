import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { solutions } from "@/data/dummyData";

export default function SolutionSection() {
  return (
    <SectionWrapper id="solution" className="bg-white">
      <Container>
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <SectionTitle
              label="Solusi"
              title="Cara Kami Menyelesaikan Masalah"
              description="Detail solusi produk akan diisi berdasarkan brief dan desain final di Sprint 2."
              align="left"
            />
            <ul className="space-y-5">
              {solutions.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <polyline points="2,6.5 5,9.5 11,3.5" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">{item.title}</p>
                    <p className="mt-0.5 text-sm text-slate-500">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex h-72 w-full items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50">
            <div className="text-center">
              <div className="mb-2 text-3xl">📐</div>
              <p className="text-sm text-slate-400">Visual / Diagram Solusi</p>
              <p className="text-xs text-slate-300">Sprint 2</p>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
