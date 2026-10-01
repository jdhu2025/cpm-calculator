import SeoToolPage, { seoMetadata, type SeoToolConfig } from "../components/SeoToolPage";

const config: SeoToolConfig = {
  slug: "impressions-calculator",
  title: "Ad Impressions Calculator: Estimate Your Advertising Reach",
  description: "Estimate how many ad impressions your budget can buy at a target CPM with this free impressions calculator.",
  h1: "Ad Impressions Calculator",
  eyebrow: "TURN CPM INTO EXPECTED REACH",
  intro: "Estimate the number of ad impressions you can buy from your budget and target CPM, then use the result to plan your media reach.",
  variant: "impressions",
  formula: "Estimated impressions = budget ÷ CPM × 1,000",
  example: "A $500 budget at a $5 CPM can buy approximately 100,000 impressions before any additional fees or delivery limits.",
  sections: [
    { heading: "What are ad impressions?", body: "An impression is one recorded opportunity for an ad to be shown. Impressions are not the same as unique people reached: the same person may see an ad more than once. For awareness campaigns, review impressions together with reach and average frequency." },
    { heading: "How CPM changes your expected impressions", body: "With the same budget, a lower CPM produces more impressions mathematically. However, the lowest CPM is not automatically the best outcome. A channel with a higher CPM may reach a more relevant audience or produce better clicks, leads or sales." },
    { heading: "Use a frequency assumption for reach", body: "If your campaign has an average frequency of 2.5, one million impressions represent roughly 400,000 estimated people reached. Treat frequency as a planning assumption and replace it with the actual value reported by your ad platform." },
  ],
  faqs: [
    { question: "Are impressions the same as reach?", answer: "No. Impressions count total ad displays. Reach estimates unique people. If frequency is known, estimated reach is impressions divided by average frequency." },
    { question: "Can I calculate impressions without knowing CPM?", answer: "You need a CPM assumption or actual CPM to estimate impressions. If you have historical campaign data, use your recent CPM as the starting point." },
    { question: "Why did my actual impressions differ from the estimate?", answer: "Auction competition, audience size, placements, budget pacing, ad quality, seasonality and platform delivery rules can all change actual CPM and impressions." },
  ],
};

export const metadata = seoMetadata(config);
export default function ImpressionsCalculatorPage() { return <SeoToolPage config={config} />; }
