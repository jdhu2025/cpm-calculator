import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import { siteUrl } from "../site";

export const metadata: Metadata = {
  title: "Privacy Policy | CPM.calc",
  description: "How CPM.calc handles calculator inputs, campaign-planning requests, and support information.",
  alternates: { canonical: `${siteUrl}/privacy/` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return <>
    <header className="seo-page-nav shell">
      <Link className="brand" href="/"><span className="brand-mark">↗</span><span>CPM<span className="brand-dot">.</span>calc</span></Link>
      <nav><Link href="/">Calculator</Link><Link href="/support/">Support</Link></nav>
    </header>
    <main className="legal-page shell">
      <p className="eyebrow"><span className="eyebrow-dot" /> CPM.calc policies</p>
      <h1>Privacy Policy</h1>
      <p className="legal-intro">Last updated October 29, 2026. This page describes the data flow implemented by the current CPM.calc application.</p>
      <section><h2>What the basic calculator does</h2><p>The basic CPM, budget, and impressions calculations run in your browser. The application does not provide accounts, saved projects, or a calculation history feature in the current release.</p></section>
      <section><h2>Campaign planner requests</h2><p>When you submit the campaign planner, the values in that form are sent to the CPM.calc application endpoint so it can return a planning result. If an external AI provider is configured by the site operator, the server may forward that request to the configured provider. If no provider is configured, the application uses its local estimate fallback. Do not enter confidential campaign, customer, or personal information.</p></section>
      <section><h2>Downloads and local storage</h2><p>The printable campaign report is assembled in your browser and downloaded by your browser. CPM.calc does not currently provide a hosted report library or a user account. Your browser, hosting provider, or configured AI provider may have their own logs and policies.</p></section>
      <section><h2>Cookies and analytics</h2><p>The current repository does not include an analytics identifier, advertising pixel, or account system. Hosting infrastructure may still create technical logs needed to deliver the site and prevent abuse. This policy will be updated before any additional tracking or account feature is enabled.</p></section>
      <section><h2>Support</h2><p>Use the <Link href="/support/">support page</Link> or email <a href="mailto:support@cpm-calculator.xyz">support@cpm-calculator.xyz</a> for product questions. Do not include confidential campaign, customer, or personal information in a support message.</p></section>
      <section><h2>Changes</h2><p>This policy may change when the product or its data flows change. The date above identifies the current version.</p></section>
    </main>
    <SiteFooter compact />
  </>;
}
