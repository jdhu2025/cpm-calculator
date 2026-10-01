import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, "");
  const pages = [
    ["/", "monthly", 1],
    ["/ad-budget-calculator/", "monthly", 0.9],
    ["/impressions-calculator/", "monthly", 0.9],
    ["/reverse-cpm-calculator/", "monthly", 0.85],
    ["/cpm-formula/", "monthly", 0.8],
  ] as const;
  return pages.map(([path, changeFrequency, priority]) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency, priority }));
}
