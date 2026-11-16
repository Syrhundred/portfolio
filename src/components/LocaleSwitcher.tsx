"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import {
  defaultLocale,
  isLocale,
  localeLabels,
  locales,
  stripLocale,
  withLocale,
} from "@/i18n/config";

export function LocaleSwitcher({ label }: { label: string }) {
  // The default locale is served from the root (see src/proxy.ts), so only
  // `ru` and `kk` ever appear as a prefix in the browser path.
  const pathname = usePathname();
  const first = pathname.split("/")[1] ?? "";
  const active = isLocale(first) ? first : defaultLocale;
  const basePath = stripLocale(pathname);

  return (
    <nav aria-label={label} className="whitespace-pre">
      {locales.map((locale, i) => (
        <Fragment key={locale}>
          {i > 0 && "  |  "}
          <Link
            href={withLocale(locale, basePath)}
            hrefLang={locale}
            aria-current={locale === active ? "true" : undefined}
            className={
              locale === active ? "text-ink" : "transition-colors hover:text-ink"
            }
          >
            {localeLabels[locale]}
          </Link>
        </Fragment>
      ))}
    </nav>
  );
}
