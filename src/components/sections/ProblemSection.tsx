import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { problems } from "@/data/dummyData";

export default function ProblemSection() {
  return (
    <SectionWrapper id="problem" className="bg-slate-50">
      <Container>
        <SectionTitle
          label="Why CS AI"
          title="The Challenges Every CS Team Faces"
          description="Manual workflows, reactive processes, and invisible churn signals are silently draining your team's capacity and your company's revenue."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {problems.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-red-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-xl">
                {item.icon}
              </div>
              <h3 className="mb-2 font-semibold text-slate-800">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
