import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Download, Github, Layers, Monitor, Tag } from "lucide-react";
import { ExternalAction } from "@/components/common/external-action";
import { GlassCard } from "@/components/ui/glass-card";
import { PillBadge } from "@/components/ui/pill-badge";
import { Product } from "@/types/product";

type ToolDetailsViewProps = {
  product: Product;
};

export function ToolDetailsView({ product }: ToolDetailsViewProps) {
  return (
    <div className="space-y-8">
      <Link
        href="/tools"
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-4 py-2 text-sm font-medium text-foreground/90 transition hover:border-white hover:bg-white/[0.06]"
      >
        <ArrowLeft className="size-4" />
        Back to Tools
      </Link>

      <GlassCard className="p-0">
        <div className="border-b border-white/[0.06] px-5 py-3">
          <p className="font-mono text-[11px] tracking-[0.16em] text-dim">{product.slug}</p>
        </div>

        <div className="relative h-[300px] overflow-hidden border-b border-white/[0.06]">
          <Image src={product.image} alt={product.name} fill className="object-cover grayscale" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <PillBadge text={product.status} />
              <span className="rounded-full border border-white/15 bg-black/50 px-3 py-1 font-mono text-xs text-foreground backdrop-blur">
                v{product.version}
              </span>
            </div>
            <h1 className="font-display text-3xl font-bold tracking-[-0.03em] text-foreground sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-2 max-w-3xl text-sm text-dim sm:text-base">{product.shortDescription}</p>
          </div>
        </div>

        <div className="grid gap-6 p-6 lg:grid-cols-[2fr_1fr]">
          <div>
            <p className="leading-relaxed text-foreground/80">{product.fullDescription}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2.5 text-sm text-foreground/85"
                >
                  <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06]">
                    <Check className="size-3 text-foreground" />
                  </span>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
              <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-dim">Quick Info</h2>
              <dl className="space-y-3 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <dt className="inline-flex items-center gap-2 text-dim">
                    <Layers className="size-4" />
                    Category
                  </dt>
                  <dd className="text-foreground">{product.category}</dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="inline-flex items-center gap-2 text-dim">
                    <Monitor className="size-4" />
                    Platform
                  </dt>
                  <dd className="text-foreground">{product.platform}</dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="inline-flex items-center gap-2 text-dim">
                    <Tag className="size-4" />
                    Version
                  </dt>
                  <dd className="text-foreground">{product.version}</dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <ExternalAction href={product.downloadUrl} className="min-w-44 flex-1">
                <Download className="size-4" />
                Download
              </ExternalAction>
              <ExternalAction href={product.githubUrl} variant="secondary" className="min-w-44 flex-1">
                <Github className="size-4" />
                GitHub
              </ExternalAction>
            </div>
          </aside>
        </div>
      </GlassCard>

      <section>
        <h2 className="mb-5 font-display text-2xl font-bold tracking-[-0.02em] text-foreground">Screenshots</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {product.gallery.map((shot) => (
            <div
              key={shot}
              className="group relative h-48 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]"
            >
              <Image
                src={shot}
                alt={`${product.name} screenshot`}
                fill
                className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
