import type { Metadata } from "next";

const siteUrl = "https://www.babaadhesive.in";

export const metadata: Metadata = {
  title: "Customer Testimonials | Baba Adhesive Reviews",
  description:
    "Read customer testimonials and reviews for Baba Adhesive. Learn why contractors, builders, and manufacturers trust our premium adhesive products and reliable service.",
  keywords: [
    "Baba Adhesive reviews",
    "customer testimonials adhesive",
    "adhesive reviews",
    "customer feedback",
    "quality adhesive testimonials",
    "trusted adhesive supplier reviews",
  ],
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Customer Testimonials | Baba Adhesive",
    description:
      "See what customers say about our product quality, pricing, and delivery reliability.",
    url: `${siteUrl}/testimonials`,
    type: "website",
    siteName: "Baba Adhesive",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Testimonials | Baba Adhesive",
    description:
      "Customer feedback on adhesive product quality and service experience.",
    images: ["/logo.png"],
  },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
