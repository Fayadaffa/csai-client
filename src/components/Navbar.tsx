import { navLinks } from "@/data/landingData";
import CsAiLogo from "@/components/CsAiLogo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white">
      <div className="mx-auto flex h-[64px] max-w-6xl items-center justify-between px-6">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <CsAiLogo size={36} textClassName="text-base font-bold text-slate-800" />
        </a>

        {/* Nav links */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-normal text-slate-600 hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
