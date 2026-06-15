import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  action?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, className, action }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between", className)}>
      <div className="max-w-3xl">
        {eyebrow ? (
          <span className="mb-4 inline-block rounded-full border border-white/[0.08] px-4 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-dim">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="chrome-text font-display text-3xl font-bold tracking-[-0.03em] sm:text-[2.6rem]">{title}</h2>
        {description ? <p className="mt-4 text-base leading-relaxed text-dim">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
