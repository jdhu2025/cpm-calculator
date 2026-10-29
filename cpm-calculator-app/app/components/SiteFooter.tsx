import Link from "next/link";

export default function SiteFooter({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <footer className="seo-page-footer shell">
        <span>© 2026 CPM.calc</span>
        <span>Planning estimates, not campaign guarantees.</span>
        <nav className="footer-legal-links" aria-label="Legal and support">
          <Link href="/support/">Support</Link>
          <Link href="/privacy/">Privacy</Link>
          <Link href="/terms/">Terms</Link>
        </nav>
      </footer>
    );
  }

  return (
    <footer className="site-footer shell">
      <div className="footer-brand"><span className="brand-mark">↗</span><span>CPM<span className="brand-dot">.</span>calc</span></div>
      <p>Free tools for sharper media decisions.</p>
      <div className="footer-links">
        <a href="#calculator">Calculator</a>
        <a href="#ai-analysis">AI planner</a>
        <a href="#how-it-works">How it works</a>
        <Link href="/ad-budget-calculator/">Ad budget</Link>
        <Link href="/impressions-calculator/">Impressions</Link>
        <Link href="/reverse-cpm-calculator/">Reverse CPM</Link>
        <Link href="/cpm-formula/">CPM formula</Link>
      </div>
      <nav className="footer-legal-links" aria-label="Legal and support">
        <Link href="/support/">Support</Link>
        <Link href="/privacy/">Privacy</Link>
        <Link href="/terms/">Terms</Link>
      </nav>
      <span className="footer-note">© 2026 CPM.calc</span>
    </footer>
  );
}
