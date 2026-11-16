"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project, ProjectCategory } from "@/data/projects";
import type { Locale } from "@/i18n/config";
import { plural } from "@/i18n/format";
import type { Dictionary } from "@/i18n/types";

type Texts = Dictionary["projectsPage"];
type FilterKey = "all" | ProjectCategory;

const filterOrder: FilterKey[] = ["all", "apps", "websites", "other"];

const pad = (n: number) => String(n).padStart(2, "0");

export function ProjectsGrid({
  projects,
  locale,
  t,
}: {
  projects: Project[];
  locale: Locale;
  t: Texts;
}) {
  const [filter, setFilter] = useState<FilterKey>("all");
  const visible = projects
    .map((project, i) => ({ project, number: pad(i + 1) }))
    .filter(({ project }) => filter === "all" || project.category === filter);

  return (
    <section className="flex w-full max-w-[500px] flex-col gap-7 px-5 pt-6">
      <div className="flex items-center justify-between gap-4 text-[11px] tracking-[0.5px]">
        <div className="flex flex-wrap gap-4">
          {filterOrder.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              aria-pressed={filter === key}
              className={`cursor-pointer transition-colors ${
                filter === key ? "text-ink underline" : "text-muted hover:text-ink"
              }`}
            >
              {t.filters[key]}
            </button>
          ))}
        </div>
        <p className="shrink-0 text-muted">
          {plural(locale, t.count, pad(visible.length))}
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-x-5 gap-y-9 min-[440px]:grid-cols-2">
        {visible.map(({ project, number }) => (
          <li key={project.id}>
            <ProjectCard
              project={project}
              number={number}
              text={t.items[project.id]}
              screenshot={t.screenshot}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProjectCard({
  project,
  number,
  text,
  screenshot,
}: {
  project: Project;
  number: string;
  text: Texts["items"][keyof Texts["items"]];
  screenshot: string;
}) {
  const body = (
    <>
      <div className="relative flex h-[150px] items-center justify-center overflow-hidden border border-thumb-line bg-thumb">
        {project.image ? (
          <Image
            src={project.image}
            alt={text.name}
            fill
            sizes="(max-width: 440px) 100vw, 220px"
            className="object-cover"
          />
        ) : (
          <span className="text-[11px] tracking-[0.5px] text-tab-off">
            {screenshot}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-[5px]">
        <div className="flex justify-between gap-2">
          <h2 className={project.href ? "group-hover:underline" : undefined}>
            {text.name}
          </h2>
          <span aria-hidden>↗</span>
        </div>
        <p className="text-[11px] tracking-[0.5px] text-muted">
          {number} — {text.type} — {project.year}
        </p>
        <p className="text-[11px] leading-[1.5] tracking-[0.5px]">
          {text.description}
        </p>
      </div>
    </>
  );

  const className = "group flex flex-col gap-[14px]";
  return project.href ? (
    <a href={project.href} target="_blank" rel="noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
}
