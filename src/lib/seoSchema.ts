// Schema.org structured data generators for better SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Baba Adhesive",
  "url": "https://www.babadhesive.com",
  "logo": "https://www.babadhesive.com/logo.png",
  "description": "Premium adhesive manufacturer in Moradabad specializing in panel fixing, furniture, and industrial adhesives",
  "sameAs": [
    "https://www.facebook.com/babadhesive",
    "https://www.instagram.com/babadhesive",
    "https://www.linkedin.com/company/babadhesive"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "telephone": "+91-863-043-4973",
    "email": "info@babadhesive.com"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Baba Adhesive",
  "image": "https://www.babadhesive.com/logo.png",
  "description": "Premium Adhesive Supplier in Moradabad - Panel Fixing Adhesive, Furniture Adhesive, Industrial Glue",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Moradabad",
    "addressLocality": "Moradabad",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "244001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.8385",
    "longitude": "77.7064"
  },
  "url": "https://www.babadhesive.com",
  "telephone": "+91-863-043-4973",
  "priceRange": "₹500-₹10000",
  "areaServed": [
    "Moradabad",
    "Uttar Pradesh",
    "Delhi",
    "NCR",
    "India"
  ],
  "serviceType": [
    "Adhesive Supply",
    "Panel Fixing",
    "Furniture Glue",
    "Industrial Adhesive",
    "WPC Adhesive",
    "PVC Adhesive"
  ]
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://www.babadhesive.com${item.url}`
  }))
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const productSchema = (product: {
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
}) => ({
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image || "https://www.babadhesive.com/logo.png",
  "category": product.category,
  "brand": {
    "@type": "Brand",
    "name": "Baba Adhesive"
  },
  "offers": {
    "@type": "Offer",
    "url": `https://www.babadhesive.com/products`,
    "priceCurrency": "INR",
    "price": product.price.toString(),
    "availability": "https://schema.org/InStock"
  }
});

export const aggregateRatingSchema = (ratingValue: number, reviewCount: number) => ({
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "ratingValue": ratingValue.toString(),
  "reviewCount": reviewCount.toString()
});
