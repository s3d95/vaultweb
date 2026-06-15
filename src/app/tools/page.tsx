import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ToolsCatalog } from "@/components/tools/tools-catalog";
import { getAllProducts } from "@/lib/product-utils";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Saad Vault | All Programs",
  description: "Browse all of Saad's Windows programs. Search or filter to find what you want.",
  path: "/tools",
});

export default function ToolsPage() {
  const products = getAllProducts();

  return (
    <PageContainer className="pb-20 pt-14 sm:pt-20">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 font-mono text-[11px] tracking-[0.12em] text-dim">
        <span className="size-1.5 rounded-full bg-white/70" />
        all programs · ready to download
      </div>
      <SectionHeading
        eyebrow="Programs"
        title="All Programs"
        description="Everything I've made, in one list. Search or filter to find what you want, then click a program to see more."
      />
      <ToolsCatalog products={products} />
    </PageContainer>
  );
}
