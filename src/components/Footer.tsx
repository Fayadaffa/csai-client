import Container from "./Container";
import { navLinks } from "@/data/landingData";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-slate-400 md:flex-row">
          <p>© CS AI — All rights reserved</p>
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 transition hover:text-slate-700"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
