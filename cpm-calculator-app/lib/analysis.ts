export type AnalysisInput = {
  mode: "linked" | "independent";
  budget: number;
  targetImpressions: number;
  platforms: string[];
  durationDays: number;
  region: string;
  primaryGoal: string;
  secondaryGoals: string[];
  industry: string;
  adFormat: string;
};

export type AnalysisResult = {
  source: "local-fallback" | "configured-ai";
  notice: string;
  summary: string;
  targetCpm: number;
  dailyBudget: number;
  reach: number;
  scenarios: { name: string; cpm: number; reach: number; width: number }[];
  paths: { key: string; title: string; tag: string; copy: string }[];
  platformFit: { label: string; best: string; cpm: number; lead: boolean }[];
  timingPlan: { title: string; copy: string };
  allocation: string;
  assumptions: string[];
};

export const platformProfiles: Record<string, { label: string; base: number; best: string; timing: string }> = {
  meta: { label: "Meta / Instagram", base: 1, best: "E-commerce, brand, retargeting", timing: "Run broad for 3–5 days, then shift budget toward the strongest creative and audience." },
  google: { label: "Google Display", base: 0.72, best: "Awareness, remarketing, broad reach", timing: "Give the campaign a full week to learn before cutting low-volume placements." },
  youtube: { label: "YouTube", base: 1.35, best: "Video, education, brand lift", timing: "Use a steady daily budget and compare completed views with downstream clicks." },
  tiktok: { label: "TikTok", base: 0.84, best: "Short-form video, discovery, e-commerce", timing: "Test several hooks in the first 7 days; keep winners running for another week." },
  linkedin: { label: "LinkedIn", base: 2.05, best: "B2B, recruiting, high-value leads", timing: "Bias delivery toward working hours in the target region, then validate by lead quality." },
  programmatic: { label: "Programmatic", base: 0.55, best: "Scale, display, audience buying", timing: "Start with a controlled test and review frequency, viewability, and placements weekly." },
};

const regionFactors: Record<string, number> = { US: 1, UK: 0.92, CA: 0.88, AU: 0.95, GLOBAL: 0.68 };

const round = (value: number, digits = 2) => Number(value.toFixed(digits));
const chooseLead = (platforms: string[], objective: string) => {
  const preferLow = ["save_money", "test"].includes(objective);
  return [...platforms].sort((a, b) => preferLow ? platformProfiles[a].base - platformProfiles[b].base : platformProfiles[b].base - platformProfiles[a].base)[0];
};

export function validateInput(body: Partial<AnalysisInput>): AnalysisInput {
  const input: AnalysisInput = {
    mode: body.mode === "independent" ? "independent" : "linked",
    budget: Number(body.budget),
    targetImpressions: Number(body.targetImpressions),
    platforms: Array.isArray(body.platforms) ? body.platforms.filter((platform) => Boolean(platformProfiles[platform])) : [],
    durationDays: Number(body.durationDays),
    region: body.region && regionFactors[body.region] ? body.region : "US",
    primaryGoal: String(body.primaryGoal || "value"),
    secondaryGoals: Array.isArray(body.secondaryGoals) ? body.secondaryGoals.map(String).slice(0, 5) : [],
    industry: String(body.industry || ""),
    adFormat: String(body.adFormat || ""),
  };
  if (![input.budget, input.targetImpressions, input.durationDays].every((value) => Number.isFinite(value) && value > 0)) throw new Error("Budget, target impressions and duration must be greater than zero.");
  if (input.budget > 100_000_000_000 || input.targetImpressions > 1_000_000_000_000_000) throw new Error("Input is outside the supported range.");
  if (!input.platforms.length) input.platforms = ["meta"];
  return input;
}

export function buildLocalAnalysis(input: AnalysisInput): AnalysisResult {
  const regionFactor = regionFactors[input.region] || 1;
  const factor = input.platforms.reduce((sum, platform) => sum + platformProfiles[platform].base, 0) / input.platforms.length;
  const targetCpm = input.budget / input.targetImpressions * 1000;
  const adjusted = targetCpm * factor * regionFactor;
  const lead = chooseLead(input.platforms, input.primaryGoal);
  const cheapest = [...input.platforms].sort((a, b) => platformProfiles[a].base - platformProfiles[b].base)[0];
  const comparison = input.platforms.find((platform) => platform !== lead) || cheapest;
  const scenarioValues = [["Conservative", adjusted * 1.35], ["Baseline", adjusted], ["Optimistic", adjusted * 0.72]] as const;
  const comparisonCopy = input.platforms.length > 1 ? `Use ${platformProfiles[lead].label} as the core and compare it with ${platformProfiles[comparison].label}. Balance CPM with CTR, CPC and conversion quality.` : `Use ${platformProfiles[lead].label} as the core, then judge it with CTR, CPC and conversion quality instead of CPM alone.`;
  const paths = [
    { key: "save_money", title: "Save money", tag: "LOWER COST", copy: `Start with ${platformProfiles[cheapest].label} and keep the audience broad. Reserve 20% to test another channel before scaling.` },
    { key: "performance", title: "Drive results", tag: "QUALITY FIRST", copy: `Put the first meaningful test behind ${platformProfiles[lead].label}, matching the ${platformProfiles[lead].best.toLowerCase()} use case. Judge it by downstream action, not CPM alone.` },
    { key: "value", title: "Best value", tag: "RECOMMENDED", copy: comparisonCopy },
  ];
  const opening = input.durationDays <= 7 ? "Use the whole flight as a learning sprint." : input.durationDays <= 14 ? "Protect the first 3 days for learning, then make one measured adjustment." : "Use the first 7 days to learn, then scale the strongest combination.";
  return {
    source: "local-fallback",
    notice: "Local estimate mode: add AI_API_URL, AI_API_KEY and AI_MODEL in .env.local to enable the configured AI provider.",
    summary: input.primaryGoal === "save_money" ? "A lean path to reach." : input.primaryGoal === "performance" ? "Quality before scale." : input.primaryGoal === "test" ? "A measured first test." : "A balanced starting point.",
    targetCpm: round(adjusted), dailyBudget: round(input.budget / input.durationDays), reach: input.targetImpressions,
    scenarios: scenarioValues.map(([name, cpm], index) => ({ name, cpm: round(cpm), reach: round(input.budget / cpm * 1000, 0), width: [62, 79, 94][index] })),
    paths, platformFit: input.platforms.map((platform) => {
      const cpm = round(targetCpm * platformProfiles[platform].base * regionFactor);
      const estimatedImpressions = round(input.budget / Math.max(cpm, 0.01) * 1000, 0);
      return { label: platformProfiles[platform].label, best: `${platformProfiles[platform].best} · At the stated budget: approximately ${estimatedImpressions.toLocaleString()} impressions.`, cpm, lead: platform === lead };
    }),
    timingPlan: { title: input.durationDays <= 7 ? "Treat this as a learning sprint" : "Learn before you scale", copy: `${opening} ${platformProfiles[lead].timing} Target region: ${input.region}. Without account history, treat dayparting as a test rather than a promise.` },
    allocation: input.platforms.length > 1 ? `${platformProfiles[lead].label} ${round(input.budget * .65)} (65%) · ${input.platforms.filter((platform) => platform !== lead).map((platform) => platformProfiles[platform].label).join(" + ")} ${round(input.budget * .35)} (35%)` : `${platformProfiles[lead].label} ${round(input.budget * .8)} (80%) · learning reserve ${round(input.budget * .2)} (20%)`,
    assumptions: ["CPM varies by auction, audience, creative, season, region and objective.", "The platform figures are planning assumptions, not live platform forecasts.", "Run a controlled test and update the plan with actual CTR, CPC, CPA and conversion quality."],
  };
}

async function configuredAi(input: AnalysisInput): Promise<AnalysisResult | null> {
  const endpoint = process.env.AI_API_URL;
  const key = process.env.AI_API_KEY;
  const model = process.env.AI_MODEL;
  if (!endpoint || !key || !model) return null;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), Number(process.env.AI_TIMEOUT_MS || 20_000));
  try {
    const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` }, signal: controller.signal, body: JSON.stringify({ model, temperature: 0.1, max_tokens: 1800, response_format: { type: "json_object" }, messages: [{ role: "system", content: "You are a careful advertising planning assistant. Output exactly one JSON object and absolutely nothing else: no prose, no Markdown, no code fences, no headings, no commentary, and no extra keys. The only allowed top-level keys are summary, targetCpm, dailyBudget, reach, scenarios, paths, platformFit, timingPlan, allocation, assumptions. scenarios must contain name, cpm, reach, width. paths must contain key, title, tag, copy. platformFit must contain label, best, cpm, lead. timingPlan must contain title and copy. Never claim certainty. Mark platform and timing figures as estimates unless live data is supplied." }, { role: "user", content: JSON.stringify(input) }] }) });
    if (!response.ok) throw new Error(`AI provider returned HTTP ${response.status}`);
    const data = await response.json() as { choices?: { message?: { content?: string } }[] };
    const content = data.choices?.[0]?.message?.content;
    if (!content) throw new Error("AI provider returned no content.");
    const parsed = JSON.parse(content);
    const normalized = normalizeAiResult(parsed);
    if (!normalized) return null;
    const platformFit = normalized.platformFit.map((item) => ({
      ...item,
      best: item.best.includes("At the stated budget") ? item.best : `${item.best} · At the stated budget: approximately ${round(input.budget / Math.max(item.cpm, 0.01) * 1000, 0).toLocaleString()} impressions.`,
    }));
    return { ...normalized, platformFit, source: "configured-ai", notice: "Generated by the configured AI provider. Validate assumptions against live platform data before spending." };
  } finally {
    clearTimeout(timeout);
  }
}

function normalizeAiResult(value: unknown): Omit<AnalysisResult, "source" | "notice"> | null {
  if (!value || typeof value !== "object") return null;
  const candidate = value as Record<string, unknown>;
  const allowedTopLevelKeys = new Set([
    "summary",
    "targetCpm",
    "dailyBudget",
    "reach",
    "scenarios",
    "paths",
    "platformFit",
    "timingPlan",
    "allocation",
    "assumptions",
  ]);
  if (Object.keys(candidate).some((key) => !allowedTopLevelKeys.has(key))) return null;
  const text = (key: string, max = 1000) => typeof candidate[key] === "string" && candidate[key].trim().length > 0 ? candidate[key].trim().slice(0, max) : null;
  const numeric = (key: string) => typeof candidate[key] === "number" && Number.isFinite(candidate[key]) ? candidate[key] : null;
  const summary = text("summary");
  const targetCpm = numeric("targetCpm");
  const dailyBudget = numeric("dailyBudget");
  const reach = numeric("reach");
  const allocation = text("allocation");
  const scenarios = Array.isArray(candidate.scenarios) ? candidate.scenarios.map((item) => {
    if (!item || typeof item !== "object") return null;
    const row = item as Record<string, unknown>;
    if (Object.keys(row).some((key) => !["name", "cpm", "reach", "width"].includes(key))) return null;
    return typeof row.name === "string" && typeof row.cpm === "number" && Number.isFinite(row.cpm) && typeof row.reach === "number" && Number.isFinite(row.reach) && typeof row.width === "number" && Number.isFinite(row.width) ? { name: row.name.slice(0, 80), cpm: row.cpm, reach: row.reach, width: Math.max(0, Math.min(100, row.width)) } : null;
  }).filter((item): item is { name: string; cpm: number; reach: number; width: number } => Boolean(item)).slice(0, 3) : [];
  const paths = Array.isArray(candidate.paths) ? candidate.paths.map((item) => {
    if (!item || typeof item !== "object") return null;
    const row = item as Record<string, unknown>;
    if (Object.keys(row).some((key) => !["key", "title", "tag", "copy"].includes(key))) return null;
    return typeof row.key === "string" && typeof row.title === "string" && typeof row.tag === "string" && typeof row.copy === "string" ? { key: row.key.slice(0, 40), title: row.title.slice(0, 100), tag: row.tag.slice(0, 60), copy: row.copy.slice(0, 800) } : null;
  }).filter((item): item is { key: string; title: string; tag: string; copy: string } => Boolean(item)).slice(0, 5) : [];
  const platformFit = Array.isArray(candidate.platformFit) ? candidate.platformFit.map((item) => {
    if (!item || typeof item !== "object") return null;
    const row = item as Record<string, unknown>;
    if (Object.keys(row).some((key) => !["label", "best", "cpm", "lead"].includes(key))) return null;
    return typeof row.label === "string" && typeof row.best === "string" && typeof row.cpm === "number" && Number.isFinite(row.cpm) && typeof row.lead === "boolean" ? { label: row.label.slice(0, 100), best: row.best.slice(0, 300), cpm: row.cpm, lead: row.lead } : null;
  }).filter((item): item is { label: string; best: string; cpm: number; lead: boolean } => Boolean(item)).slice(0, 8) : [];
  const timingPlan = candidate.timingPlan && typeof candidate.timingPlan === "object" ? candidate.timingPlan as Record<string, unknown> : null;
  const timing = timingPlan && !Object.keys(timingPlan).some((key) => !["title", "copy"].includes(key)) && typeof timingPlan.title === "string" && typeof timingPlan.copy === "string" ? { title: timingPlan.title.slice(0, 120), copy: timingPlan.copy.slice(0, 1000) } : null;
  const assumptions = Array.isArray(candidate.assumptions) ? candidate.assumptions.filter((item): item is string => typeof item === "string").map((item) => item.slice(0, 500)).slice(0, 8) : [];
  if (!summary || targetCpm === null || dailyBudget === null || reach === null || !allocation || scenarios.length !== 3 || paths.length === 0 || platformFit.length === 0 || !timing || assumptions.length === 0) return null;
  return { summary, targetCpm, dailyBudget, reach, scenarios, paths, platformFit, timingPlan: timing, allocation, assumptions };
}

export async function analyzeBudget(input: AnalysisInput): Promise<AnalysisResult> {
  try { return await configuredAi(input) || buildLocalAnalysis(input); } catch { return buildLocalAnalysis(input); }
}
