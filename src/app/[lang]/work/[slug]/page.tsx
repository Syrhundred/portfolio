import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseHero } from "@/components/CaseHero";
import { Field } from "@/components/Field";
import { OutlineButton } from "@/components/OutlineButton";
import { PageShell } from "@/components/PageShell";
import { work } from "@/data/work";
import { withLocale } from "@/i18n/config";
import { getI18n } from "@/i18n/dictionary";
import { fill } from "@/i18n/format";

export function generateStaticParams() {
  return work.map(({ slug }) => ({ slug }));
}

// Every slug is prerendered and the whole page depends on it, so there is no
// URL-independent shell worth streaming.
export const instant = false;

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { dict } = await getI18n();
  const item = work.find((w) => w.slug === slug);
  return {
    title: item
      ? fill(dict.meta.case, { company: dict.cases[item.slug].company })
      : dict.meta.home.title,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default async function CasePage({
  params,
}: PageProps<"/[lang]/work/[slug]">) {
  const { slug } = await params;
  const index = work.findIndex((w) => w.slug === slug);
  if (index === -1) notFound();

  const { locale, dict } = await getI18n();
  const item = work[index];
  const text = dict.cases[item.slug];
  const next = work[(index + 1) % work.length];

  return (
    <PageShell>
      <div className="flex w-full max-w-[520px] justify-between pb-6">
        <Link href={withLocale(locale, "/")} className="hover:underline">
          ← {dict.actions.back}
        </Link>
        <span className="text-muted">
          {pad(index + 1)} / {pad(work.length)}
        </span>
      </div>

      <CaseHero slug={item.slug} />

      <div className="flex flex-col items-center gap-2 pt-7 pb-8 text-center">
        <h1>{text.company}</h1>
        <p>{text.project}</p>
        <p className="text-muted">{text.dates}</p>
      </div>

      <hr className="h-0.5 w-full max-w-[520px] border-0 bg-ink" />

      <article className="flex w-full max-w-[500px] flex-col gap-9 px-5 pt-7">
        <Field label={dict.casePage.role} lines={[text.role]} />
        <Field label={dict.casePage.stack} lines={[item.stack]} />

        <div className="flex flex-col gap-2.5">
          <h2 className="text-muted">{dict.casePage.highlights}</h2>
          <ul className="flex flex-col gap-2.5">
            {text.highlights.map((line) => (
              <li key={line} className="flex gap-3 leading-[1.5]">
                <span aria-hidden>—</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-rule pt-6">
          <div className="flex flex-col gap-[5px]">
            <span className="text-muted">{dict.casePage.nextProject}</span>
            <span>{dict.cases[next.slug].company}</span>
          </div>
          <OutlineButton href={withLocale(locale, `/work/${next.slug}`)}>
            {dict.actions.view}
          </OutlineButton>
        </div>
      </article>
    </PageShell>
  );
}
