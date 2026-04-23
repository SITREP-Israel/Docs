# Pipelines

Three distinct pipelines run behind SITREP ISR:

| Pipeline | Trigger | Output |
|---|---|---|
| [SITREP generation](sitrep-generation.md) | Cron (4×/day) or manual | A published situation report |
| [Simulation runner](simulation-runner.md) | Manual | A published scenario simulation |
| [Audio / podcast](audio.md) | Automatic, post-publish | A narrated episode on the podcast feed |

Plus a final [publication & delivery](publication.md) stage that fans out to newsletter, Telegram, RSS, and podcast.

## Shared primitives

All pipelines share:

- **Source whitelist** — curated list of domains / feeds / Telegram channels the agent is allowed to draw from. The public inventory lives in [`Grounding-Sources`](https://github.com/SITREP-Israel/Grounding-Sources); the enforced whitelist in code is `agent/sitrep_agent/whitelist.py`.
- **LLM gateway** — OpenRouter. Model choice and prompts live in `agent/sitrep_agent/llm.py` and the individual node files.
- **Ingest endpoint** — `POST /api/admin/ingest` on the public site. Auth is a shared secret (`ADMIN_INGEST_SECRET`). All pipelines terminate by posting to this endpoint.
- **GitHub Actions as the runtime** — no long-running agent server; every run is a fresh workflow job.
