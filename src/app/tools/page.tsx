import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ToolsCatalog } from "@/components/tools/tools-catalog";
import { getAllProducts } from "@/lib/product-utils";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Saad Vault | Tools",
  description: "Explore Saad software tools with live filters, categories, and release status.",
  path: "/tools",
});

export default function ToolsPage() {
  const products = getAllProducts();

  return (
    <PageContainer className="pb-16 pt-10 sm:pt-14">
      <div className="mb-6 rounded-xl border border-edge bg-graphite/50 p-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent/85">
          saad@vault:~$ list --products --released
        </p>
      </div>
      <SectionHeading
        eyebrow="Software Catalog"
        title="Program Library"
        description="Professional catalog view for all vault applications. Filter by category/status and open each program profile."
      />
      <ToolsCatalog products={products} />
    </PageContainer>
  );
}
