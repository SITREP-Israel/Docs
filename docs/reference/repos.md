# Repositories

All repos involved in the SITREP ISR project and what each one is for.

## Main site + agent

**[`danielrosehill/SITREP_ISR`](https://github.com/danielrosehill/SITREP_ISR)**

- Public site (Next.js, Vercel)
- Agent pipeline (`agent/sitrep_agent/`, Python)
- Scheduled GitHub Actions workflows
- Audio / podcast rendering
- Primary database schema and migrations

This is where most development happens.

## Admin surface

**[`danielrosehill/SITREP-ISR-Admin`](https://github.com/danielrosehill/SITREP-ISR-Admin)**

- Next.js app at `admin.sitrepisr.com`
- "Fire SITREP" form → dispatches workflow on the main repo
- Newsletter preview + send (Buttondown)
- Back-edit / correction UI

Separate deploy cadence, separate auth scope, separate secrets. Not a submodule — sibling repo by design.

## Public source inventory

**[`SITREP-Israel/Grounding-Sources`](https://github.com/SITREP-Israel/Grounding-Sources)**

- Contributor-facing catalogue of monitored sources
- YAML file per source
- Issue templates for suggesting new sources / flagging issues
- CC0 / public-domain metadata

Reconciled into the enforced whitelist (`agent/sitrep_agent/whitelist.py` in the main repo) by a maintainer on a cadence.

## Docs

**[`SITREP-Israel/Docs`](https://github.com/SITREP-Israel/Docs)**

- You are here
- MkDocs Material, published to GitHub Pages
- Covers architecture, pipelines, operations

## Organisation profile

**[`SITREP-Israel/.github`](https://github.com/SITREP-Israel/.github)**

- Renders the landing page at [`github.com/SITREP-Israel`](https://github.com/SITREP-Israel)
- Just the org README — no code
