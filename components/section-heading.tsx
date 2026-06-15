type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  moduleIndex?: string; // Kept for compatibility but unused or rendered as a simple badge
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      {/* Eyebrow Label */}
      <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-primary light:bg-brand-primary/10 light:text-brand-primary select-none">
        <span>{eyebrow}</span>
      </div>
      
      {/* Title */}
      <h2 className="mt-4 font-sans text-3xl font-black text-white light:text-slate-900 tracking-tight sm:text-4xl">
        {title}
      </h2>
      
      {/* Description */}
      {description ? (
        <p className="mt-4 text-base font-sans leading-7 text-slate-405 max-w-2xl mx-auto light:text-slate-650">
          {description}
        </p>
      ) : null}
    </div>
  );
}
