import SeoToolPage, { seoMetadata, type SeoToolConfig } from "../components/SeoToolPage";

const config: SeoToolConfig = {
  slug: "impressions-calculator",
  title: "Ad Impressions Calculator: Estimate Your Advertising Reach",
  description: "Estimate ad impressions from your budget and target CPM with this free tool. Plan reach, compare media costs, and understand frequency before launch.",
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
  keyTakeaways: [
    "Estimated impressions are a forecast, not a guaranteed delivery volume.",
    "Budget, target CPM and the 1,000 multiplier are the only inputs needed for the basic estimate.",
    "Translate impressions into reach with frequency when planning awareness campaigns.",
  ],
  extraSections: [
    { heading: "How to forecast impressions before launch", body: "Start with the amount available for media, not the total marketing budget. Choose a CPM assumption based on a comparable platform, audience and format, then calculate budget ÷ CPM × 1,000. For example, $2,400 at a $6 CPM suggests 400,000 impressions. Keep the assumption visible in the media plan so you can replace it with the actual CPM after the first delivery data arrives." },
    { heading: "Why an estimate can miss the final result", body: "Ad auctions change as audiences saturate, competitors enter, placements become limited and budgets are paced. A campaign can also underspend if the audience is too narrow or the bid strategy limits delivery. Use a low, expected and high CPM scenario when the impression target matters, and monitor both total impressions and unique reach during the flight." },
  ],
  faqs: [
    { question: "Are impressions the same as reach?", answer: "No. Impressions count total ad displays. Reach estimates unique people. If frequency is known, estimated reach is impressions divided by average frequency." },
    { question: "Can I calculate impressions without knowing CPM?", answer: "You need a CPM assumption or actual CPM to estimate impressions. If you have historical campaign data, use your recent CPM as the starting point." },
    { question: "Why did my actual impressions differ from the estimate?", answer: "Auction competition, audience size, placements, budget pacing, ad quality, seasonality and platform delivery rules can all change actual CPM and impressions." },
  ],
};

export const metadata = seoMetadata(config);
export default function ImpressionsCalculatorPage() { return <SeoToolPage config={config} />; }
