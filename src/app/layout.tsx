import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const siteUrl = "https://www.babadhesive.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Premium Adhesive Products in Moradabad | Panel Fixing, Furniture & Industrial Glue | Baba Adhesive",
    template: "%s | Baba Adhesive",
  },
  description: "Baba Adhesive offers high-quality adhesive solutions for construction, furniture, and industrial applications in Moradabad. Specializing in Panel Fixing Adhesive, Furniture Adhesive, Industrial Glue, and Waterproof Adhesive. Contact +91 863 043 4973 for premium adhesive products.",
  applicationName: "Baba Adhesive",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Baba Adhesive",
    "adhesive supplier Moradabad",
    "panel fixing adhesive",
    "furniture adhesive supplier",
    "industrial glue manufacturer",
    "waterproof adhesive",
    "construction adhesive Moradabad",
    "best adhesive products",
    "high-quality glue supplier",
    "adhesive distributor Uttar Pradesh",
    "panel adhesive Moradabad",
    "furniture glue",
    "industrial adhesive solutions",
    "waterproof glue supplier",
    "adhesive for construction",
    "wood adhesive supplier",
    "strong adhesive products",
    "adhesive manufacturer near me",
    "bulk adhesive supplier",
    "professional adhesive solutions",
    "adhesive for furniture",
    "construction glue Uttar Pradesh",
    "quality adhesive products",
    "adhesive supplier near me",
    "certified adhesive manufacturer",
  ],
  authors: [{ name: "Baba Adhesive" }],
  creator: "Baba Adhesive",
  publisher: "Baba Adhesive",
  category: "Adhesive Manufacturer & Supplier",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google7335ea3e6df0c5c0",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Baba Adhesive",
    title: "Premium Adhesive Products in Moradabad | Panel Fixing, Furniture & Industrial Glue | Baba Adhesive",
    description: "High-quality adhesive solutions for construction, furniture, and industrial applications. Panel Fixing Adhesive, Furniture Adhesive, Industrial Glue, and Waterproof Adhesive from Baba Adhesive.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Baba Adhesive Logo - Premium Adhesive Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Adhesive Products | Baba Adhesive",
    description: "High-quality adhesives for construction, furniture, and industrial applications in Moradabad.",
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "Baba Adhesive",
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`,
        "description": "Premium adhesive manufacturer in Moradabad for Panel Glue+, WPC Adhesive, PVC Adhesive for construction, furniture, and composite applications.",
        "telephone": "+91-863-043-4973",
        "email": "suneja053@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Suneja enterprises, Rampur Rd, Malviya Nagar, Budh Bazaar",
          "addressLocality": "Moradabad",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "244001",
          "addressCountry": "IN"
        },
        "areaServed": "Uttar Pradesh, India"
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        "name": "Baba Adhesive",
        "url": siteUrl,
        "image": `${siteUrl}/logo.png`,
        "description": "Professional adhesive supplier in Moradabad for Panel Glue+, WPC Adhesive, PVC Adhesive and panel fixing solutions.",
        "telephone": "+91-863-043-4973",
        "email": "suneja053@gmail.com",
        "areaServed": "Uttar Pradesh, India",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Moradabad",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "244001",
          "addressCountry": "IN"
        },
        "priceRange": "$$$"
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "Baba Adhesive",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${siteUrl}/products?search={search_term_string}`,
          "query-input": "required name=search_term_string"
        },
        "publisher": {
          "@id": `${siteUrl}/#organization`
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18052344301"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18052344301');
          `}
        </Script>

        {/* JSON-LD Structured Data for Google Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="bg-white text-gray-700 pt-16 md:pt-32">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
