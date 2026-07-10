"use client";

import { useState } from "react";
import { Logo } from "./Logo";
import { useLanguage } from "./LanguageProvider";
import { navItems } from "@/lib/i18n";

export function Header() {
  const { locale, toggleLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const items = navItems[locale];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-teal/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo size="sm" />
          <span className="hidden text-sm font-semibold tracking-wide text-brand-cream sm:block">
            Shahad Busaleh
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-cream/80 transition-colors hover:text-brand-cream"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLocale}
            className="rounded-full border border-brand-cream/30 px-3 py-1.5 text-xs font-semibold text-brand-cream transition-colors hover:bg-brand-cream/10"
            aria-label="Toggle language"
          >
            {locale === "en" ? "عربي" : "EN"}
          </button>

          <button
            type="button"
            className="rounded-lg p-2 text-brand-cream md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-brand-cream/80"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
