import Container from "@/components/Container";
import Button from "@/components/Button";
import { ctaData } from "@/data/dummyData";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-24"
      style={{
        background:
          "linear-gradient(120deg, #e91e8c 0%, #9c27b0 28%, #5c35cc 52%, #3949ab 72%, #1a237e 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />
      </div>

      <Container>
        <div className="relative flex flex-col items-center gap-6 text-center">
          <span className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80">
            {ctaData.eyebrow}
          </span>
          <h2 className="max-w-2xl text-3xl font-bold leading-tight text-white md:text-4xl">
            {ctaData.headline}
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-white/80">
            {ctaData.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              href={ctaData.primaryHref}
              size="lg"
              className="border-white bg-white !text-indigo-700 hover:bg-indigo-50 hover:shadow-lg transition-shadow"
            >
              {ctaData.primaryCTA}
            </Button>
            <Button
              href={ctaData.secondaryHref}
              size="lg"
              variant="outline"
              className="!border-white/50 !text-white hover:!bg-white/15"
            >
              {ctaData.secondaryCTA}
            </Button>
          </div>
          <p className="text-sm text-white/60">{ctaData.note}</p>
        </div>
      </Container>
    </section>
  );
}
