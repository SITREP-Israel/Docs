# Sources

SITREP ISR draws from a curated list of open sources. The list is **public** and **contributor-editable** — if you think we're missing something important or monitoring something we shouldn't be, the door is open.

## Where the source list lives

| Artefact | Where | Role |
|---|---|---|
| **Public inventory** | [`SITREP-Israel/Grounding-Sources`](https://github.com/SITREP-Israel/Grounding-Sources) | Human-readable catalogue. One YAML file per source. |
| **Enforced whitelist** | `agent/sitrep_agent/whitelist.py` (in the main site repo) | What the agent is actually allowed to fetch at runtime. |

The two are deliberately separate: the inventory is the proposal surface, and a maintainer reconciles accepted entries into the enforced whitelist on a cadence.

## See also

- [Full list of monitored sources](list.md) — grouped by category, mirrored from the inventory
- [Suggest a source](suggest.md) — how to propose a new outlet or flag an issue
- [Operations → Sources & whitelist](../operations/sources.md) — deeper operational detail on the whitelist mechanism

## Categories at a glance

| Slug | Description | Propaganda flag |
|---|---|---|
| `official_gov` | Government ministries, militaries, IGOs | — |
| `israeli_media` | Israeli domestic press | — |
| `iran_state_media` | Iranian / Iran-aligned state outlets | **true** by default |
| `arab_gulf_media` | Arab and Gulf press | — |
| `western_wire` | Reuters, AP, AFP | — |
| `western_media` | Major Western outlets | — |
| `social_telegram` | Monitored Telegram channels | per-source |
| `osint` | OSINT analysts and aggregators | — |
| `think_tank` | Research institutes | — |
| `dissident` | Diaspora / opposition outlets | — |

The `propaganda` flag marks sources that are state-controlled or state-aligned and routinely publish material intended to shape opinion. It is **not** a truthfulness judgement — propaganda sources are monitored because adversary framing is itself signal.
