"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { useLanguage } from "./LanguageProvider";
import { ui } from "@/lib/i18n";

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
      <div className="pointer-events-none absolute -left-16 bottom-10 h-56 w-56 rounded-full bg-brand-cream/5 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:gap-14 lg:text-start">
        <div className="hero-animate shrink-0" style={{ animationDelay: "0ms" }}>
          <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-[1.75rem] ring-2 ring-brand-cream/35 shadow-[0_20px_50px_-20px_rgba(26,47,53,0.55)] sm:h-52 sm:w-52 lg:h-64 lg:w-64">
            <Image
              src="/profile.png"
              alt={locale === "en" ? profile.name : profile.nameAr}
              width={512}
              height={512}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <p
            className="hero-animate text-sm font-semibold uppercase tracking-[0.25em] text-brand-cream/70"
            style={{ animationDelay: "120ms" }}
          >
            {locale === "en" ? profile.title : profile.titleAr}
          </p>
          <h1
            className="hero-animate text-4xl font-bold leading-tight text-brand-cream sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "220ms" }}
          >
            {locale === "en" ? profile.name : profile.nameAr}
          </h1>
          <p
            className="hero-animate mx-auto max-w-2xl text-lg leading-relaxed text-brand-cream/85 lg:mx-0"
            style={{ animationDelay: "320ms" }}
          >
            {locale === "en" ? profile.summary : profile.summaryAr}
          </p>

          <div
            className="hero-animate flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            style={{ animationDelay: "420ms" }}
          >
            <a
              href="#projects"
              className="rounded-full bg-brand-cream px-6 py-3 text-sm font-semibold text-brand-teal-dark transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cream"
            >
              {t.featuredWork}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-brand-cream/40 px-6 py-3 text-sm font-semibold text-brand-cream transition-colors hover:bg-brand-cream/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cream"
            >
              {t.getInTouch}
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand-cream/40 px-6 py-3 text-sm font-semibold text-brand-cream transition-colors hover:bg-brand-cream/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cream"
            >
              GitHub
            </a>
          </div>

          <p
            className="hero-animate text-sm text-brand-cream/60"
            style={{ animationDelay: "520ms" }}
          >
            {locale === "en" ? profile.location : profile.locationAr}
          </p>
        </div>
      </div>
    </section>
  );
}
