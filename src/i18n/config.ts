export const locales = ["en", "ru", "kk"] as const;

export type Locale = (typeof locales)[number];

/** Rendered at the root (`/about`, not `/en/about`). See src/proxy.ts. */
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  kk: "KK",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Prefixes an app-relative path with its locale. The default locale is served
 * from the root, so it is returned unchanged.
 */
export function withLocale(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Inverse of `withLocale`: `/ru/about` -> `/about`, `/ru` -> `/`. */
export function stripLocale(pathname: string): string {
  const [, first, ...rest] = pathname.split("/");
  if (!first || !isLocale(first)) return pathname;
  return rest.length ? `/${rest.join("/")}` : "/";
}
