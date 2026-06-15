import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ExternalActionProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

const variantClass = {
  primary: "bg-white text-black shadow-chrome hover:-translate-y-0.5 hover:shadow-chrome-hover",
  secondary:
    "border border-white/15 bg-white/[0.035] text-foreground hover:border-white hover:bg-white/[0.06]",
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
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ease-chrome",
        variantClass[variant],
        className
      )}
    >
      {children}
    </a>
  );
}
