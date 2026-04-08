import { FadeIn } from "@/components/motion/fade-in";
import { ToolCard } from "@/components/tools/tool-card";
import { Product } from "@/types/product";

type ToolGridProps = {
  products: Product[];
  priorityCount?: number;
};

export function ToolGrid({ products, priorityCount = 0 }: ToolGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product, index) => (
        <FadeIn key={product.id} delay={index * 0.08}>
          <ToolCard product={product} priority={index < priorityCount} />
        </FadeIn>
      ))}
    </div>
  );
}

