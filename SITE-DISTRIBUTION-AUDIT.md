# CPM.calc Distribution Readiness Audit

Audit date: 2026-10-29 (Asia/Shanghai)

## Scope and evidence

- Repository: `/Users/ken/hjd/code/SEO/cpm-calculator`
- Site source: `cpm-calculator-app/`
- Canonical origin configured in source: `https://www.cpm-calculator.xyz`
- Production reachability: pending. DNS and proxy access were unavailable from this environment, so no live route is marked verified.
- Existing project evidence was preserved from `SEO-EXECUTION-STATUS.md`; that file contains a pre-existing user edit and was not changed by this task.

## Verified in source

- Product name: `CPM.calc`.
- Core use case: calculate CPM from ad spend and impressions.
- Additional calculator modes: required budget, estimated impressions, and reverse CPM on dedicated routes.
- Educational pages: CPM formula, CPM vs CPC vs CPA, and cost per impression.
- Campaign planner: accepts a budget, target impressions, duration, region, objective, industry, platforms, priorities, and ad format.
- Planner behavior: uses a configured OpenAI-compatible provider when available and a local estimate fallback otherwise.
- Basic calculator: no account, checkout, database, saved history, or analytics identifier appears in the current repository.
- Supported locale: English source and UI only.
- Current public price state: free to use in the current product surface; no paid plan or checkout is present in the repository.
- Public assets: Product Hunt thumbnail, three screenshots, animated preview, and the new app icon.

## Public readiness changes made

- Added linked `/privacy/`, `/terms/`, and `/support/` routes with metadata and clear data-flow boundaries.
- Added shared legal/support footer links to the home page, tool pages, and resource pages.
- Added the legal/support routes to `sitemap.xml` and `google-sitemap.xml`.
- Changed the basic calculator note so it does not imply that campaign-planner inputs are never sent to a server.
- Added `app/icon.svg` as the site favicon.
- Added the existing calculator screenshot as the Open Graph and Twitter preview image.
- Replaced the production placeholder domain in the app README and env example with the configured canonical origin.

## Static audit result

- No known template brand, demo banner, fake testimonial, old logo, unsupported multiplayer/QR claim, or placeholder support alias remains in the app source or public asset text.
- `robots.txt` allows public pages and disallows `/api/`; it points at the configured Google sitemap.
- Both sitemaps use the configured canonical origin and now include the public legal/support pages.
- Page metadata and structured data use `CPM.calc` and the configured canonical origin.
- No support email alias is published. The support page states that the inbox is not configured.

## Runtime checks

| Check | Result | Evidence or next action |
|---|---|---|
| Next.js production build | Passes before and after the readiness changes | Run `cd cpm-calculator-app && npm run build` after pulling this change |
| TypeScript validation | Included in the Next.js build and passed at baseline | Re-run with the build command above |
| `npm run lint` | Not completed | Existing `next lint` script opens an interactive ESLint setup because no ESLint config exists |
| Local route checks | Pending final build/server run | Start with `npm run dev` and check every route in the route table below |
| Production route checks | Pending | DNS was unavailable from this environment; verify after deployment |
| Support inbox verification | Pending | Configure a separate destination, verify it, and send a test message before publishing an alias |
| Authenticated distribution submissions | Not attempted | Requires the owner's authorized account and final click |

## Route table

| Route | Source | Public role | Current state |
|---|---|---|---|
| `/` | `app/page.tsx` | Calculator and campaign planner | Source verified; live pending |
| `/ad-budget-calculator/` | `app/ad-budget-calculator/page.tsx` | Budget calculator | Source verified; live pending |
| `/impressions-calculator/` | `app/impressions-calculator/page.tsx` | Impressions calculator | Source verified; live pending |
| `/reverse-cpm-calculator/` | `app/reverse-cpm-calculator/page.tsx` | Reverse CPM calculator | Source verified; live pending |
| `/cpm-formula/` | `app/cpm-formula/page.tsx` | Formula guide | Source verified; live pending |
| `/resources/cpm-vs-cpc-vs-cpa/` | `app/resources/cpm-vs-cpc-vs-cpa/page.tsx` | Editorial comparison | Source verified; live pending |
| `/resources/cost-per-impression-calculator/` | `app/resources/cost-per-impression-calculator/page.tsx` | Editorial calculator | Source verified; live pending |
| `/privacy/` | `app/privacy/page.tsx` | Privacy policy | Added; live pending |
| `/terms/` | `app/terms/page.tsx` | Terms of use | Added; live pending |
| `/support/` | `app/support/page.tsx` | Support boundary and issue guidance | Added; live pending |
| `/api/analyze-budget` | `app/api/analyze-budget/route.ts` | Planner endpoint | Deliberately disallowed in robots |

## Unresolved gates

1. Verify the production origin, redirects, canonical tags, legal routes, sitemap, robots, and social preview after deployment.
2. Configure and test a separate support destination before publishing `support@www.cpm-calculator.xyz` or any other alias.
3. Confirm the current Product Hunt state from the owner's account. The existing status file records a scheduled submission but has no durable public listing URL.
4. Inspect each distribution candidate's actual submission page, rules, cost, login, reciprocal-link, badge, voting, moderation, and owner-click requirements before changing a queue row to `submit`.
5. Do not claim scheduler, browser permissions, inbox access, or external AI availability until the local client demonstrates each capability.
