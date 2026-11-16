import Image from "next/image";
import type { CaseSlug } from "@/data/work";

const frame = "@container aspect-[3/2] w-full max-w-[480px] overflow-hidden";

export function CaseHero({ slug }: { slug: CaseSlug }) {
  switch (slug) {
    case "globerce-capital":
      return (
        <div className={`${frame} flex`}>
          <div className="flex flex-1 items-center justify-center bg-globerce">
            <Image
              src="/images/globerce-logo.png"
              alt="Globerce Capital"
              width={200}
              height={200}
              className="w-2/3"
            />
          </div>
          <div className="flex flex-1 items-center justify-center bg-freedom-bg">
            <Image
              src="/images/freedom-logo.png"
              alt="Freedom"
              width={119}
              height={138}
              className="w-[43%]"
            />
          </div>
        </div>
      );
    case "jaryq-lab":
      return (
        <div className={`${frame} flex items-center justify-center bg-jaryq-bg`}>
          <JaryqLogo />
        </div>
      );
    case "mindwave":
      return (
        <div className={`${frame} flex items-center justify-center bg-mindwave-bg`}>
          <Image
            src="/images/mindwave-logo.png"
            alt="Mindwave"
            width={622}
            height={91}
            className="w-[68%]"
          />
        </div>
      );
  }
}

function JaryqLogo() {
  return (
    <div
      role="img"
      aria-label="Jaryq Lab"
      className="font-display flex items-center gap-[3.75cqw] text-[7.1cqw] leading-none tracking-[0.73cqw]"
    >
      <svg viewBox="0 0 100 100" aria-hidden className="size-[13.3cqw] fill-jaryq">
        <rect x="8" y="39" width="84" height="22" rx="8" />
        <rect x="8" y="39" width="84" height="22" rx="8" transform="rotate(60 50 50)" />
        <rect x="8" y="39" width="84" height="22" rx="8" transform="rotate(120 50 50)" />
      </svg>
      <span className="text-jaryq-ink">JARYQ</span>
      <span className="text-jaryq">LAB</span>
    </div>
  );
}
