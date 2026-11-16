import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { isLocale, type Locale } from "@/i18n/config";
import { en } from "@/i18n/dictionaries/en";
import { kk } from "@/i18n/dictionaries/kk";
import { ru } from "@/i18n/dictionaries/ru";
import type { Dictionary } from "@/i18n/types";

const dictionaries: Record<Locale, Dictionary> = { en, ru, kk };

/**
 * The active locale, read from the `[lang]` root segment. Server Components
 * only — see https://nextjs.org/docs/app/api-reference/functions/next-root-params
 */
export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!value || !isLocale(value)) notFound();
  return value;
}

/** Locale plus its dictionary — what most pages need. */
export async function getI18n(): Promise<{
  locale: Locale;
  dict: Dictionary;
}> {
  const locale = await getLocale();
  return { locale, dict: dictionaries[locale] };
}
