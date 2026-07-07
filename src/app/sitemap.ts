import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { verticals } from "@/lib/verticals";
import { productCategories } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticRoutes = [
    "",
    "/about",
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

  const verticalEntries: MetadataRoute.Sitemap = verticals.map((v) => ({
    url: `${base}/industries/${v.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const childEntries: MetadataRoute.Sitemap = verticals.flatMap((v) =>
    (v.children ?? []).map((c) => ({
      url: `${base}/industries/${v.slug}/${c.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  );

  const productEntries: MetadataRoute.Sitemap = productCategories.map((c) => ({
    url: `${base}/products/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...verticalEntries, ...childEntries, ...productEntries];
}
