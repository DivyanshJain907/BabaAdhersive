import type { Metadata } from "next";

const siteUrl = "https://www.babadhesive.com";

export const metadata: Metadata = {
  title: "Request Adhesive Quote | Baba Adhesive",
  description:
    "Request a competitive quote for panel fixing adhesive, furniture adhesive, industrial glue, waterproof adhesive, and bulk adhesive orders. Quick response and reliable delivery.",
  keywords: [
    "adhesive quote",
    "request quote adhesive",
    "bulk adhesive order",
    "adhesive pricing",
    "wholesale adhesive",
    "custom adhesive quote",
  ],
  alternates: {
    canonical: "/quote",
  },
  openGraph: {
    title: "Request Adhesive Quote | Baba Adhesive",
    description:
      "Get fast, competitive quotations for premium adhesive products and bulk requirements.",
    url: `${siteUrl}/quote`,
    type: "website",
    siteName: "Baba Adhesive",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request Adhesive Quote | Baba Adhesive",
    description:
      "Submit your requirement and receive a fast adhesive quotation.",
    images: ["/logo.png"],
  },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
