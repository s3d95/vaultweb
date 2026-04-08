import { Metadata } from "next";

const siteName = "Saad Vault";
const siteUrl = "https://sa3d95.xyz";
const defaultImage = "/og-image.svg";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = defaultImage,
}: MetadataInput): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: `${siteName} preview` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const defaultDescription =
  "Saad Vault is the premium software hub for precision-built Windows tools, launch-ready utilities, and productivity systems by Saad.";
