import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/page-container";
import { ToolDetailsView } from "@/components/tools/tool-details-view";
import { getAllProducts, getProductBySlug } from "@/lib/product-utils";
import { buildMetadata } from "@/lib/metadata";

type ToolDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ToolDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return buildMetadata({
      title: "Saad Vault | Tool Not Found",
      description: "Requested tool was not found in Saad Vault.",
      path: `/tools/${slug}`,
    });
  }

  return buildMetadata({
    title: `Saad Vault | ${product.name}`,
    description: product.shortDescription,
    path: `/tools/${product.slug}`,
    image: product.image,
  });
}

export default async function ToolDetailsPage({ params }: ToolDetailsPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <PageContainer className="pb-16 pt-10 sm:pt-14">
      <ToolDetailsView product={product} />
    </PageContainer>
  );
}

