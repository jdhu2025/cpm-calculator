import SeoToolPage, { seoMetadata, type SeoToolConfig } from "../components/SeoToolPage";

const config: SeoToolConfig = {
  slug: "ad-budget-calculator",
  title: "Advertising Budget Calculator: Estimate Your Ad Spend",
  description: "Use this advertising budget calculator to estimate the budget required for your target impressions and CPM.",
  h1: "Advertising Budget Calculator",
  eyebrow: "REVERSE-PLAN YOUR MEDIA SPEND",
  intro: "Find the budget required to buy a target number of ad impressions at your target CPM. Start with the numbers you already know.",
  variant: "budget",
  formula: "Required budget = target impressions ÷ 1,000 × target CPM",
  example: "For example, 100,000 impressions at a $5 CPM requires an estimated $500 budget. This is a planning calculation, not a platform quote.",
  sections: [
    { heading: "How to estimate an advertising budget", body: "Start with the reach you want to buy and the CPM you are willing to pay. Divide impressions by 1,000, then multiply by the target CPM. Add a testing reserve when you launch a new campaign because real auction prices change by audience, placement, season and creative quality." },
    { heading: "Plan a test budget before scaling", body: "A practical first plan is to keep most of the budget for the leading channel and reserve 15% to 20% for testing another channel, audience or creative. Once actual CPM, click-through rate and conversion quality are available, move spend toward the combination that is producing useful business results." },
    { heading: "Compare budget needs across channels", body: "The same impression target can require very different budgets on Meta, Google Display, YouTube, TikTok or LinkedIn. Use the AI campaign planner to compare planning assumptions, platform fit and trade-offs rather than choosing a channel only because its CPM looks cheapest." },
  ],
  faqs: [
    { question: "What information do I need to calculate an ad budget?", answer: "You need a target number of impressions and a target CPM. If you do not know the CPM, use a small test and replace the planning assumption with your actual campaign CPM." },
    { question: "Does this calculator include ad platform fees?", answer: "No. It estimates media spend from CPM and impressions. Add agency fees, creative production, taxes and platform-specific charges separately." },
    { question: "Should I use one CPM for every platform?", answer: "Not usually. CPM varies across platforms and objectives. Compare each channel with its own planning assumption and evaluate clicks or conversions as well as impressions." },
  ],
};

export const metadata = seoMetadata(config);
export default function AdBudgetCalculatorPage() { return <SeoToolPage config={config} />; }
