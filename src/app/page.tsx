import { ArrowRight, Binary, Boxes } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { PageContainer } from "@/components/layout/page-container";
import { ActionLink } from "@/components/ui/action-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { ToolGrid } from "@/components/tools/tool-grid";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Saad Vault | Saad's Programs",
  description: "Browse and download Saad's Windows programs — simple, fast, and free.",
  path: "/",
});

export default function HomePage() {
  return (
    <PageContainer className="pb-20 pt-16 sm:pt-24">
      <section className="relative overflow-hidden">
        <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.9fr] lg:items-center">
          <FadeIn>
            <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-dim">
              <span className="size-1.5 animate-pulse rounded-full bg-white shadow-[0_0_10px_#fff]" />
              sa3d95.xyz
            </span>
            <h1 className="chrome-text font-display text-5xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Saad Vault
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-dim sm:text-lg">
              All of Saad&apos;s Windows programs in one place. Take a look, see what each one does, and download
              whatever you need.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <div className="magnetic-wrap">
                <ActionLink href="/tools" className="magnetic">
                  See Programs
                  <ArrowRight className="size-4" />
                </ActionLink>
              </div>
              <div className="magnetic-wrap">
                <ActionLink href="https://sa3d95.online" external variant="secondary" className="magnetic">
                  Main Website
                </ActionLink>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="glass tilt-3d rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 shadow-cyber">
              <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-dim">quick info</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.02] px-3.5 py-2.5">
                  <span className="inline-flex items-center gap-2 text-dim">
                    <Boxes className="size-4 text-foreground" />
                    Programs
                  </span>
                  <span className="font-mono text-foreground">{products.length}</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.02] px-3.5 py-2.5">
                  <span className="inline-flex items-center gap-2 text-dim">
                    <Binary className="size-4 text-foreground" />
                    Works on
                  </span>
                  <span className="font-mono text-foreground">Windows</span>
                </div>
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-3.5 py-2.5 font-mono text-xs leading-relaxed text-faint">
                  downloads open on an external link
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mt-20">
        <SectionHeading
          eyebrow="Programs"
          title="Ready to Download"
          description="Every program I've made. Click a card to see what it does and download it."
          action={
            <ActionLink href="/tools" variant="secondary">
              See All
              <ArrowRight className="size-4" />
            </ActionLink>
          }
        />
        <ToolGrid products={products} priorityCount={2} />
      </section>
    </PageContainer>
  );
}
