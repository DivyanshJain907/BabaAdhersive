import type { Metadata } from "next";

const siteUrl = "https://www.babaadhesive.in";

export const metadata: Metadata = {
  title: "Adhesive Solutions & Services | Baba Adhesive in Moradabad",
  description:
    "Explore Baba Adhesive services including panel fixing adhesive, furniture adhesive, industrial glue, waterproof adhesive, bulk supply, and custom adhesive solutions for construction and industrial applications.",
  keywords: [
    "adhesive services Moradabad",
    "panel fixing adhesive supplier",
    "furniture adhesive services",
    "industrial glue solutions",
    "waterproof adhesive",
    "bulk adhesive supply",
    "custom adhesive solutions",
    "adhesive for construction",
    "professional adhesive services",
    "adhesive distributor",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Adhesive Solutions & Services | Baba Adhesive",
    description:
      "Comprehensive adhesive solutions for construction, furniture, and industrial applications from Baba Adhesive.",
    url: `${siteUrl}/services`,
    type: "website",
    siteName: "Baba Adhesive",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adhesive Solutions & Services | Baba Adhesive",
    description:
      "Premium adhesive solutions and services for construction, furniture, and industrial applications.",
    images: ["/logo.png"],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
