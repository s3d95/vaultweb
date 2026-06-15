import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";

const footerLinks = [
  { href: "https://sa3d95.online", label: "Main Site" },
  { href: "https://github.com/s3d95", label: "GitHub" },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-24 border-t border-white/[0.08]">
      <PageContainer className="flex flex-col items-center gap-5 py-14 text-center">
        <div className="flex items-center gap-3 opacity-90 transition hover:opacity-100">
          <span className="inline-flex size-10 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-1">
            <Image src="/logo/saad.png" alt="Saad logo" width={36} height={36} className="h-full w-full object-contain" />
          </span>
          <span className="font-display text-xl font-bold tracking-[0.3em] text-foreground">SAAD</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-xs font-medium text-dim transition hover:border-white/40 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-sm text-dim">
          Made by <strong className="font-semibold text-foreground">Saad</strong>
        </p>
        <p className="font-mono text-xs text-faint">© 2026 Saad. All rights reserved.</p>
      </PageContainer>
    </footer>
  );
}
