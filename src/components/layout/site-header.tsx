"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Globe } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-edge/70 bg-background/85 backdrop-blur-xl">
      <div className="border-b border-edge/50 bg-graphite/45">
        <PageContainer className="flex h-9 items-center justify-between text-[11px] uppercase tracking-[0.18em] text-foreground/55">
          <p className="font-mono">initializing vault environment...</p>
          <p className="font-mono text-accent/80">saad@vault:~$ tools --live</p>
        </PageContainer>
      </div>

      <PageContainer className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-foreground"
        >
          <span className="inline-flex size-9 items-center justify-center overflow-hidden rounded-lg border border-accent/50 bg-accent/10 p-0.5 transition group-hover:shadow-[0_0_20px_rgba(41,214,255,0.45)]">
            <Image src="/logo/saad.png" alt="Saad logo" width={32} height={32} className="h-full w-full object-contain" priority />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[14px]">Saad Vault</span>
            <span className="font-mono text-[10px] tracking-[0.12em] text-foreground/55">sa3d95.xyz</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm uppercase tracking-[0.08em] transition",
                  isActive
                    ? "border border-accent/35 bg-accent/10 text-accent"
                    : "border border-transparent text-foreground/65 hover:border-edge hover:bg-edge/35 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://sa3d95.online"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-md border border-edge bg-graphite/80 px-3 py-1.5 text-xs uppercase tracking-[0.08em] text-foreground/80 transition hover:border-accent/50 hover:text-foreground sm:inline-flex"
          >
            <Globe className="size-3.5" />
            Main
          </a>
          <a
            href="https://github.com/s3d95"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-edge bg-graphite/80 px-3 py-1.5 text-xs uppercase tracking-[0.08em] text-foreground/80 transition hover:border-accent/50 hover:text-foreground"
          >
            <Github className="size-3.5" />
            GitHub
          </a>
        </div>
      </PageContainer>
    </header>
  );
}
