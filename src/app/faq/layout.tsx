import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs - Baba Adhesive | Panel Fixing, Furniture & Industrial Adhesive Questions",
  description: "Frequently asked questions about Baba Adhesive products - Panel Glue+, WPC Adhesive, PVC Adhesive. Get answers about applications, usage, and bulk orders.",
  keywords: [
    "adhesive FAQ",
    "panel glue questions",
    "adhesive application",
    "WPC adhesive uses",
    "PVC adhesive uses",
    "furniture glue questions",
    "industrial adhesive FAQ"
  ],
  alternates: {
    canonical: "https://www.babaadhesive.in/faq",
  },
  openGraph: {
    title: "FAQs - Baba Adhesive",
    description: "Frequently asked questions about Baba Adhesive products and applications",
    url: "https://www.babaadhesive.in/faq",
    type: "website",
  }
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
