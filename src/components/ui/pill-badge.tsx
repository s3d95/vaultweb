import { cn } from "@/lib/utils";

type PillBadgeProps = {
  text: string;
  className?: string;
};

export function PillBadge({ text, className }: PillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/15 bg-black/50 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-foreground backdrop-blur",
        className
      )}
    >
      {text}
    </span>
  );
}
