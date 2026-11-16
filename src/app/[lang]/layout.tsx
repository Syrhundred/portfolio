import type { Metadata } from "next";
import { IBM_Plex_Mono, Unbounded } from "next/font/google";
import { lang } from "next/root-params";
import { locales } from "@/i18n/config";
import { getI18n } from "@/i18n/dictionary";
import "../globals.css";

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  // cyrillic-ext carries the Kazakh letters (Ә Ғ Қ Ң Ү Ө Һ).
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["800"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { dict } = await getI18n();
  return {
    title: dict.meta.home.title,
    description: dict.meta.home.description,
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  return (
    <html
      lang={await lang()}
      className={`${plexMono.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="font-primary min-h-full text-[13px] leading-[1.3] tracking-[0.6px] text-ink">
        {children}
      </body>
    </html>
  );
}
