import type { Metadata } from "next";
import "../styles.css";
import { siteUrl } from "./site";

export const metadata: Metadata = {
  title: "CPM Calculator: Calculate Cost Per Thousand Impressions",
  description: "Free CPM calculator for ad spend and impressions. Calculate cost per 1,000 impressions, estimate budgets, compare channels, and plan your next campaign.",
  metadataBase: new URL(siteUrl),
  keywords: ["cpm calculator", "calculate cpm", "advertising budget calculator", "impressions calculator", "ad spend calculator"],
  alternates: { canonical: `${siteUrl}/` },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  openGraph: {
    type: "website",
    title: "CPM Calculator: Calculate Cost Per Thousand Impressions",
    description: "Free CPM calculator for ad spend and impressions. Calculate cost per 1,000 impressions, estimate budgets, compare channels, and plan your next campaign.",
    siteName: "CPM.calc",
    url: `${siteUrl}/`,
  },
  twitter: {
    card: "summary",
    title: "CPM Calculator: Calculate Cost Per Thousand Impressions",
    description: "Free CPM calculator for ad spend and impressions. Calculate cost per 1,000 impressions, estimate budgets, compare channels, and plan your next campaign.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
