"use client";

import { profile } from "@/data/profile";
import { useLanguage } from "./LanguageProvider";
import { ui } from "@/lib/i18n";
import { Logo } from "./Logo";

export function Hero() {
  const { locale } = useLanguage();
  const t = ui[locale];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-teal px-6 pb-24 pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(232,222,201,0.12),transparent_50%)]" />
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-brand-cream/5 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:text-start">
        <div className="shrink-0">
          <Logo size="lg" showName />
        </div>

        <div className="flex-1 space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-cream/70">
            {locale === "en" ? profile.title : profile.titleAr}
          </p>
          <h1 className="text-4xl font-bold leading-tight text-brand-cream sm:text-5xl lg:text-6xl">
            {locale === "en" ? profile.name : profile.nameAr}
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-brand-cream/85 lg:mx-0">
            {locale === "en" ? profile.summary : profile.summaryAr}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-brand-cream px-6 py-3 text-sm font-semibold text-brand-teal-dark transition-transform hover:scale-105"
            >
              {t.featuredWork}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-brand-cream/40 px-6 py-3 text-sm font-semibold text-brand-cream transition-colors hover:bg-brand-cream/10"
            >
              {t.getInTouch}
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand-cream/40 px-6 py-3 text-sm font-semibold text-brand-cream transition-colors hover:bg-brand-cream/10"
            >
              GitHub
            </a>
          </div>

          <p className="text-sm text-brand-cream/60">
            {locale === "en" ? profile.location : profile.locationAr}
          </p>
        </div>
      </div>
    </section>
  );
}
