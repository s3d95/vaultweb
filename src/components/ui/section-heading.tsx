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
    <div className={cn("mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between", className)}>
      <div className="max-w-3xl">
        {eyebrow ? <p className="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-accent/80">{eyebrow}</p> : null}
        <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-foreground sm:text-4xl">{title}</h2>
        {description ? <p className="mt-3 text-sm text-foreground/70 sm:text-base">{description}</p> : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
