import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import { siteUrl } from "../site";

export const metadata: Metadata = {
  title: "Support | CPM.calc",
  description: "Support information for the CPM.calc advertising calculator and campaign planner.",
  alternates: { canonical: `${siteUrl}/support/` },
  robots: { index: true, follow: true },
};

export default function SupportPage() {
  return <>
    <header className="seo-page-nav shell">
      <Link className="brand" href="/"><span className="brand-mark">↗</span><span>CPM<span className="brand-dot">.</span>calc</span></Link>
      <nav><Link href="/">Calculator</Link><Link href="/privacy/">Privacy</Link></nav>
    </header>
    <main className="legal-page shell">
      <p className="eyebrow"><span className="eyebrow-dot" /> CPM.calc support</p>
      <h1>Support</h1>
      <p className="legal-intro">Use this page to check the product scope and prepare a useful issue report. A public support inbox is not configured yet.</p>
      <section><h2>Before reporting a calculation issue</h2><p>Confirm that you used impressions rather than unique reach, that spend and impressions cover the same campaign scope, and that the formula matches the selected mode. The main calculator uses <strong>ad spend ÷ impressions × 1,000</strong>.</p></section>
      <section><h2>What to include</h2><p>Include the page URL, calculation mode, example inputs, browser, and the result you expected. Remove customer names, account identifiers, budgets under confidentiality, and other private campaign details.</p></section>
      <section><h2>Current product boundaries</h2><p>CPM.calc does not provide live platform quotes, account access, campaign execution, guaranteed performance, or a hosted history of your calculations. The campaign planner is an estimate and may use a configured external AI provider.</p></section>
      <section><h2>Return to the tool</h2><p>Open the <Link href="/">CPM calculator</Link> or read the <Link href="/privacy/">privacy policy</Link> and <Link href="/terms/">terms of use</Link> before using the planner.</p></section>
      <p className="legal-meta">Canonical site: {siteUrl}</p>
    </main>
    <SiteFooter compact />
  </>;
}
