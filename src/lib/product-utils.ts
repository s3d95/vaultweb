import { products } from "@/data/products";
import { Product } from "@/types/product";

export const sortOptions = [
  { value: "name-asc", label: "Name (A-Z)" },
  { value: "name-desc", label: "Name (Z-A)" },
  { value: "version-desc", label: "Latest Version" },
] as const;

export type SortOption = (typeof sortOptions)[number]["value"];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function sortProducts(items: Product[], sort: SortOption): Product[] {
  const cloned = [...items];

  if (sort === "name-asc") {
    return cloned.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sort === "name-desc") {
    return cloned.sort((a, b) => b.name.localeCompare(a.name));
  }

  return cloned.sort((a, b) => b.version.localeCompare(a.version));
}

