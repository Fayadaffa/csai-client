import Container from "@/components/Container";
import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-36">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-50 opacity-60 blur-3xl" />
      </div>

      <Container>
        <div className="relative flex flex-col items-center gap-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
            🚧 Sprint 1 Placeholder
          </span>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Judul Utama Produk{" "}
            <span className="text-blue-600">Akan Diisi</span>{" "}
            di Sprint 2
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-slate-500">
            Deskripsi singkat produk akan diperbarui berdasarkan brief dan desain final.
            Ini adalah placeholder HeroSection untuk fondasi Sprint 2.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="#cta" size="lg">Mulai Gratis</Button>
            <Button href="#features" size="lg" variant="outline">Lihat Fitur →</Button>
          </div>

          {/* Placeholder illustration */}
          <div className="mt-6 flex h-56 w-full max-w-3xl items-center justify-center rounded-2xl border-2 border-dashed border-blue-100 bg-blue-50/50 md:h-72">
            <div className="text-center">
              <div className="mb-2 text-3xl">🖼️</div>
              <p className="text-sm text-slate-400">Ilustrasi / Screenshot Produk</p>
              <p className="text-xs text-slate-300">Akan ditambahkan di Sprint 2</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
