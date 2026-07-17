"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "./LanguageProvider";
import { ui } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Projects() {
  const { locale } = useLanguage();
  const t = ui[locale];
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-zinc-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-brand-teal-dark sm:text-4xl">
            {t.featuredWork}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-teal" />
        </Reveal>

        <div className="mb-16 grid gap-6 lg:grid-cols-2">
          {featured.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>

        {rest.length > 0 && (
          <>
            <Reveal>
              <h3 className="mb-8 text-center text-2xl font-bold text-brand-teal-dark">
                {t.allProjects}
              </h3>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {rest.map((project, index) => (
                <Reveal key={project.id} delay={index * 80}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
