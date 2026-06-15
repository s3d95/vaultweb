"use client";

import Image from "next/image";
import { Download, Eye, Layers, Monitor, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { ExternalAction } from "@/components/common/external-action";
import { ActionLink } from "@/components/ui/action-link";
import { GlassCard } from "@/components/ui/glass-card";
import { PillBadge } from "@/components/ui/pill-badge";
import { Product } from "@/types/product";

type ToolCardProps = {
  product: Product;
  priority?: boolean;
};

export function ToolCard({ product, priority = false }: ToolCardProps) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 280, damping: 24 }} className="h-full">
      <GlassCard className="group flex h-full flex-col p-0">
        <div className="border-b border-white/[0.06] px-4 py-2.5">
          <p className="font-mono text-[11px] tracking-[0.15em] text-dim">{product.slug}</p>
        </div>

        <div className="relative h-44 overflow-hidden border-b border-white/[0.06]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover grayscale transition duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute left-4 top-4 flex gap-2">
            <PillBadge text={product.status} />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2 flex items-center justify-between gap-2">
            <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-foreground">{product.name}</h3>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-xs text-dim">
              v{product.version}
            </span>
          </div>

          <p className="mb-4 text-sm leading-relaxed text-dim">{product.shortDescription}</p>

          <div className="mb-4 grid gap-2 text-xs text-dim sm:grid-cols-2">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.07] bg-white/[0.02] px-2.5 py-1.5">
              <Layers className="size-3.5" />
              {product.category}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.07] bg-white/[0.02] px-2.5 py-1.5">
              <Monitor className="size-3.5" />
              {product.platform}
            </span>
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {product.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full border border-white/[0.07] px-2.5 py-1 font-mono text-[11px] tracking-[0.04em] text-faint"
              >
                <Tag className="size-3" />
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-2.5">
            <ActionLink href={`/tools/${product.slug}`} variant="secondary" className="flex-1">
              <Eye className="size-4" />
              Details
            </ActionLink>
            <ExternalAction href={product.downloadUrl} className="flex-1">
              <Download className="size-4" />
              Download
            </ExternalAction>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
