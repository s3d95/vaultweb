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
      <div className="grid gap-4 rounded-xl border border-edge bg-graphite/65 p-4 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <label className="group flex items-center gap-2 rounded-md border border-edge bg-background/70 px-3 py-2 text-sm text-foreground/80 transition focus-within:border-accent/55">
          <Search className="size-4 text-foreground/55 transition group-focus-within:text-accent" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, tag, or description..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-foreground/45"
          />
        </label>

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value as (typeof productCategories)[number])}
          className="rounded-md border border-edge bg-background/70 px-3 py-2 text-sm text-foreground outline-none transition focus:border-accent/55"
        >
          {productCategories.map((option) => (
            <option key={option} value={option}>
              Category: {option}
            </option>
          ))}
        </select>

        <select
          value={status}
          onChange={(event) => setStatus(event.target.value as (typeof productStatuses)[number])}
          className="rounded-md border border-edge bg-background/70 px-3 py-2 text-sm text-foreground outline-none transition focus:border-accent/55"
        >
          {productStatuses.map((option) => (
            <option key={option} value={option}>
              Status: {option}
            </option>
          ))}
        </select>

        <label className="flex items-center gap-2 rounded-md border border-edge bg-background/70 px-3 py-2 text-sm text-foreground/85">
          <ArrowUpDown className="size-4 text-foreground/65" />
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortOption)}
            className="w-full bg-transparent outline-none"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="rounded-md border border-edge/70 bg-background/40 px-3 py-2 font-mono text-xs uppercase tracking-[0.1em] text-foreground/58">
        results: {filtered.length}
      </div>

      {filtered.length > 0 ? (
        <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product) => (
            <motion.div key={product.id} layout transition={{ duration: 0.25 }}>
              <ToolCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="rounded-xl border border-edge bg-graphite/60 p-10 text-center">
          <p className="font-display text-xl uppercase tracking-[0.1em] text-foreground">No matching tools found</p>
          <p className="mt-3 text-sm text-foreground/65">Try a different query, category, or status filter.</p>
        </div>
      )}
    </div>
  );
}
