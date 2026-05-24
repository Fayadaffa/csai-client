import { navLinks } from "@/data/landingData";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white">
      <div className="mx-auto flex h-[64px] max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="15" stroke="#5c6bc0" strokeWidth="2"/>
            <circle cx="16" cy="16" r="5" fill="#5c6bc0"/>
            <line x1="3" y1="3" x2="29" y2="29" stroke="#5c6bc0" strokeWidth="2" strokeLinecap="round"/>
            <ellipse cx="16" cy="16" rx="13" ry="6" stroke="#5c6bc0" strokeWidth="1.5" fill="none"/>
          </svg>
          <span className="text-base font-bold text-slate-800">CS AI</span>
        </a>

        {/* Nav links */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-normal text-slate-700 hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
