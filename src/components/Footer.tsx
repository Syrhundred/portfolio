import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { phoneHref, site } from "@/data/site";
import { getI18n } from "@/i18n/dictionary";

const link = "transition-colors hover:text-ink";

export async function Footer() {
  const { dict } = await getI18n();
  const [before, after] = dict.footer.inquiries.split("{email}");

  return (
    <footer className="flex flex-col items-center gap-2 text-center text-[9px] leading-[1.33] tracking-[0.4px] text-muted">
      <p>
        {before}
        <a href={`mailto:${site.email}`} className={link}>
          {site.email.toUpperCase()}
        </a>
        {after}
      </p>
      <p className="whitespace-pre">
        <a href={site.linkedin} target="_blank" rel="noreferrer" className={link}>
          {dict.actions.linkedin}
        </a>
        {"  |  "}
        <a href={site.cv} target="_blank" rel="noreferrer" className={link}>
          {dict.footer.cv}
        </a>
        {"  |  "}
        <a href={phoneHref} className={link}>
          {site.phone}
        </a>
      </p>
      <LocaleSwitcher label={dict.footer.language} />
    </footer>
  );
}
