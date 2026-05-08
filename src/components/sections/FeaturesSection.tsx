import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { features } from "@/data/dummyData";

export default function FeaturesSection() {
  return (
    <SectionWrapper id="features" className="bg-slate-50">
      <Container>
        <SectionTitle
          label="Fitur"
          title="Fitur Unggulan Produk"
          description="Daftar fitur akan diperbarui berdasarkan brief produk dan desain Figma di Sprint 2."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div key={i} className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                {feature.icon}
              </div>
              <h3 className="mb-2 font-semibold text-slate-800">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
