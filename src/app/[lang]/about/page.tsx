import type { Metadata } from "next";
import { Field } from "@/components/Field";
import { OutlineButton } from "@/components/OutlineButton";
import { PageShell } from "@/components/PageShell";
import { ProfileHeader } from "@/components/ProfileHeader";
import { Tabs } from "@/components/Tabs";
import { phoneHref, site } from "@/data/site";
import { getI18n } from "@/i18n/dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const { dict } = await getI18n();
  return { title: dict.meta.about };
}

export default async function AboutPage() {
  const { dict } = await getI18n();

  return (
    <PageShell>
      <ProfileHeader />
      <Tabs active="about" />
      <div className="flex w-full max-w-[500px] flex-col gap-9 px-5 pt-7">
        <p className="leading-[1.6]">{dict.about.intro}</p>
        {dict.about.fields.map((field) => (
          <Field key={field.label} label={field.label} lines={field.lines} />
        ))}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="flex flex-col gap-[5px]">
            <h2 className="text-muted">{dict.about.contact}</h2>
            <a href={`mailto:${site.email}`} className="hover:underline">
              {site.email.toUpperCase()}
            </a>
            <a href={phoneHref} className="hover:underline">
              {site.phone}
            </a>
          </div>
          <div className="flex gap-2">
            <OutlineButton href={site.cv} external>
              {dict.actions.cv}
            </OutlineButton>
            <OutlineButton href={site.linkedin} external>
              {dict.actions.linkedin}
            </OutlineButton>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
