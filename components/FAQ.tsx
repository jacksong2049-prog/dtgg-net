type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-lg border border-slate-200 bg-white p-5 shadow-soft"
        >
          <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
            <span className="flex items-start justify-between gap-4">
              {item.question}
              <span className="mt-1 text-cyan-700 transition group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
