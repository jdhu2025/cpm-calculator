import Link from "next/link";
import type { Metadata } from "next";
import { siteUrl } from "../site";

export type ResourceSection = {
  heading: string;
  paragraphs: string[];
};

export type ResourcePageConfig = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  quickAnswer: string;
  published: string;
  updated: string;
  takeaways: string[];
  sections: ResourceSection[];
  faqs: { question: string; answer: string }[];
};

export function resourceMetadata(config: ResourcePageConfig): Metadata {
  return {
    title: config.title,
    description: config.description,
    alternates: { canonical: `${siteUrl}/resources/${config.slug}/` },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      title: config.title,
      description: config.description,
      url: `${siteUrl}/resources/${config.slug}/`,
      siteName: "CPM.calc",
      publishedTime: config.published,
      modifiedTime: config.updated,
    },
    twitter: { card: "summary", title: config.title, description: config.description },
  };
}

const tools = [
  ["/", "CPM Calculator"],
  ["/cpm-formula/", "CPM Formula Guide"],
  ["/ad-budget-calculator/", "Ad Budget Calculator"],
  ["/impressions-calculator/", "Impressions Calculator"],
  ["/reverse-cpm-calculator/", "Reverse CPM Calculator"],
] as const;

export default function ResourcePage({ config }: { config: ResourcePageConfig }) {
  const url = `${siteUrl}/resources/${config.slug}/`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: config.h1,
      description: config.description,
      mainEntityOfPage: url,
      datePublished: config.published,
      dateModified: config.updated,
      author: { "@type": "Organization", name: "CPM.calc", url: siteUrl },
      publisher: { "@type": "Organization", name: "CPM.calc", url: siteUrl },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Resources", item: `${siteUrl}/resources/` },
        { "@type": "ListItem", position: 3, name: config.h1, item: url },
      ],
    },
  ];

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <header className="seo-page-nav shell"><Link className="brand" href="/"><span className="brand-mark">↗</span><span>CPM<span className="brand-dot">.</span>calc</span></Link><nav><Link href="/">Calculator</Link><Link href="/cpm-formula/">CPM Formula</Link><Link href="/#ai-analysis">AI campaign planner</Link></nav></header>
    <main className="resource-page">
      <section className="resource-hero shell">
        <p className="eyebrow"><span className="eyebrow-dot" /> {config.eyebrow}</p>
        <h1>{config.h1}</h1>
        <p className="resource-intro">{config.intro}</p>
        <div className="resource-byline"><span>By CPM.calc editorial team</span><span>Published {config.published}</span><span>Updated {config.updated}</span></div>
      </section>
      <section className="resource-layout shell">
        <article className="resource-article">
          <div className="quick-answer"><span>QUICK ANSWER</span><p>{config.quickAnswer}</p></div>
          <section className="resource-takeaways"><h2>Key takeaways</h2><ul>{config.takeaways.map((item) => <li key={item}>{item}</li>)}</ul></section>
          {config.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
          <section className="seo-faq resource-faq"><h2>Frequently asked questions</h2>{config.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
        </article>
        <aside className="related-tools resource-rail"><span className="card-overline">Use the numbers</span><h2>Free tools</h2>{tools.map(([href, label]) => <Link href={href} key={href}>{label}<span>↗</span></Link>)}<div className="related-cta"><strong>Need a plan, not just a result?</strong><p>Compare budget, reach, and channel trade-offs in the campaign planner.</p><Link href="/#ai-analysis">Open AI planner ↗</Link></div></aside>
      </section>
    </main>
    <footer className="seo-page-footer shell"><span>© 2026 CPM.calc</span><span>Educational guidance, not a guarantee of ad performance.</span></footer>
  </>;
}
