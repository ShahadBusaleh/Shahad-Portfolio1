"use client";

import type { Project } from "@/data/projects";
import { useLanguage } from "./LanguageProvider";
import { ui } from "@/lib/i18n";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const { locale } = useLanguage();
  const t = ui[locale];

  const title = locale === "en" ? project.title : project.titleAr;
  const role = locale === "en" ? project.role : project.roleAr;
  const description =
    locale === "en" ? project.description : project.descriptionAr;
  const highlights =
    locale === "en" ? project.highlights : project.highlightsAr;

  return (
    <article
      className={`group flex flex-col rounded-2xl border border-brand-teal/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {project.badge && (
          <span className="rounded-full bg-brand-teal px-3 py-1 text-xs font-semibold text-brand-cream">
            {project.badge}
          </span>
        )}
        <span className="rounded-full bg-brand-cream/60 px-3 py-1 text-xs font-medium text-brand-teal-dark">
          {t.categoryLabels[project.category]}
        </span>
      </div>

      <h3 className="mb-1 text-xl font-bold text-brand-teal-dark">{title}</h3>
      <p className="mb-3 text-sm font-medium text-brand-teal">{role}</p>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-600">
        {description}
      </p>

      <ul className="mb-5 space-y-2">
        {highlights.map((item) => (
          <li
            key={item}
            className="flex gap-2 text-sm text-zinc-600 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-brand-teal"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal transition-colors hover:text-brand-teal-dark"
          >
            {t.viewLive}
            <span aria-hidden>→</span>
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal transition-colors hover:text-brand-teal-dark"
          >
            {t.viewProject}
            <span aria-hidden>→</span>
          </a>
        )}
      </div>
    </article>
  );
}
