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
        "rounded-2xl border border-edge/90 bg-gradient-to-b from-surface/85 to-background/85 p-5 shadow-[0_18px_50px_rgba(3,8,15,0.5)] backdrop-blur-md",
        className
      )}
    >
      {children}
    </article>
  );
}
