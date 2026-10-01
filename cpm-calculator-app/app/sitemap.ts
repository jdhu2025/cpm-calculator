import type { MetadataRoute } from "next";
import { siteUrl } from "./site";

export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    ["/", "monthly", 1],
    ["/ad-budget-calculator/", "monthly", 0.9],
    ["/impressions-calculator/", "monthly", 0.9],
    ["/reverse-cpm-calculator/", "monthly", 0.85],
    ["/cpm-formula/", "monthly", 0.8],
  ] as const;
  return pages.map(([path, changeFrequency, priority]) => ({ url: `${siteUrl}${path}`, lastModified: new Date(), changeFrequency, priority }));
}
