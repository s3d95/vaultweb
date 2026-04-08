export type ProductStatus = "Released" | "Beta" | "Coming Soon";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  status: ProductStatus;
  version: string;
  platform: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  image: string;
  gallery: string[];
  downloadUrl?: string;
  githubUrl?: string;
  tags: string[];
};

