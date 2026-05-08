import Container from "@/components/Container";
import Button from "@/components/Button";

export default function CTASection() {
  return (
    <section id="cta" className="bg-blue-600 py-24">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
            🚧 Sprint 1 Placeholder
          </span>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white md:text-4xl">
            Siap Mencoba? Mulai Sekarang Gratis
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-blue-100">
            Teks CTA akan diperbarui dengan copy yang lebih menarik dan sesuai produk di Sprint 2.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              href="#"
              size="lg"
              className="border-white bg-white !text-blue-700 hover:bg-blue-50"
            >
              Daftar Gratis
            </Button>
            <Button
              href="#"
              size="lg"
              variant="outline"
              className="!border-white/40 !text-white hover:!bg-white/10"
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>
          <p className="text-sm text-blue-200">
            Tidak perlu kartu kredit · Gratis 14 hari · Batalkan kapan saja
          </p>
        </div>
      </Container>
    </section>
  );
}
