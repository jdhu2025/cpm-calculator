import type { Metadata } from "next";
import "../styles.css";
import { siteUrl } from "./site";

export const metadata: Metadata = {
  title: "CPM Calculator: Calculate Cost Per Thousand Impressions",
  description: "Free CPM Calculator: calculate CPM, reverse-plan ad budgets, compare channels, and get AI campaign strategies for reach, cost, and performance.",
  metadataBase: new URL(siteUrl),
  keywords: ["cpm calculator", "calculate cpm", "advertising budget calculator", "impressions calculator", "ad spend calculator"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  openGraph: {
    type: "website",
    title: "CPM Calculator: Calculate Cost Per Thousand Impressions",
    description: "Calculate CPM, reverse-plan ad budgets, compare advertising channels, and get a free AI campaign strategy.",
    siteName: "CPM.calc",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "CPM Calculator: Calculate Cost Per Thousand Impressions",
    description: "Calculate CPM, reverse-plan ad budgets, compare channels, and plan campaigns with AI.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
