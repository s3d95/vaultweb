import { ArrowRight, Binary, Boxes, TerminalSquare } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { PageContainer } from "@/components/layout/page-container";
import { ActionLink } from "@/components/ui/action-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { ToolGrid } from "@/components/tools/tool-grid";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Saad Vault | Software Catalog",
  description: "Professional software catalog for Saad desktop applications.",
  path: "/",
});

export default function HomePage() {
  return (
    <PageContainer className="pb-16 pt-10 sm:pt-14">
      <section className="overflow-hidden rounded-2xl border border-edge bg-gradient-to-b from-surface/90 via-graphite/80 to-background/85 shadow-cyber">
        <div className="border-b border-edge/70 px-6 py-3 sm:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent/90">
            initializing software vault... ready
          </p>
        </div>

        <div className="grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1.25fr_0.9fr] lg:items-center">
          <FadeIn>
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-accent">
              <TerminalSquare className="size-3.5" />
              sa3d95.xyz
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold uppercase leading-tight tracking-[0.08em] text-foreground sm:text-5xl">
              Saad Vault
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/70 sm:text-base">
              Dedicated software showcase platform for Saad desktop tools. Browse releases, inspect features, and open
              external downloads.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ActionLink href="/tools">
                Open Catalog
                <ArrowRight className="size-4" />
              </ActionLink>
              <ActionLink href="https://sa3d95.online" external variant="secondary">
                Main Website
              </ActionLink>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="rounded-xl border border-edge bg-background/55 p-5">
              <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-foreground/55">vault status</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-lg border border-edge bg-graphite/60 px-3 py-2">
                  <span className="inline-flex items-center gap-2 text-foreground/65">
                    <Boxes className="size-4 text-accent" />
                    Total Tools
                  </span>
                  <span className="font-mono text-foreground">{products.length}</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-edge bg-graphite/60 px-3 py-2">
                  <span className="inline-flex items-center gap-2 text-foreground/65">
                    <Binary className="size-4 text-accent" />
                    Platform
                  </span>
                  <span className="font-mono text-foreground">Windows</span>
                </div>
                <div className="rounded-lg border border-edge bg-graphite/60 px-3 py-2 font-mono text-xs uppercase tracking-[0.1em] text-foreground/60">
                  downloads are served via external provider links
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mt-14">
        <SectionHeading
          eyebrow="Programs"
          title="Current Releases"
          description="All available software in the vault. Each card links to a detailed product page and external download."
          action={
            <ActionLink href="/tools" variant="secondary">
              Full Catalog
            </ActionLink>
          }
        />
        <ToolGrid products={products} priorityCount={2} />
      </section>
    </PageContainer>
  );
}

