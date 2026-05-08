import Container from "./Container";
import Button from "./Button";

const navLinks = [
  { label: "Fitur", href: "#features" },
  { label: "Solusi", href: "#solution" },
  { label: "Target", href: "#target" },
  { label: "Kontak", href: "#cta" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                <circle cx="5" cy="5" r="2.5"/>
                <circle cx="11" cy="5" r="2.5"/>
                <circle cx="5" cy="11" r="2.5"/>
                <circle cx="11" cy="11" r="2.5"/>
              </svg>
            </div>
            <span className="text-sm font-semibold text-slate-800">CSAI Client</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="rounded-lg px-3.5 py-2 text-sm text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-800">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button href="#cta" size="sm">Mulai Sekarang</Button>
        </nav>
      </Container>
    </header>
  );
}
