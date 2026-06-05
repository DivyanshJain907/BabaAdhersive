import type { Metadata } from "next";

const siteUrl = "https://www.babaadhesive.in";

export const metadata: Metadata = {
  title: "About Baba Adhesive | Leading Adhesive Manufacturer in Moradabad",
  description:
    "Discover Baba Adhesive's mission to provide premium adhesive solutions for construction, furniture, and industrial applications. Based in Moradabad, Uttar Pradesh, we deliver quality adhesives with reliable service.",
  keywords: [
    "about Baba Adhesive",
    "adhesive manufacturer Moradabad",
    "company profile",
    "adhesive solutions provider",
    "quality adhesive manufacturer",
    "trusted adhesive supplier",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Baba Adhesive | Leading Adhesive Manufacturer in Moradabad",
    description:
      "Baba Adhesive specializes in premium adhesive solutions for construction, furniture, and industrial applications across Uttar Pradesh.",
    url: `${siteUrl}/about`,
    type: "website",
    siteName: "Baba Adhesive",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Baba Adhesive",
    description:
      "Premium adhesive manufacturer with a commitment to quality and customer satisfaction.",
    images: ["/logo.png"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
