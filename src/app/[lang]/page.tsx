import { OutlineButton } from "@/components/OutlineButton";
import { PageShell } from "@/components/PageShell";
import { ProfileHeader } from "@/components/ProfileHeader";
import { Tabs } from "@/components/Tabs";
import { work } from "@/data/work";
import { withLocale } from "@/i18n/config";
import { getI18n } from "@/i18n/dictionary";

export default async function WorkPage() {
  const { locale, dict } = await getI18n();

  return (
    <PageShell>
      <ProfileHeader />
      <Tabs active="work" />
      <ul className="flex w-full max-w-[500px] flex-col gap-9 px-5 pt-6">
        {work.map(({ slug }) => {
          const item = dict.cases[slug];
          return (
            <li key={slug} className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-[5px]">
                <h2>{item.company}</h2>
                <p>{item.summary}</p>
                <p>{item.dates}</p>
              </div>
              <OutlineButton href={withLocale(locale, `/work/${slug}`)}>
                {dict.actions.view}
              </OutlineButton>
            </li>
          );
        })}
      </ul>
    </PageShell>
  );
}
