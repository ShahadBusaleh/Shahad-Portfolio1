"use client";

import { Logo } from "./Logo";
import { useLanguage } from "./LanguageProvider";
import { ui } from "@/lib/i18n";

export function Footer() {
  const { locale } = useLanguage();
  const t = ui[locale];
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-teal/10 bg-brand-teal px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <Logo size="sm" />
          <p className="text-sm text-brand-cream/70">
            © {year} Shahad Busaleh
          </p>
        </div>
        <p className="text-xs text-brand-cream/50">{t.builtWith}</p>
      </div>
    </footer>
  );
}
