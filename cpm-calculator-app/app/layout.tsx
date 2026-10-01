import type { Metadata } from "next";
import "../styles.css";

export const metadata: Metadata = {
  title: "CPM Calculator: Calculate Cost Per Thousand Impressions",
  description: "Free CPM Calculator: calculate CPM, reverse-plan ad budgets, compare channels, and get AI campaign strategies for reach, cost, and performance.",
  alternates: { canonical: "/cpm-calculator/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
