"use client";

import { useMemo, useState } from "react";
import { ArrowUpDown, Search } from "lucide-react";
import { motion } from "framer-motion";
import { productCategories, productStatuses } from "@/data/products";
import { sortOptions, sortProducts, type SortOption } from "@/lib/product-utils";
import { Product } from "@/types/product";
import { ToolCard } from "@/components/tools/tool-card";

type ToolsCatalogProps = {
  products: Product[];
};

const fieldClass =
  "rounded-xl border border-white/[0.08] bg-white/[0.02] px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-white/40";

export function ToolsCatalog({ products }: ToolsCatalogProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof productCategories)[number]>("All");
  const [status, setStatus] = useState<(typeof productStatuses)[number]>("All");
  const [sortBy, setSortBy] = useState<SortOption>("name-asc");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const result = products.filter((product) => {
      const matchQuery =
        normalizedQuery.length === 0 ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.shortDescription.toLowerCase().includes(normalizedQuery) ||
        product.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

      const matchCategory = category === "All" || product.category === category;
      const matchStatus = status === "All" || product.status === status;

      return matchQuery && matchCategory && matchStatus;
    });

    return sortProducts(result, sortBy);
  }, [category, products, query, sortBy, status]);

  return (
    <div className="space-y-8">
      <div className="grid gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <label className="group flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3 py-2.5 text-sm text-foreground/85 transition focus-within:border-white/40">
          <Search className="size-4 text-dim transition group-focus-within:text-foreground" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search programs..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-faint"
          />
        </label>

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value as (typeof productCategories)[number])}
          className={fieldClass}
        >
          {productCategories.map((option) => (
            <option key={option} value={option} className="bg-elevated">
              Category: {option}
            </option>
          ))}
        </select>

        <select
          value={status}
          onChange={(event) => setStatus(event.target.value as (typeof productStatuses)[number])}
          className={fieldClass}
        >
          {productStatuses.map((option) => (
            <option key={option} value={option} className="bg-elevated">
              Status: {option}
            </option>
          ))}
        </select>

        <label className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3 py-2.5 text-sm text-foreground/85">
          <ArrowUpDown className="size-4 text-dim" />
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortOption)}
            className="w-full bg-transparent outline-none"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-elevated">
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="font-mono text-xs uppercase tracking-[0.15em] text-faint">
        <span className="text-dim">{filtered.length}</span> result{filtered.length === 1 ? "" : "s"} found
      </div>

      {filtered.length > 0 ? (
        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product) => (
            <motion.div key={product.id} layout transition={{ duration: 0.25 }}>
              <ToolCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="glass rounded-2xl border border-white/[0.08] bg-white/[0.02] p-12 text-center">
          <p className="font-display text-xl font-bold tracking-[-0.02em] text-foreground">No programs found</p>
          <p className="mt-3 text-sm text-dim">Try a different search or filter.</p>
        </div>
      )}
    </div>
  );
}
