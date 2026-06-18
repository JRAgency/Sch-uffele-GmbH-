import type { MetadataRoute } from "next";

const base = "https://schaeuffele-gmbh.example"; // TODO Kunde: finale Domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
