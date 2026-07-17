"use client";

import { profile } from "@/data/profile";
import { useLanguage } from "./LanguageProvider";
import { ui } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Contact() {
  const { locale } = useLanguage();
  const t = ui[locale];

  const links = [
    { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
    { label: "GitHub", href: profile.links.github, value: "ShahadBusaleh" },
    { label: "LinkedIn", href: profile.links.linkedin, value: "shahadbusaleh" },
    { label: "Credly", href: profile.links.credly, value: "Badges" },
  ];

  return (
    <section id="contact" className="bg-zinc-50 px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-3xl font-bold text-brand-teal-dark sm:text-4xl">
            {t.getInTouch}
          </h2>
          <div className="mx-auto mt-4 mb-8 h-1 w-16 rounded-full bg-brand-teal" />
          <p className="mb-10 text-zinc-600">
            {locale === "en"
              ? "Open to full-stack and AI application roles. Let's connect."
              : "متاحة لفرص Full Stack وتطبيقات الذكاء الاصطناعي. لنتواصل."}
          </p>
        </Reveal>

        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          {links.map((link, index) => (
            <Reveal key={link.label} delay={index * 60}>
              <a
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="block rounded-xl border border-brand-teal/15 bg-white p-5 text-start transition-colors hover:border-brand-teal/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-teal">
                  {link.label}
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-700">
                  {link.value}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex rounded-full bg-brand-teal px-8 py-3 text-sm font-semibold text-brand-cream transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
          >
            {t.sendEmail}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
