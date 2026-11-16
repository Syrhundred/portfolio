import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};

const className =
  "shrink-0 border border-ink px-4 py-2.5 transition-colors hover:bg-ink hover:text-paper";

export function OutlineButton({ href, children, external }: Props) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
