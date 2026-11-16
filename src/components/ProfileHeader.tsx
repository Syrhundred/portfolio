import Image from "next/image";
import { getI18n } from "@/i18n/dictionary";

export async function ProfileHeader() {
  const { dict } = await getI18n();

  return (
    <header className="flex w-full flex-col items-center">
      <Image
        src="/images/hero.png"
        alt="A figure standing on a snowy ridge under the night sky"
        width={480}
        height={320}
        sizes="(max-width: 520px) 100vw, 480px"
        loading="eager"
        fetchPriority="high"
        className="aspect-[3/2] w-full max-w-[480px] object-cover"
      />
      <div className="flex flex-col items-center gap-2 pt-7 pb-8 text-center">
        <h1>{dict.name}</h1>
        <p>{dict.role}</p>
      </div>
    </header>
  );
}
