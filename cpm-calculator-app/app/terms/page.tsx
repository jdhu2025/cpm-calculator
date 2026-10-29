import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import { siteUrl } from "../site";

export const metadata: Metadata = {
  title: "Terms of Use | CPM.calc",
  description: "Terms for using the free CPM.calc advertising calculation and planning tools.",
  alternates: { canonical: `${siteUrl}/terms/` },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return <>
    <header className="seo-page-nav shell">
      <Link className="brand" href="/"><span className="brand-mark">↗</span><span>CPM<span className="brand-dot">.</span>calc</span></Link>
      <nav><Link href="/">Calculator</Link><Link href="/support/">Support</Link></nav>
    </header>
    <main className="legal-page shell">
      <p className="eyebrow"><span className="eyebrow-dot" /> CPM.calc policies</p>
      <h1>Terms of Use</h1>
      <p className="legal-intro">Last updated October 29, 2026. By using CPM.calc, you agree to these terms.</p>
      <section><h2>Informational planning tool</h2><p>CPM.calc provides arithmetic calculations and planning estimates for advertising and media decisions. Results depend on the values and assumptions you provide. They are not a quote, forecast, promise, or guarantee of delivery, reach, clicks, conversions, or campaign performance.</p></section>
      <section><h2>Use the result responsibly</h2><p>Check the campaign scope, currency, date range, impressions, fees, taxes, and platform assumptions before relying on a result. Add production, agency, platform, and other costs that are outside the calculation. You remain responsible for decisions made using the tool.</p></section>
      <section><h2>Campaign planner output</h2><p>The campaign planner may use a configured external provider or the local estimate fallback. Output can be incomplete or inaccurate and should be reviewed before being used in a media plan. Do not submit confidential, regulated, or personal information.</p></section>
      <section><h2>Availability and changes</h2><p>The tools are provided as currently available and may change, be interrupted, or be removed. CPM.calc does not promise a particular uptime, result, data retention period, or compatibility with any advertising platform.</p></section>
      <section><h2>Prohibited use</h2><p>Do not use the service to bypass access controls, automate abuse, submit spam, misrepresent an identity or affiliation, or interfere with the service or its providers.</p></section>
      <section><h2>Questions</h2><p>Review the <Link href="/support/">support page</Link> for the currently available support path. These terms do not create a company, partnership, agency, or official relationship with any advertising platform.</p></section>
    </main>
    <SiteFooter compact />
  </>;
}
