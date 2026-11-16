import Link from "next/link";
import { withLocale } from "@/i18n/config";
import { getI18n } from "@/i18n/dictionary";

const tabs = [
  { key: "work", href: "/" },
  { key: "projects", href: "/projects" },
  { key: "about", href: "/about" },
] as const;

export type TabKey = (typeof tabs)[number]["key"];

export async function Tabs({ active }: { active: TabKey }) {
  const { locale, dict } = await getI18n();

  return (
    <nav className="flex w-full max-w-[520px] items-end">
      {tabs.map((tab) => {
        const isActive = tab.key === active;
        return (
          <Link
            key={tab.key}
            href={withLocale(locale, tab.href)}
            aria-current={isActive ? "page" : undefined}
            className={`flex flex-1 justify-center pb-[14px] transition-colors ${
              isActive
                ? "border-b-2 border-ink text-ink"
                : "border-b border-line text-tab-off hover:text-ink"
            }`}
          >
            {dict.nav[tab.key]}
          </Link>
        );
      })}
    </nav>
  );
}
