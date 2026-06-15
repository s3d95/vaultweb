"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Github, Vault } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background,border-color,backdrop-filter] duration-500",
        scrolled
          ? "border-white/10 bg-[rgba(6,6,8,0.6)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <PageContainer className="flex h-[4.5rem] items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="inline-flex size-9 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-0.5 transition group-hover:border-white/25">
            <Image
              src="/logo/saad.png"
              alt="Saad logo"
              width={32}
              height={32}
              className="h-full w-full object-contain transition duration-500 group-hover:rotate-[8deg]"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-bold tracking-[0.28em] text-foreground">SAAD</span>
            <span className="font-mono text-[10px] tracking-[0.18em] text-dim">vault · sa3d95.xyz</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-1 text-sm font-medium transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-white after:transition-all after:duration-300 after:ease-chrome",
                  isActive
                    ? "text-foreground after:w-full"
                    : "text-dim after:w-0 hover:text-foreground hover:after:w-full"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href="https://sa3d95.online"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-4 py-2 text-sm font-semibold text-foreground/90 transition hover:border-white hover:bg-white/[0.06] sm:inline-flex"
          >
            <Vault className="size-4" />
            Main
          </a>
          <a
            href="https://github.com/s3d95"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-4 py-2 text-sm font-semibold text-foreground/90 transition hover:border-white hover:bg-white/[0.06]"
          >
            <Github className="size-4" />
            GitHub
          </a>
        </div>
      </PageContainer>
    </header>
  );
}
