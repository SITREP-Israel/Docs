# SITREP ISR — Pipeline Docs

Technical documentation for how [SITREP ISR](https://sitrepisr.com) actually works under the hood.

This site is aimed at:

- **Readers** who want to know how reports are produced before deciding how much weight to give them.
- **Contributors** who want to suggest sources, flag bugs, or reuse parts of the pipeline.
- **Future me**, who will forget all of this inside a month.

## What SITREP ISR is

A small, independent site that publishes structured situation reports ("SITREPs") on Israel and the wider Middle East, plus occasional scenario simulations. Reports are generated on a schedule (currently four times a day) by an AI agent that reads a curated list of open sources and synthesises them into a standardised format.

It is **not** a primary reporting outlet. Nothing on the site is first-hand journalism. The value is synthesis, cross-source framing, and cadence.

## Start here

<div class="grid cards" markdown>

- :material-sitemap:{ .lg .middle } **Architecture**

    ---

    How the pieces fit together — public site, admin surface, agent, newsletter.

    [:octicons-arrow-right-24: High-level map](architecture.md)

- :material-pipe:{ .lg .middle } **Pipelines**

    ---

    The actual workflow: source collection, triage, analysis, writing, publication.

    [:octicons-arrow-right-24: Pipeline overview](pipelines/index.md)

- :material-source-branch:{ .lg .middle } **Sources**

    ---

    The canonical list of monitored sources lives in a separate public repo.

    [:octicons-arrow-right-24: Grounding-Sources](https://github.com/SITREP-Israel/Grounding-Sources)

- :material-wrench:{ .lg .middle } **Operations**

    ---

    How runs are triggered, what the admin surface does, where to look when something breaks.

    [:octicons-arrow-right-24: Triggering runs](operations/triggering.md)

</div>

## Guiding principles

- **Open sources only.** No private intel, no off-record briefings.
- **Adversary framing is signal.** State-controlled outlets are ingested and flagged, not excluded.
- **Uncertainty is named.** Forward-looking claims carry an explicit confidence rating.
- **Corrections are visible.** Reports are back-editable and timestamped in place.

## Repos

| Repo | What it is |
|---|---|
| [SITREP_ISR](https://github.com/danielrosehill/SITREP_ISR) | Public site + agent pipeline (this is the main one). |
| [SITREP-ISR-Admin](https://github.com/danielrosehill/SITREP-ISR-Admin) | Backoffice UI, newsletter send, manual SITREP trigger. |
| [Grounding-Sources](https://github.com/SITREP-Israel/Grounding-Sources) | Public source inventory, contributor-editable. |
| [Docs](https://github.com/SITREP-Israel/Docs) | You are here. |
