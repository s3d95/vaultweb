import { cn } from "@/lib/utils";

type PillBadgeProps = {
  text: string;
  className?: string;
};

export function PillBadge({ text, className }: PillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-accent",
        className
      )}
    >
      {text}
    </span>
  );
}

