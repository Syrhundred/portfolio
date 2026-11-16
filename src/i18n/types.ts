import type { ProjectId } from "@/data/projects";
import type { CaseSlug } from "@/data/work";

/** CLDR plural categories; `other` is the required fallback. */
export type PluralForms = Partial<Record<Intl.LDMLPluralRule, string>> & {
  other: string;
};

export type CaseText = {
  company: string;
  project: string;
  summary: string;
  dates: string;
  role: string;
  highlights: string[];
};

export type Dictionary = {
  /**
   * Displayed name. Kept in Latin in every locale — replace with the Cyrillic
   * spelling in `ru`/`kk` if you prefer it.
   */
  name: string;
  role: string;
  nav: { work: string; projects: string; about: string };
  actions: {
    view: string;
    back: string;
    cv: string;
    linkedin: string;
  };
  casePage: {
    role: string;
    stack: string;
    highlights: string;
    nextProject: string;
  };
  cases: Record<CaseSlug, CaseText>;
  about: {
    intro: string;
    fields: { label: string; lines: string[] }[];
    contact: string;
  };
  projectsPage: {
    filters: { all: string; apps: string; websites: string; other: string };
    /** "{count} PROJECTS" — `{count}` is substituted. */
    count: PluralForms;
    screenshot: string;
    items: Record<ProjectId, { name: string; type: string; description: string }>;
  };
  footer: {
    /** "{email}" is substituted. */
    inquiries: string;
    cv: string;
    language: string;
  };
  meta: {
    home: { title: string; description: string };
    about: string;
    projects: string;
    /** "{company}" is substituted. */
    case: string;
  };
};
