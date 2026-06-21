import { CheckCircle2 } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyanSoft text-cyan-700">
        <CheckCircle2 size={22} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}
