import SeoToolPage, { seoMetadata, type SeoToolConfig } from "../components/SeoToolPage";

const config: SeoToolConfig = {
  slug: "reverse-cpm-calculator",
  title: "Reverse CPM Calculator: Find Your Maximum Target CPM",
  description: "Calculate the maximum CPM you can afford from your advertising budget and target impressions.",
  h1: "Reverse CPM Calculator",
  eyebrow: "FIND YOUR ACCEPTABLE MEDIA COST",
  intro: "Work backwards from your budget and impression goal to find the maximum CPM your campaign can afford.",
  variant: "reverse",
  formula: "Maximum CPM = budget ÷ target impressions × 1,000",
  example: "If your budget is $5,000 and your target is one million impressions, your target CPM is $5.00. A higher actual CPM means you will need more budget or fewer impressions.",
  sections: [
    { heading: "When a reverse CPM calculation helps", body: "Use a reverse CPM calculation when a client, media plan or internal brief gives you a fixed budget and a fixed reach target. The resulting CPM is a cost ceiling: it tells you what the media buy must achieve before you commit to the plan." },
    { heading: "Turn the CPM ceiling into a channel test", body: "Compare your maximum CPM with planning assumptions for each channel. If a channel is likely to exceed the ceiling, test a smaller audience or use it only for a focused role. A channel below the ceiling still needs validation with clicks, leads or sales." },
    { heading: "What to do when your target CPM is too low", body: "Relax one constraint: increase the budget, reduce the target impressions, broaden the audience, extend the flight or compare more channels. Do not treat a low target CPM as a guaranteed platform rate." },
  ],
  faqs: [
    { question: "What does maximum CPM mean?", answer: "It is the highest average CPM your plan can support while staying within the stated budget and impression target. It is a planning threshold, not a guaranteed auction price." },
    { question: "Is target CPM the same as actual CPM?", answer: "No. Target CPM is the cost your plan can afford. Actual CPM is what the platform reports after delivery and can be higher or lower." },
    { question: "Can I compare multiple platforms with this result?", answer: "Yes. Use the target CPM as a ceiling, then compare each platform's estimated CPM, audience fit and expected downstream performance in the AI planner." },
  ],
};

export const metadata = seoMetadata(config);
export default function ReverseCpmCalculatorPage() { return <SeoToolPage config={config} />; }
