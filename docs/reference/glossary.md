# Glossary

**BLUF** — "Bottom line up front." The one-to-three-sentence summary at the top of each SITREP. Modelled on the military briefing convention.

**Back-edit** — A correction applied to an already-published SITREP. Dated in place, does not re-trigger newsletter or Telegram.

**Confidence band** — A qualitative rating (low / medium / high) attached to forward-looking claims. Calibrated probability estimates are deliberately out of scope.

**Coverage window** — The rolling time horizon the agent considers when collecting source material. Default 6 hours.

**Flash traffic** — An urgent, unscheduled SITREP triggered by a major event, rather than falling out of the cron schedule.

**Grounding source** — A source in the whitelist that the agent is permitted to draw from. Inventoried in the public [Grounding-Sources](https://github.com/SITREP-Israel/Grounding-Sources) repo.

**Heartbeat run** — A scheduled run that triaged no meaningful delta and exited without publishing. The log still records the run so that a silent scheduler can be distinguished from "nothing happened."

**Ingest endpoint** — `POST /api/admin/ingest` on the public site. Where the agent posts a finished SITREP. Auth via `ADMIN_INGEST_SECRET`.

**Propaganda flag** — Boolean on a source record, marking state-controlled or state-aligned outlets. Not a truthfulness judgement — surfaces the origin of a claim in the reader UI.

**SITREP** — Situation report. The primary artefact this project produces.

**Simulation** — A scenario exploration. Not a prediction. Published at `/simulations/<slug>`.

**Short delta** — A publish-gate criterion: if the current run's output is too close to the previous SITREP, it exits as a heartbeat rather than publishing a near-duplicate. Overridden by manual `include_urls`.

**Sync rule** — The discipline that any operator-facing knob must be wired through all four layers (agent CLI, workflow input, admin API, admin UI). See [Architecture](../architecture.md#the-sync-rule).

**Track** — An analytical axis in a SITREP (military, diplomatic, domestic, humanitarian). Each track gets its own readout.

**Triage** — The first agent stage. Decides whether a run is worth publishing at all.

**Whitelist** — The enforced list of domains / feeds / Telegram channels the agent may fetch. Lives in code at `agent/sitrep_agent/whitelist.py`. Distinct from the public inventory.
