import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ExternalActionProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

const variantClass = {
  primary:
    "border border-accent/70 bg-accent/20 text-accent hover:bg-accent/30 hover:shadow-[0_0_26px_rgba(41,214,255,0.32)]",
  secondary: "border border-edge bg-graphite/80 text-foreground hover:border-accent/45 hover:text-accent",
} as const;

export function ExternalAction({ href, children, className, variant = "primary" }: ExternalActionProps) {
  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium uppercase tracking-[0.05em] transition",
        variantClass[variant],
        className
      )}
    >
      {children}
    </a>
  );
}
