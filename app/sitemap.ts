import type { MetadataRoute } from "next";
import { services } from "@/lib/site";

const base = "https://schaeuffele-gmbh.example"; // TODO Kunde: finale Domain

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/leistungen", "/unternehmen", "/kontakt", "/impressum", "/datenschutz"];
  const routes: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${base}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
  services.forEach((s) => {
    routes.push({
      url: `${base}/leistungen/${s.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  });
  return routes;
}
