import ResourcePage, { resourceMetadata, type ResourcePageConfig } from "../../components/ResourcePage";

const config: ResourcePageConfig = {
  slug: "cpm-vs-cpc-vs-cpa",
  title: "CPM vs CPC vs CPA: Which Advertising Metric Matters?",
  description: "A practical guide to CPM, CPC, and CPA: the formulas, the campaign decisions each metric supports, and the checks to make before moving budget.",
  eyebrow: "CHOOSE THE RIGHT ADVERTISING METRIC",
  h1: "CPM vs CPC vs CPA",
  intro: "These three numbers answer different questions. CPM tells you what delivery costs, CPC tells you what a visit costs, and CPA tells you what a completed action costs. Confusing them is an easy way to move budget in the wrong direction.",
  quickAnswer: "Use CPM when the buying question is “how much reach can I get?”, CPC when it is “what does a visit cost?”, and CPA when it is “what does a lead or sale cost?”. Keep the other two numbers nearby: they often explain why the primary metric moved.",
  published: "2026-10-09",
  updated: "2026-10-09",
  takeaways: [
    "CPM is the cost to deliver 1,000 impressions; it is useful for reach and awareness planning.",
    "CPC is the cost per click; it tells you what it costs to bring a visitor to a landing page.",
    "CPA is the cost per acquisition or action; it connects ad spend with a defined result.",
    "A low CPM can still lead to weak traffic or expensive conversions if the audience and creative are a poor fit.",
  ],
  sections: [
    { heading: "What CPM measures", paragraphs: ["CPM is the number I use first when checking the price of delivery. Divide spend by impressions and multiply by 1,000. A $500 campaign with 100,000 impressions has a $5 CPM.", "That is a useful comparison only if the two campaigns are genuinely comparable. Keep country, audience, placement, format, and date range consistent before calling one CPM cheaper than another."] },
    { heading: "What CPC measures", paragraphs: ["CPC is spend divided by clicks. Spend $500 and get 250 clicks: CPC is $2.00. It is a clean way to check the cost of traffic, but it says nothing by itself about whether those visitors were a good fit.", "When CPC drops, check the landing page and the click-through rate before celebrating. A broad audience can produce a cheap click and a poor lead at the same time."] },
    { heading: "What CPA measures", paragraphs: ["CPA is spend divided by completed actions. If $500 produces 10 qualified leads, CPA is $50. The arithmetic is simple; agreeing on the action is the part that needs care. A form submit, a qualified lead, and a paid customer are not interchangeable conversions.", "Before comparing CPA between campaigns, confirm that both campaigns use the same conversion definition and attribution window. Otherwise the comparison looks precise but is not fair."] },
    { heading: "How to choose the metric for your campaign", paragraphs: ["Write the buying question at the top of the media plan. If the question is reach, lead with CPM and watch frequency. If it is visits, lead with CPC and click-through rate. If it is leads or sales, lead with CPA, then use CPM and CPC to find the cause of a change.", "Do not move spend simply because one source has the lowest CPM. A more expensive audience can still win if it produces stronger traffic or a lower CPA. Compare like with like, then make one budget change at a time so the result is readable."] },
    { heading: "A small example", paragraphs: ["Campaign A has a $4 CPM and a $3 CPC. Campaign B has an $8 CPM and a $2 CPC. B costs more to reach, but the people who click are cheaper to acquire as visitors. If B also produces better leads, its higher CPM is not a problem; it is the price of a better audience or placement.", "Use the CPM Calculator to verify delivery cost, then record CPC and CPA once the campaign has enough data. The estimate helps plan a buy; it is not a promise about the next auction."] },
  ],
  faqs: [
    { question: "Is CPM better than CPC?", answer: "Neither metric is universally better. CPM suits reach and awareness goals; CPC suits traffic goals. Compare the metric that matches your campaign’s purpose, then use the others to diagnose performance." },
    { question: "Can a lower CPM increase CPA?", answer: "Yes. Cheap impressions may be shown to a less relevant audience, creating weaker clicks and conversions. Review conversion quality and CPA alongside CPM before deciding that a lower media cost is better." },
    { question: "Should I optimize for CPA from day one?", answer: "Only when conversion tracking is reliable and enough conversion data exists. New campaigns often need to monitor delivery and click signals first while they gather sufficient data to evaluate CPA." },
  ],
};

export const metadata = resourceMetadata(config);
export default function CpmVsCpcVsCpaPage() { return <ResourcePage config={config} />; }
