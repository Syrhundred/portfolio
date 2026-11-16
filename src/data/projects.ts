/**
 * Structure only — name, type label and description live in
 * `src/i18n/dictionaries`, keyed by `id`.
 */
export type ProjectCategory = "apps" | "websites" | "other";

export type ProjectId =
  | "project-1"
  | "project-2"
  | "project-3"
  | "project-4"
  | "project-5"
  | "project-6";

export type Project = {
  id: ProjectId;
  category: ProjectCategory;
  year: string;
  /** Path in /public, e.g. "/images/projects/my-app.png" */
  image?: string;
  href?: string;
};

// Placeholder entries — replace with your real projects.
export const projects: Project[] = [
  { id: "project-1", category: "apps", year: "2026" },
  { id: "project-2", category: "websites", year: "2026" },
  { id: "project-3", category: "apps", year: "2025" },
  { id: "project-4", category: "apps", year: "2025" },
  { id: "project-5", category: "websites", year: "2025" },
  { id: "project-6", category: "other", year: "2024" },
];
