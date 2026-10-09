import SeoToolPage, { seoMetadata, type SeoToolConfig } from "../../components/SeoToolPage";

const config: SeoToolConfig = {
  slug: "resources/cost-per-impression-calculator",
  title: "Cost Per Impression Calculator: Find Your CPI",
  description: "Calculate cost per impression from spend and impressions, then convert it to CPM. Includes a worked example and the checks that prevent media-plan mistakes.",
  h1: "Cost Per Impression Calculator",
  eyebrow: "CALCULATE THE COST OF ONE AD IMPRESSION",
  intro: "Cost per impression is a tiny number, so it is easy to misread. This calculator keeps the unit conversion visible: spend divided by impressions, with CPM as the same result scaled to 1,000 views.",
  variant: "cpm",
  formula: "Cost per impression = ad spend ÷ total impressions. CPM = cost per impression × 1,000.",
  example: "For example, $500 divided by 100,000 impressions equals $0.005 per impression. Multiply $0.005 by 1,000 to get a $5.00 CPM.",
  sections: [
    { heading: "How to calculate cost per impression", body: "Use the same campaign scope for both inputs: divide media spend by delivered impressions. If spend is $500 and impressions are 100,000, the calculation is $500 ÷ 100,000 = $0.005. This metric is often easier to read as CPM because an individual impression cost is usually a fraction of a cent." },
    { heading: "Cost per impression vs CPM", body: "Cost per impression and CPM describe the same delivery cost at different scales. CPI is the cost of one impression. CPM is the cost of 1,000 impressions. Multiply CPI by 1,000 to find CPM, or divide CPM by 1,000 to find CPI. Do not compare one page’s CPI with another page’s CPM without converting the units first." },
    { heading: "When cost per impression is useful", body: "Use CPI when reviewing a detailed media plan, checking an invoice, or explaining the price of individual delivery. For campaign decisions, pair it with reach, frequency, click-through rate, cost per click and cost per acquisition. An inexpensive impression is useful only if it supports the campaign objective." },
  ],
  keyTakeaways: [
    "Cost per impression equals media spend divided by total impressions.",
    "CPM is cost per impression multiplied by 1,000.",
    "Use the same date range, currency and campaign scope in both inputs.",
  ],
  extraSections: [
    { heading: "Common cost per impression mistakes", body: "The most common error is mixing reach with impressions. Reach counts unique people, while impressions include repeat views. Another error is mixing all-in campaign cost with platform-reported media spend. Keep the cost definition consistent and document whether agency fees, production costs and taxes are included." },
    { heading: "What to check after calculating CPI", body: "Compare CPI or CPM against comparable placements and audiences, then inspect frequency and downstream results. If frequency is high but reach is flat, more impressions may not create proportional new awareness. Use the Impressions Calculator to turn a budget and CPM assumption into a delivery estimate, or the Reverse CPM Calculator to set a planning ceiling." },
  ],
  faqs: [
    { question: "What is cost per impression?", answer: "Cost per impression is the media cost assigned to one delivered ad impression. Calculate it by dividing ad spend by total impressions." },
    { question: "How do I convert CPM to cost per impression?", answer: "Divide CPM by 1,000. For example, a $5 CPM equals $0.005 per impression." },
    { question: "Is cost per impression the same as cost per reach?", answer: "No. Impressions include repeat views, while reach estimates unique people. You need a frequency assumption to relate impressions to reach." },
  ],
};

export const metadata = seoMetadata(config);
export default function CostPerImpressionCalculatorPage() { return <SeoToolPage config={config} />; }
