type Props = {
  label: string;
  lines: string[];
};

export function Field({ label, lines }: Props) {
  return (
    <div className="flex flex-col gap-[5px]">
      <h2 className="text-muted">{label}</h2>
      {lines.map((line) => (
        <p key={line} className="leading-[1.5]">
          {line}
        </p>
      ))}
    </div>
  );
}
