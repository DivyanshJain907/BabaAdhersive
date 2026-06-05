import type { Metadata } from "next";

const siteUrl = "https://www.babaadhesive.in";

export const metadata: Metadata = {
  title: "Premium Adhesive Products | Panel Fixing, Furniture & Industrial Glue | Baba Adhesive",
  description:
    "Browse Baba Adhesive's range of high-performance adhesives: Panel Fixing Adhesive, Furniture Adhesive, Industrial Glue, and Waterproof Adhesive. Quality adhesive solutions for construction, furniture, and industrial applications.",
  keywords: [
    "panel fixing adhesive",
    "furniture adhesive supplier",
    "industrial glue",
    "waterproof adhesive",
    "construction adhesive",
    "quality adhesive products",
    "adhesive for panels",
    "furniture bonding adhesive",
    "industrial strength glue",
    "waterproof construction adhesive",
    "premium adhesive solutions",
    "adhesive products Moradabad",
    "bulk adhesive supplier",
    "professional grade adhesive",
    "wood adhesive",
    "ceramic adhesive",
    "tile adhesive",
    "metal bonding glue",
    "plastic adhesive",
    "multipurpose adhesive",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Premium Adhesive Products | Baba Adhesive",
    description:
      "Discover our premium adhesive solutions for construction, furniture, and industrial applications.",
    url: `${siteUrl}/products`,
    type: "website",
    siteName: "Baba Adhesive",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Adhesive Products | Baba Adhesive",
    description:
      "High-quality adhesives for construction, furniture, and industrial applications.",
    images: ["/logo.png"],
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
