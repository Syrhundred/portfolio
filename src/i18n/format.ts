import type { Locale } from "@/i18n/config";
import type { PluralForms } from "@/i18n/types";

/** Replaces `{key}` placeholders. */
export function fill(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

/** Picks the CLDR plural form for `count` and fills `{count}`. */
export function plural(
  locale: Locale,
  forms: PluralForms,
  count: number | string,
): string {
  const n = Number(count);
  const rule = new Intl.PluralRules(locale).select(n);
  return fill(forms[rule] ?? forms.other, { count });
}
