import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/i18n/config";

/**
 * Every route lives under `app/[lang]`, but the default locale is served from
 * the root: `/about` renders `/en/about` without the prefix showing. Requests
 * that do carry the default prefix are redirected to the canonical bare path so
 * the two spellings don't both get indexed.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";

  if (first === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url);
  }

  if (isLocale(first)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, the public folder and anything with a file extension.
  matcher: ["/((?!_next/|images/|.*\\.).*)"],
};
