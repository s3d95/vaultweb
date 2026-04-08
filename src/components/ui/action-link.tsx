import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium uppercase tracking-[0.05em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

const variantClass: Record<Variant, string> = {
  primary:
    "border border-accent/70 bg-accent/20 text-accent hover:bg-accent/30 hover:shadow-[0_0_30px_rgba(41,214,255,0.3)]",
  secondary: "border border-edge bg-graphite/80 text-foreground hover:border-accent/45 hover:text-accent",
  ghost: "text-foreground/70 hover:text-foreground",
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
