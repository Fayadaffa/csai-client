import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { features } from "@/data/dummyData";

export default function FeaturesSection() {
  return (
    <SectionWrapper id="features" className="bg-white">
      <Container>
        <SectionTitle
          label="Features"
          title="Built for High-Performing CS Teams"
          description="Every feature in CS AI is designed around one goal: helping your team resolve faster, retain longer, and scale smarter."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={i} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-md">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-xl transition-colors group-hover:bg-indigo-100">
        {icon}
      </div>
      <h3 className="mb-2 font-semibold text-slate-800">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-500">{description}</p>
    </div>
  );
}
