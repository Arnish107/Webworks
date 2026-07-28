import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/menu",
    "/private-events",
    "/about",
    "/gallery",
    "/reservations",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/reservations" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/reservations" ? 0.9 : 0.7,
  }));
}
