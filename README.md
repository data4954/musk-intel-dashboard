# Axiomake · 器象量化研究所

**An auto-verifying evidence ledger + first-principles analysis terminal + AI analyst judgment layer — for a *simulated* 2026 Musk universe (TSLA / SpaceX).**

> ⚠️ **Everything on this site is a constructed scenario (2026 simulation).** SPCX going public, xAI merging into SpaceX — none of it happened in reality. The *pipeline* is real; the *world* is fiction. Think of it as a flight simulator for investment research. Not investment advice.

**Live site:** https://data4954.github.io/musk-intel-dashboard/ *(content in Chinese — browser translate works fine; the charts speak for themselves)*

---

## What it does

Every morning at 06:30 (UTC+8), with zero human involvement:

```
8 public sources          rules R1–R6              single data file         static site
(quotes · SEC · launches  ──────────────►  grade &  ──────────────►  9 views + treemaps +   ──► GitHub Pages
 jobs · FEC · news)          scrape           ingest    data.js ledger      network graphs
                                                            │
                                                            ▼
                                              weekly / monthly / yearly reports
                                              + AI analyst judgment layer
```

- **Scrape** — GitHub Actions runs `scripts/update.py` daily: market quotes, SEC Form 4 filings, rocket launch schedules, hiring feeds, FEC political donations, news.
- **Grade** — every item gets an evidence grade on ingest:

  | Grade | Meaning | Treatment |
  |---|---|---|
  | **A** | official primary documents (EDGAR, courts, FCC, state filings) | auto-ingested, source attached |
  | **B** | ≥ 2 independent mainstream financial outlets | enters conclusions |
  | **C** | single-source, uncorroborated | **banned from every page** — kept in the ledger for audit only |

- **Append-only ledger** — events are never edited or deleted; corrections are new entries.
- **Auto reports** — weekly/monthly/yearly research reports assembled from ingested verdicts. The machine layer states facts and *never* invents opinions.

## The AI analyst layer (the interesting part)

On top of the machine layer, Claude (Fable 5) writes actual analyst calls. Every call must carry, by rule:

1. a **falsifiable thesis** (not a vibe)
2. a **reasoning chain** from first principles
3. an **inversion** — what the market's pricing implies, reverse-engineered
4. the **strongest argument against itself**, and why the call still stands
5. **kill-conditions with dates** — if the signal fires, the call dies publicly
6. **evidence hooks** into the A/B ledger
7. a **review deadline** — past it, the site automatically flags the call *expired, do not cite*

That last one matters: when nobody maintains the judgment layer, it degrades honestly instead of impersonating fresh insight.

## How it was built

The owner writes zero code. The entire site — design system, treemap visualizations, network graphs, data pipeline, judgment layer, this README — was built by describing, arguing, and deciding, with Claude executing and explaining the professional vocabulary along the way ("that heatmap in your trading app is called a *treemap*; area = scarcity, shade = severity").

Division of labor that emerged:

- **Human**: every design decision, taste, priorities, vetoes, domain intuition
- **Claude**: execution, professional translation of intuitions, discipline enforcement (evidence grades, falsifiability, honest expiry), and the unglamorous parts — git history scrubbing, repo security audits, merge-conflict reconciliation without losing a single ledger entry

## Tech notes

- **Zero backend, zero build step** — one `index.html` (inline CSS/JS), one `data.js` as the single source of truth, GitHub Actions as the only "server"
- Charts with Chinese labels are **HTML/CSS, never SVG text** (CJK glyph alignment discipline, learned the hard way)
- Warm flat design system (cream / ink / clay) — no gradients, no pure high-contrast colors
- Treemaps: area × shade encode severity (square-root compressed so small tiles stay legible); network graphs: HTML-positioned nodes + SVG lines only

## Repository map

```
index.html                  the whole site (views in Views = {...})
data.js                     single source of truth (append-only ledger + all analysis data)
scripts/update.py           daily scrape + verify + ingest (rules R1–R6 in header)
scripts/report.py           report generator (+ auto-injects the judgment layer)
.github/workflows/update.yml  daily 06:30 UTC+8 cron → auto-commit → Pages
reports/                    generated research reports archive
CLAUDE.md                   handover doc for AI collaboration sessions (in Chinese)
```

## Disclaimer

Personal, non-commercial research experiment. Simulated scenario — not factual claims about real companies or persons. Records about natural persons are limited to public official conduct and legally public filings. Market data comes from free public endpoints, delayed, not for commercial redistribution. Nothing here is investment, legal, or tax advice.
