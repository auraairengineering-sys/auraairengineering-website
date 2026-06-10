import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { solutions } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticRoutes = [
    "",
    "/about",
    "/solutions",
    "/industries",
    "/products",
    "/projects",
    "/insights",
    "/careers",
    "/contact",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const solutionEntries: MetadataRoute.Sitemap = solutions.map((s) => ({
    url: `${base}/solutions/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...solutionEntries];
}
