import type { Metadata } from "next";

const siteUrl = "https://www.babadhesive.com";

export const metadata: Metadata = {
  title: "Contact Baba Adhesive | Adhesive Supplier in Moradabad",
  description:
    "Get in touch with Baba Adhesive for product inquiries, bulk orders, pricing, and support. Located in Moradabad, Uttar Pradesh. Phone: +91 863 043 4973.",
  keywords: [
    "contact Baba Adhesive",
    "adhesive supplier contact",
    "Moradabad adhesive",
    "adhesive inquiry",
    "bulk order adhesive",
    "adhesive customer service",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Baba Adhesive | Adhesive Supplier in Moradabad",
    description:
      "Reach out to Baba Adhesive for premium adhesive solutions, quotes, and customer support.",
    url: `${siteUrl}/contact`,
    type: "website",
    siteName: "Baba Adhesive",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Baba Adhesive",
    description:
      "Connect for adhesive quotes, product details, and order assistance.",
    images: ["/logo.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
