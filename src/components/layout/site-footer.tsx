import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";

const footerLinks = [
  { href: "https://sa3d95.online", label: "Main Site" },
  { href: "https://github.com/s3d95", label: "GitHub" },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-edge/70 bg-graphite/30">
      <PageContainer className="flex flex-col items-start justify-between gap-6 py-8 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="inline-flex size-10 items-center justify-center overflow-hidden rounded-lg border border-accent/35 bg-accent/10 p-1">
            <Image src="/logo/saad.png" alt="Saad logo" width={36} height={36} className="h-full w-full object-contain" />
          </span>
          <div className="space-y-1">
            <p className="text-sm uppercase tracking-[0.14em] text-foreground">Saad Vault</p>
            <p className="font-mono text-xs text-foreground/55">Architected with precision by Saad</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-edge bg-background/70 px-3 py-2 text-xs uppercase tracking-[0.08em] text-foreground/75 transition hover:border-accent/50 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </PageContainer>
    </footer>
  );
}
