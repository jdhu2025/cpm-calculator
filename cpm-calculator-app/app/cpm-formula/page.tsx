import SeoToolPage, { seoMetadata, type SeoToolConfig } from "../components/SeoToolPage";

const config: SeoToolConfig = {
  slug: "cpm-formula",
  title: "CPM Formula: How to Calculate Cost Per 1,000 Impressions",
  description: "Learn the CPM formula with a worked example. Calculate cost per 1,000 ad impressions, compare CPM with CPC and CPA, and use the result to plan ad campaigns.",
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
  keyTakeaways: [
    "CPM measures the average media cost for 1,000 delivered impressions.",
    "The same formula works for a completed campaign and for a planning estimate.",
    "Use CPM with reach, frequency and conversion metrics instead of judging performance from CPM alone.",
  ],
  extraSections: [
    { heading: "A worked CPM calculation in three steps", body: "First, confirm that ad spend and impressions refer to the same campaign, date range and currency. Next, divide the spend by impressions: $500 ÷ 100,000 = $0.005 per impression. Finally, multiply by 1,000 to normalize the result: $0.005 × 1,000 = $5 CPM. Keeping the units visible makes it easier to catch a mistaken zero or an impression count entered as reach." },
    { heading: "What a CPM number includes", body: "A reported CPM normally describes the cost of delivered media inventory. It does not automatically include creative production, agency fees, sales tax, platform minimums or the value of a click or conversion. When comparing campaigns, use the same cost definition on both sides and record whether the number is a platform-reported CPM or a broader all-in media cost." },
  ],
  faqs: [
    { question: "How do I calculate CPM from ad spend?", answer: "Divide ad spend by total impressions, then multiply by 1,000. For example, $500 ÷ 100,000 × 1,000 = $5 CPM." },
    { question: "What is a good CPM?", answer: "There is no universal good CPM. It depends on the platform, market, audience, creative, season and objective. Compare campaigns with similar targeting and formats." },
    { question: "Can I calculate budget or impressions from CPM?", answer: "Yes. Use the ad budget calculator to calculate required spend, or the impressions calculator to estimate how much reach a budget can buy." },
  ],
};

export const metadata = seoMetadata(config);
export default function CpmFormulaPage() { return <SeoToolPage config={config} />; }
