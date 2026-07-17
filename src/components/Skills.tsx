"use client";

import { skills } from "@/data/projects";
import { useLanguage } from "./LanguageProvider";
import { ui } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const skillGroups = [
  { key: "frontend" as const, labelEn: "Front-End", labelAr: "واجهات أمامية" },
  { key: "backend" as const, labelEn: "Back-End", labelAr: "خلفية" },
  { key: "ai" as const, labelEn: "AI & Integration", labelAr: "ذكاء اصطناعي" },
  { key: "cloud" as const, labelEn: "Cloud & Tools", labelAr: "سحابة وأدوات" },
  { key: "data" as const, labelEn: "Data", labelAr: "بيانات" },
];

export function Skills() {
  const { locale } = useLanguage();
  const t = ui[locale];

  return (
    <section id="skills" className="bg-brand-teal-dark px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-brand-cream sm:text-4xl">
            {t.skills}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-cream" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.key} delay={index * 70}>
              <div className="rounded-2xl border border-brand-cream/10 bg-brand-teal/50 p-6">
                <h3 className="mb-4 font-semibold text-brand-cream">
                  {locale === "en" ? group.labelEn : group.labelAr}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills[group.key].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-brand-cream/15 px-3 py-1 text-xs font-medium text-brand-cream"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
