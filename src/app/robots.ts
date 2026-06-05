import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api", "/demo", "/_next", "/static"],
      },
    ],
    sitemap: [
      "https://www.babaadhesive.in/sitemap.xml",
    ],
    host: "https://www.babaadhesive.in",
  };
}
