/**
 * Structure only — every translatable string lives in `src/i18n/dictionaries`,
 * keyed by `slug`. Adding a case study means extending `CaseSlug`, adding the
 * entry here, adding a `case` branch in `CaseHero`, and filling `cases[slug]`
 * in all three dictionaries (TypeScript flags each gap).
 */
export type CaseSlug = "globerce-capital" | "jaryq-lab" | "mindwave";

export type CaseStudy = {
  slug: CaseSlug;
  /** Tech names — identical in every locale. */
  stack: string;
};

export const work: CaseStudy[] = [
  {
    slug: "globerce-capital",
    stack:
      "TAURI (RUST), REACT 18, TYPESCRIPT, RTK QUERY, TANSTACK ROUTER, REACT HOOK FORM, VALIBOT",
  },
  {
    slug: "jaryq-lab",
    stack:
      "NEXT.JS, REACT, ZUSTAND, PINIA, REDUX SAGA, TANSTACK QUERY, RTK QUERY, STORYBOOK, CHROMATIC",
  },
  {
    slug: "mindwave",
    stack: "NUXT.JS, TYPESCRIPT, TAILWINDCSS, SCSS, ANT DESIGN",
  },
];
