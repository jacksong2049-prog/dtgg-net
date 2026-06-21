type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold text-cyan-700">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-bold tracking-normal text-slate-950 md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
