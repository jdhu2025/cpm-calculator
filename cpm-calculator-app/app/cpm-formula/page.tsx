import SeoToolPage, { seoMetadata, type SeoToolConfig } from "../components/SeoToolPage";

const config: SeoToolConfig = {
  slug: "cpm-formula",
  title: "CPM Formula: How to Calculate Cost Per 1,000 Impressions",
  description: "Learn the CPM formula, see a worked example, and calculate cost per 1,000 advertising impressions for free.",
  h1: "CPM Formula and Calculation Guide",
  eyebrow: "UNDERSTAND THE ADVERTISING METRIC",
  intro: "Learn what CPM means, how to calculate it from ad spend and impressions, and how to use it when comparing advertising campaigns.",
  variant: "cpm",
  formula: "CPM = ad spend ÷ impressions × 1,000",
  example: "If you spend $500 and receive 100,000 impressions, divide $500 by 100,000 and multiply by 1,000. The CPM is $5.00.",
  sections: [
    { heading: "What does CPM stand for?", body: "CPM stands for cost per mille. Mille means one thousand, so CPM describes how much an advertiser pays for each thousand ad impressions. It is especially useful for comparing awareness and reach campaigns across placements." },
    { heading: "How to read a CPM result", body: "A $5 CPM means the campaign paid an average of $5 for every 1,000 recorded impressions. CPM does not tell you whether people clicked, converted or remembered the ad, so pair it with CTR, CPC, CPA, conversion rate and reach when evaluating performance." },
    { heading: "CPM, CPC and CPA are different", body: "CPM is impression cost, CPC is click cost and CPA is acquisition cost. A low CPM can still produce expensive clicks or conversions. Choose the metric that matches the campaign objective, then use the other metrics to understand quality and efficiency." },
  ],
  faqs: [
    { question: "How do I calculate CPM from ad spend?", answer: "Divide ad spend by total impressions, then multiply by 1,000. For example, $500 ÷ 100,000 × 1,000 = $5 CPM." },
    { question: "What is a good CPM?", answer: "There is no universal good CPM. It depends on the platform, market, audience, creative, season and objective. Compare campaigns with similar targeting and formats." },
    { question: "Can I calculate budget or impressions from CPM?", answer: "Yes. Use the ad budget calculator to calculate required spend, or the impressions calculator to estimate how much reach a budget can buy." },
  ],
};

export const metadata = seoMetadata(config);
export default function CpmFormulaPage() { return <SeoToolPage config={config} />; }
