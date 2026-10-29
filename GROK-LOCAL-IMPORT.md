# CPM.calc Local Import

## Workspace

Add `/Users/ken/hjd/code/SEO/cpm-calculator` as the local Workspace or Project folder in the authorized local Grok client. This is preferred because the queue and source assets can be read without uploading secrets.

If direct workspace access is unavailable, upload only the files below:

- `BRAND-ACCOUNT-PACK.md`
- `GROK-LOCAL-MANIFEST.json`
- `GROK-LOCAL-IMPORT.md`
- `GROK-EXECUTION-SETUP.md`
- `GROK-BACKLINK-AGENT-BRIEF.md`
- `SITE-DISTRIBUTION-AUDIT.md`
- `backlink-queue.csv`
- `cpm-calculator-app/public/product-hunt/thumbnail.png`
- `cpm-calculator-app/public/product-hunt/gallery-01-calculator.png`
- `cpm-calculator-app/public/product-hunt/gallery-02-planning.png`
- `cpm-calculator-app/public/product-hunt/gallery-03-metrics.png`
- `cpm-calculator-app/public/product-hunt/demo.gif`
- `cpm-calculator-app/app/icon.svg`

Never upload `.env`, `.env.local`, credentials, API keys, tokens, `node_modules`, `.git`, `.next`, `out`, or browser profiles.

## Read order

1. `GROK-LOCAL-MANIFEST.json`
2. `SITE-DISTRIBUTION-AUDIT.md`
3. `BRAND-ACCOUNT-PACK.md`
4. `GROK-EXECUTION-SETUP.md`
5. `GROK-BACKLINK-AGENT-BRIEF.md`
6. `backlink-queue.csv`
7. `cpm-calculator-app/public/product-hunt/README.md`

## Bootstrap prompt

Read the manifest first and report the capabilities you can actually use: local files, browser navigation, authorized login state, inbox access, scheduler, and production reachability. Treat the brand pack as the only approved product fact source. Read the queue before any action, preserve its exact 31-column header and one-row-per-domain rule, and update the queue immediately after every result. Vet the actual candidate page before filling a form. Use only active assets and approved copy. Skip CAPTCHA, hCaptcha, rate limits, payment, unclear rules, reciprocal links, badges, votes, login bypass, proxy rotation, owner-only clicks, unsupported claims, and missing evidence. Do not claim a submission, listing, inbox, scheduler, browser permission, or AI provider exists unless the client demonstrates it. Return a durable daily report and stay quiet when nothing meaningful changed.

## Reload-assets prompt

Before the next run, reread `GROK-LOCAL-MANIFEST.json`, hash every active asset, verify dimensions, compare them with the manifest, and report the active paths. If any hash differs or an old template asset is present, stop submissions, report the mismatch, and reload the workspace cache before continuing.
