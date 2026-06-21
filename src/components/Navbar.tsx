"use client";

import { useState } from "react";
import { navLinks } from "@/data/landingData";
import CsAiLogo from "@/components/CsAiLogo";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white">
      <div className="mx-auto flex h-[64px] max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2">
          <CsAiLogo size={36} textClassName="text-base font-bold text-slate-800" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-normal transition-colors ${
                  isActive ? "text-[#3b82f6] font-semibold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-100 text-slate-600 hover:bg-slate-50 hover:text-slate-900 md:hidden focus:outline-none transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`absolute top-[64px] left-0 right-0 border-b border-slate-100 bg-white shadow-lg z-50 flex flex-col py-4 px-6 gap-1 md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible pointer-events-none"
        }`}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-semibold rounded-lg py-2.5 px-3 transition-colors ${
                isActive ? "text-[#3b82f6] bg-slate-50" : "text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </header>
  );
}
