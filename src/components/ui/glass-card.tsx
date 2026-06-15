import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <article
      className={cn(
        "glass rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 shadow-cyber transition-[border-color,background] duration-500 hover:border-white/15 hover:bg-white/[0.06]",
        className
      )}
    >
      {children}
    </article>
  );
}
