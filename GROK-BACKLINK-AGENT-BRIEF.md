# CPM.calc Backlink Agent Brief

## Objective

Prepare truthful, relevant referral exposure for CPM.calc. The goal is useful discovery and qualified visits, not raw backlink count. Do not submit externally from this package without an authorized account and direct page inspection.

## Approved facts

- CPM.calc is a free web calculator for CPM, required budget, estimated impressions, and reverse CPM.
- It explains CPM, CPC, CPA, cost per impression, and planning assumptions.
- It includes a campaign-planning view with optional configured AI and a local estimate fallback.
- The basic calculator does not require an account.
- The canonical URL configured in source is `https://www.cpm-calculator.xyz`.
- Current product price is free to use; no paid plan or checkout is evidenced in the repository.

All other claims must be treated as unknown unless the brand pack, audit, source, or a durable owner-provided record verifies them.

## Candidate stages

1. `discover`: candidate exists in the queue but its real submission page has not been inspected.
2. `vet`: inspect the actual page, category, moderation, cost, account, domain-email, reciprocal-link, badge, vote, and payment requirements.
3. `submit`: only after the page is eligible, the owner authorizes the account action, and all required facts are verified.
4. `follow_up`: check moderation, public URL, link target, link type, expiry, and referral evidence once, without repeat submissions.

## Scoring and daily batch

Score each candidate from 0 to 5 for audience fit, intent fit, editorial quality, submission fit, and referral potential. A conservative submission threshold is audience >= 3, intent >= 3, editorial >= 2, and submission >= 3. Start with no more than two eligible candidates per day. The current queue intentionally keeps most candidates at `discovered` because the runtime cannot inspect their actual pages.

## Hard skips

- CAPTCHA or hCaptcha, rate limits, login bypass, proxy rotation, or any evasion request.
- Payment, paid acceleration, unclear checkout, or required subscription.
- Required reciprocal link, badge, votes, fake engagement, or mass posting.
- Unknown or unsupported founder, company, team, customer, review, funding, performance, compliance, or official-affiliation facts.
- Adult, gambling, pharma, piracy, malware, PBN, spam, or irrelevant communities.
- Domain ownership proof, personal-identity proof, legal acceptance, or any owner-only click.
- Duplicate submission, cooldown evasion, or a new account after rejection.

## Copy and asset rules

Use the copy in `BRAND-ACCOUNT-PACK.md`. Prefer brand-name or natural URL anchors. Do not use keyword-stuffed anchors. Use assets listed as active in the manifest and verify hashes before upload. Do not upload secrets, private screenshots, or browser data.

## UTM and canonical rules

- Canonical destination: `https://www.cpm-calculator.xyz`.
- Use a simple URL such as `https://www.cpm-calculator.xyz/` for canonical directory fields unless the candidate is clearly relevant to a deeper page.
- When a candidate supports referral measurement, use `utm_source=<lowercase-domain>`, `utm_medium=referral`, and `utm_campaign=distribution`.
- Do not use a UTM URL as the canonical URL.
- Never claim referral traffic until analytics or an equivalent direct source report proves it.

## CSV update contract

Keep the exact header and one row per domain in `backlink-queue.csv`. Use `unknown` for an inspected-but-unresolved requirement and blank only when a field is not applicable. Record the actual submission URL, timestamp, visible confirmation URL or screenshot path, public listing URL, follow type, expiry, next check, and reason. `published` requires a public page, not a successful form click.

## Evidence contract

Accepted evidence includes visible confirmation text with timestamp, a matching confirmation email reference, a public listing URL, a GitHub PR URL, or a screenshot path stored outside secrets. If evidence is missing, leave the status unconfirmed and explain why.

## Follow-up rules

Check a submitted candidate after the queue date. Confirm the public page, brand copy, destination, link type, and referral signal. Do not repeatedly resubmit or use another account to evade rejection or cooldown. Notify the owner only for a meaningful status change, payment, platform control, failure, completion, or required owner action.
