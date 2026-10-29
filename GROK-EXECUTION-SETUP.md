# CPM.calc Local Execution Setup

## Current capability state

| Capability | State | Rule |
|---|---|---|
| Read the local workspace | Available to the current coding agent | The local Grok client must demonstrate the same access before acting |
| Browser navigation and page inspection | Not demonstrated by this package | Check capability before the first candidate |
| Authorized platform accounts | Not verified | Use only an account already signed in and authorized by the owner |
| Inbox access | Not configured | Do not claim a verification link or support alias was handled |
| Scheduler or routine | Not verified | Run only when the local client actually provides the capability |
| Production DNS and route access | Not verified in this environment | Verify the deployed origin directly |
| External AI provider | Deployment-dependent | The planner has a local fallback; provider use must be visible in the result |

## Human setup actions

1. Add the repository root as the local Grok Workspace/Project folder.
2. Run the bootstrap prompt from `GROK-LOCAL-IMPORT.md` and save the capability report outside the queue.
3. Deploy the current app, then verify `/`, all calculator/resource routes, `/privacy/`, `/terms/`, `/support/`, `/robots.txt`, and both sitemap URLs.
4. If a support alias is needed, create a separate receiving destination, complete Cloudflare destination verification, add the alias, and send a test message from a different mailbox. Record only the state `verified` outside the repository; never record the private destination here.
5. Review `backlink-queue.csv` and approve only a small daily batch after the actual candidate pages have been vetted.
6. Use the owner's authorized platform account for any final submit, payment, domain proof, legal acceptance, or owner-click gate. The agent must stop and record the gate.

## Master prompt

You are the authorized CPM.calc distribution operator. Read `GROK-LOCAL-MANIFEST.json`, `SITE-DISTRIBUTION-AUDIT.md`, `BRAND-ACCOUNT-PACK.md`, `GROK-BACKLINK-AGENT-BRIEF.md`, and `backlink-queue.csv` in that order. Report actual capabilities before acting. Work only from verified facts and active assets. Preserve the queue header and one row per domain. For each candidate, inspect the actual page and rules, score the five fit fields, record cost and requirements, then decide `vet`, `submit`, `skip`, `needs_owner_review`, or `follow_up`. Never submit when a fact, cost, rule, login, reciprocal-link, badge, vote, payment, or moderation condition is unknown. Never solve CAPTCHA or bypass login or rate limits. Capture visible confirmation evidence or a public listing URL; a successful click is not publication. Update the row immediately after every result and return a report with decisions, reasons, evidence, and next checks.

## Daily prompt

Read the current queue first. Select no more than two candidates with `status=discovered` or `status=vetted` and an eligible decision. Inspect their real submission pages before any form action. Stop after two consecutive failures, a payment request, a platform control, or a human approval gate. Use the approved description and assets only. Record the result immediately, including `status`, `reason`, `submitted_at`, `confirmation_url`, `live_url`, `screenshot_path`, and `next_check_at` where applicable. Return a concise daily report. If nothing meaningful changed, remain quiet.

## Inbox prompt

Only handle a normal one-click verification link that clearly matches an already recorded submission and does not require domain ownership, personal identity, a reply from the domain address, payment, a password reset, or an unknown destination. Record the matching queue row and evidence. For any owner-only or unclear link, set `status=skipped_owner_action` and stop.

## Completion report

Return:

```text
Date:
Capabilities demonstrated:
Candidates inspected:
Decisions and status changes:
Evidence URLs or screenshot paths:
Skipped controls or owner actions:
Queue rows updated:
Next checks:
Meaningful changes requiring notification:
```
