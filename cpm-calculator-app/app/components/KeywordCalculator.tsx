"use client";

import { useMemo, useState } from "react";

export type KeywordCalculatorVariant = "cpm" | "budget" | "impressions" | "reverse";

const money = (value: number) => `$${new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value)}`;
const whole = (value: number) => new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);

const copy = {
  cpm: {
    title: "Calculate your CPM",
    note: "Enter your ad spend and total impressions to calculate cost per 1,000 impressions.",
    first: "Total budget",
    second: "Impressions",
    action: "Calculate CPM",
  },
  budget: {
    title: "Calculate your advertising budget",
    note: "Enter a target CPM and the number of impressions you want to buy.",
    first: "Target CPM",
    second: "Target impressions",
    action: "Calculate budget",
  },
  impressions: {
    title: "Estimate your ad impressions",
    note: "Enter your budget and target CPM to estimate how many impressions you can buy.",
    first: "Total budget",
    second: "Target CPM",
    action: "Calculate impressions",
  },
  reverse: {
    title: "Find your maximum CPM",
    note: "Enter your budget and target impressions to find the CPM you can afford.",
    first: "Total budget",
    second: "Target impressions",
    action: "Calculate maximum CPM",
  },
} as const;

export default function KeywordCalculator({ variant }: { variant: KeywordCalculatorVariant }) {
  const [first, setFirst] = useState(variant === "budget" ? 5 : variant === "reverse" ? 5000 : 500);
  const [second, setSecond] = useState(variant === "cpm" ? 100000 : variant === "budget" ? 100000 : variant === "reverse" ? 1000000 : 5);
  const [currency, setCurrency] = useState("$");
  const config = copy[variant];
  const result = useMemo(() => {
    if (variant === "cpm") return first / Math.max(second, 1) * 1000;
    if (variant === "budget") return first * Math.max(second, 1) / 1000;
    if (variant === "impressions") return first / Math.max(second, 0.01) * 1000;
    return first / Math.max(second, 1) * 1000;
  }, [first, second, variant]);
  const resultLabel = variant === "cpm" || variant === "reverse" ? "CPM" : variant === "budget" ? "Required budget" : "Estimated impressions";
  const formula = variant === "cpm" ? `${money(first)} ÷ ${whole(second)} × 1,000` : variant === "budget" ? `${money(first)} × ${whole(second)} ÷ 1,000` : variant === "impressions" ? `${money(first)} ÷ ${money(second)} × 1,000` : `${money(first)} ÷ ${whole(second)} × 1,000`;
  const resultText = variant === "cpm" ? `${money(result)} for every 1,000 impressions.` : variant === "budget" ? `Budget needed for ${whole(second)} impressions at a ${money(first)} CPM.` : variant === "impressions" ? `Estimated impressions at a ${money(second)} CPM.` : `Maximum CPM for a ${money(first)} budget and ${whole(second)} impressions.`;

  return <section className="keyword-tool" aria-labelledby={`${variant}-tool-title`}>
    <div className="keyword-tool-head"><div><span className="card-overline">Free calculator</span><h2 id={`${variant}-tool-title`}>{config.title}</h2></div><span className="tool-badge">NO SIGN-UP</span></div>
    <p className="keyword-tool-note">{config.note}</p>
    <form className="keyword-tool-form" onSubmit={(event) => event.preventDefault()}>
      <label><span>{config.first}</span><div className="keyword-input"><span>{variant === "budget" ? currency : currency}</span><input type="number" min="0" step=".01" value={first} onChange={(event) => setFirst(Number(event.target.value))} /></div></label>
      <label><span>{config.second}</span><div className="keyword-input"><input type="number" min="0" step={variant === "budget" || variant === "reverse" ? "1" : ".01"} value={second} onChange={(event) => setSecond(Number(event.target.value))} /><small>{variant === "budget" || variant === "reverse" ? "views" : "CPM"}</small></div></label>
      <label className="currency-control"><span>Currency</span><select value={currency} onChange={(event) => setCurrency(event.target.value)}><option value="$">USD ($)</option><option value="€">EUR (€)</option><option value="£">GBP (£)</option></select></label>
      <button className="keyword-tool-button" type="submit">{config.action}<span>↗</span></button>
    </form>
    <div className="keyword-result" aria-live="polite"><div><span>{resultLabel}</span><strong>{variant === "impressions" ? whole(result) : `${currency}${result.toFixed(2)}`}</strong><p>{resultText}</p></div><div className="keyword-formula"><small>FORMULA</small><code>{formula}</code></div></div>
  </section>;
}
