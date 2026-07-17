"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { useLanguage } from "./LanguageProvider";
import { navItems } from "@/lib/i18n";

export function Header() {
  const { locale, toggleLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const items = navItems[locale];

  useEffect(() => {
    const sectionIds = items.map((item) => item.href.slice(1));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-teal/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cream"
          onClick={() => setOpen(false)}
        >
          <Logo size="sm" onTeal />
          <span className="hidden text-sm font-semibold tracking-wide text-brand-cream sm:block">
            Shahad Busaleh
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cream ${
                  isActive
                    ? "text-brand-cream"
                    : "text-brand-cream/70 hover:text-brand-cream"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 start-0 h-0.5 rounded-full bg-brand-cream transition-all duration-300 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                  aria-hidden
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLocale}
            className="rounded-full border border-brand-cream/30 px-3 py-1.5 text-xs font-semibold text-brand-cream transition-colors hover:bg-brand-cream/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cream"
            aria-label="Toggle language"
          >
            {locale === "en" ? "عربي" : "EN"}
          </button>

          <button
            type="button"
            className="rounded-lg p-2 text-brand-cream md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cream"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
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

      <nav
        aria-hidden={!open}
        className={`overflow-hidden border-t border-white/10 transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          open
            ? "max-h-64 opacity-100"
            : "pointer-events-none max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-4">
          {items.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-brand-cream" : "text-brand-cream/75"
                }`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
