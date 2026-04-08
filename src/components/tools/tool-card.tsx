"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Eye, Layers, Monitor, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { ExternalAction } from "@/components/common/external-action";
import { GlassCard } from "@/components/ui/glass-card";
import { PillBadge } from "@/components/ui/pill-badge";
import { Product } from "@/types/product";

type ToolCardProps = {
  product: Product;
  priority?: boolean;
};

export function ToolCard({ product, priority = false }: ToolCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 280, damping: 24 }}>
      <GlassCard className="group flex h-full flex-col p-0">
        <div className="border-b border-edge/70 px-4 py-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-foreground/55">{product.slug}</p>
        </div>

        <div className="relative h-44 overflow-hidden border-b border-edge/80">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent" />
          <div className="absolute left-4 top-4 flex gap-2">
            <PillBadge text={product.status} />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2 flex items-center justify-between gap-2">
            <h3 className="text-xl font-semibold uppercase tracking-[0.07em] text-foreground">{product.name}</h3>
            <span className="rounded-md border border-edge bg-background/80 px-2 py-1 font-mono text-xs text-foreground/75">
              v{product.version}
            </span>
          </div>

          <p className="mb-4 text-sm leading-relaxed text-foreground/68">{product.shortDescription}</p>

          <div className="mb-4 grid gap-2 text-xs text-foreground/65 sm:grid-cols-2">
            <span className="inline-flex items-center gap-1 rounded-md border border-edge bg-background/35 px-2 py-1">
              <Layers className="size-3.5" />
              {product.category}
            </span>
            <span className="inline-flex items-center gap-1 rounded-md border border-edge bg-background/35 px-2 py-1">
              <Monitor className="size-3.5" />
              {product.platform}
            </span>
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {product.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-md border border-edge/90 bg-background/45 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.06em] text-foreground/60"
              >
                <Tag className="size-3" />
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-2">
            <Link
              href={`/tools/${product.slug}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-edge bg-graphite/80 px-4 py-2 text-sm font-medium text-foreground transition hover:border-accent/50 hover:text-accent"
            >
              <Eye className="size-4" />
              View Details
            </Link>
            <ExternalAction href={product.downloadUrl} variant="primary">
              <Download className="size-4" />
              Download
            </ExternalAction>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
