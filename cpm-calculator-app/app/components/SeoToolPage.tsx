import Link from "next/link";
import type { Metadata } from "next";
import KeywordCalculator, { type KeywordCalculatorVariant } from "./KeywordCalculator";

export type SeoToolConfig = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  variant: KeywordCalculatorVariant;
  formula: string;
  example: string;
  sections: { heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
};

export function seoMetadata(config: SeoToolConfig): Metadata {
  return {
    title: config.title,
    description: config.description,
    alternates: { canonical: `/${config.slug}/` },
    robots: { index: true, follow: true },
    openGraph: { type: "website", title: config.title, description: config.description, url: `/${config.slug}/`, siteName: "CPM.calc" },
    twitter: { card: "summary", title: config.title, description: config.description },
  };
}

const related = [
  ["/", "CPM Calculator"],
  ["/ad-budget-calculator/", "Ad Budget Calculator"],
  ["/impressions-calculator/", "Impressions Calculator"],
  ["/reverse-cpm-calculator/", "Reverse CPM Calculator"],
  ["/cpm-formula/", "CPM Formula Guide"],
];

export default function SeoToolPage({ config }: { config: SeoToolConfig }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: config.h1,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    description: config.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    ...(siteUrl ? { url: `${siteUrl.replace(/\/$/, "")}/${config.slug}/` } : {}),
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><header className="seo-page-nav shell"><Link className="brand" href="/"><span className="brand-mark">↗</span><span>CPM<span className="brand-dot">.</span>calc</span></Link><nav><Link href="/">CPM Calculator</Link><Link href="/#ai-analysis">AI campaign planner</Link></nav></header><main className="seo-page"><section className="seo-page-hero shell"><div><p className="eyebrow"><span className="eyebrow-dot" /> {config.eyebrow}</p><h1>{config.h1}</h1><p className="seo-page-intro">{config.intro}</p><div className="seo-page-trust"><span>Free to use</span><span>No sign-up</span><span>Instant result</span></div></div><KeywordCalculator variant={config.variant} /></section><section className="seo-article shell"><div className="seo-article-main"><p className="article-kicker">THE QUICK ANSWER</p><h2>Use this formula</h2><p className="formula-callout">{config.formula}</p><p>{config.example}</p>{config.sections.map((section) => <article key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></article>)}<section className="seo-faq"><h2>Frequently asked questions</h2>{config.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section></div><aside className="related-tools"><span className="card-overline">Related tools</span><h2>Keep planning</h2>{related.filter(([, label]) => label !== config.h1).map(([href, label]) => <Link href={href} key={href}>{label}<span>↗</span></Link>)}<div className="related-cta"><strong>Compare channels with AI</strong><p>Bring your budget and target into a broader media plan.</p><Link href="/#ai-analysis">Open AI planner ↗</Link></div></aside></section></main><footer className="seo-page-footer shell"><span>© 2026 CPM.calc</span><span>Planning estimates, not campaign guarantees.</span></footer></>;
}
