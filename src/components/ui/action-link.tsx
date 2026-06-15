import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ease-chrome focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60";

const variantClass: Record<Variant, string> = {
  primary: "bg-white text-black shadow-chrome hover:-translate-y-0.5 hover:shadow-chrome-hover",
  secondary:
    "border border-white/15 bg-white/[0.035] text-foreground hover:border-white hover:bg-white/[0.06]",
  ghost: "text-dim hover:text-foreground",
};

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: Variant;
  external?: boolean;
};

export function ActionLink({ href, children, className, variant = "primary", external = false }: ActionLinkProps) {
  const classNames = cn(baseClass, variantClass[variant], className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classNames}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
}
