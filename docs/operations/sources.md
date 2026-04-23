# Sources & whitelist

## Two artefacts, one concept

| Artefact | Where | Role |
|---|---|---|
| **Public source inventory** | [`SITREP-Israel/Grounding-Sources`](https://github.com/SITREP-Israel/Grounding-Sources) | Human-readable catalogue. Contributors open issues / PRs here. |
| **Enforced whitelist** | `agent/sitrep_agent/whitelist.py` | What the agent is allowed to fetch at runtime. |

These are **intentionally separate**. The public inventory is a proposal surface; a maintainer reconciles accepted entries into the enforced whitelist on a cadence.

## Categories

The category taxonomy is shared between the database (`source_category` enum), the inventory repo, and the reader UI chips:

- `official_gov` — government ministries, militaries, IGOs
- `israeli_media`
- `iran_state_media` — flagged `propaganda: true` in the inventory
- `arab_gulf_media`
- `western_wire` — Reuters, AP, AFP
- `western_media` — major Western outlets
- `social_telegram`
- `osint`
- `think_tank`
- `dissident`

## The `propaganda` flag

Each source carries an optional boolean. It marks sources that are state-controlled or state-aligned and routinely publish material intended to shape opinion on behalf of a state or armed actor (e.g. IRNA, Press TV, Al-Masirah).

Important: **this is not a judgement of truthfulness.** Propaganda sources are monitored because adversary framing is itself signal. The flag is surfaced in the reader UI so the origin of a claim is legible.

## Adding a source

1. Open an issue on [`Grounding-Sources`](https://github.com/SITREP-Israel/Grounding-Sources/issues/new/choose) using the "Suggest a source" template, or
2. Open a PR adding a YAML file under `sources/<category>/`.

Once merged, a maintainer adds the source to the enforced whitelist in the next reconciliation pass.

## Flagging an issue

Open the "Flag a source issue" template. Useful reports:

- Broken feed or scrape
- Miscategorisation
- Duplicate entry
- Should (or should not) be flagged as propaganda
- Ceased publication

## What the agent is **not** allowed to fetch

Out of scope by design:

- Private intelligence feeds
- Paid-subscription content behind paywalls
- Anonymous OSINT accounts without track record
- Content off the whitelist, unless supplied as an explicit `include_urls` override by the operator
