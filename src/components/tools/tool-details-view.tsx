import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, Github, Layers, Monitor, ShieldCheck, Tag } from "lucide-react";
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
        className="inline-flex items-center gap-2 rounded-md border border-edge bg-graphite/65 px-3 py-2 text-sm text-foreground/80 transition hover:border-accent/50 hover:text-accent"
      >
        <ArrowLeft className="size-4" />
        Back to Tools
      </Link>

      <GlassCard className="p-0">
        <div className="border-b border-edge/70 px-5 py-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/55">
            saad@vault:~$ open {product.slug}
          </p>
        </div>

        <div className="relative h-[300px] overflow-hidden border-b border-edge">
          <Image src={product.image} alt={product.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <PillBadge text={product.status} />
              <span className="rounded-full border border-edge bg-background/70 px-3 py-1 font-mono text-xs text-foreground/80">
                v{product.version}
              </span>
            </div>
            <h1 className="text-3xl font-semibold uppercase tracking-[0.1em] text-foreground sm:text-4xl">{product.name}</h1>
            <p className="mt-2 max-w-3xl text-sm text-foreground/75 sm:text-base">{product.shortDescription}</p>
          </div>
        </div>

        <div className="grid gap-6 p-6 lg:grid-cols-[2fr_1fr]">
          <div>
            <p className="text-sm leading-relaxed text-foreground/78 sm:text-base">{product.fullDescription}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 rounded-lg border border-edge bg-background/45 px-3 py-2 text-sm text-foreground/88"
                >
                  <ShieldCheck className="size-4 text-accent" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-xl border border-edge bg-background/55 p-4">
              <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground/60">Tool Specs</h2>
              <dl className="space-y-3 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <dt className="inline-flex items-center gap-2 text-foreground/65">
                    <Layers className="size-4" />
                    Category
                  </dt>
                  <dd className="text-foreground">{product.category}</dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="inline-flex items-center gap-2 text-foreground/65">
                    <Monitor className="size-4" />
                    Platform
                  </dt>
                  <dd className="text-foreground">{product.platform}</dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="inline-flex items-center gap-2 text-foreground/65">
                    <Tag className="size-4" />
                    Version
                  </dt>
                  <dd className="text-foreground">{product.version}</dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-wrap gap-2">
              <ExternalAction href={product.downloadUrl} className="flex-1 min-w-44">
                <Download className="size-4" />
                Download
              </ExternalAction>
              <ExternalAction href={product.githubUrl} variant="secondary" className="flex-1 min-w-44">
                <Github className="size-4" />
                GitHub
              </ExternalAction>
            </div>
          </aside>
        </div>
      </GlassCard>

      <section>
        <h2 className="mb-4 text-2xl font-semibold uppercase tracking-[0.08em] text-foreground">Screenshots Gallery</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {product.gallery.map((shot) => (
            <div key={shot} className="relative h-48 overflow-hidden rounded-xl border border-edge bg-graphite/65">
              <Image src={shot} alt={`${product.name} screenshot`} fill className="object-cover transition hover:scale-105" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
