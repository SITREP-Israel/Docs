# Suggest a source

Know an outlet that should be in the pipeline? Spotted a broken feed or a miscategorisation? Here's how to tell us.

## The fastest path — open an issue

The [`Grounding-Sources`](https://github.com/SITREP-Israel/Grounding-Sources) repo has two issue templates that take about thirty seconds to fill in:

<div class="grid cards" markdown>

- :material-plus-circle:{ .lg .middle } **Suggest a source**

    ---

    Propose a new outlet for the pipeline. Name, homepage, proposed category, monitoring method, and why it adds signal.

    [:octicons-arrow-right-24: Open the template](https://github.com/SITREP-Israel/Grounding-Sources/issues/new?template=suggest-source.yml)

- :material-flag:{ .lg .middle } **Flag a source issue**

    ---

    Report a broken feed, a stale entry, a miscategorisation, a duplicate, or a propaganda-flag disagreement on a source already in the list.

    [:octicons-arrow-right-24: Open the template](https://github.com/SITREP-Israel/Grounding-Sources/issues/new?template=flag-issue.yml)

</div>

## Or open a PR directly

If you're comfortable with GitHub:

1. Fork [`Grounding-Sources`](https://github.com/SITREP-Israel/Grounding-Sources).
2. Add a YAML file under `sources/<category>/<slug>.yml` — use [`sources/_example.yml`](https://github.com/SITREP-Israel/Grounding-Sources/blob/main/sources/_example.yml) as a template.
3. Fill in against the [schema](https://github.com/SITREP-Israel/Grounding-Sources/blob/main/schema/source.schema.yml).
4. Open the PR.

## What makes a good suggestion

Sources we're biased toward:

- **Primary / first-order** — official bodies, wire services, direct-reporting outlets
- **Reachable programmatically** — RSS, stable HTML, or a public Telegram channel
- **Identifiable** — a clear publisher, not anonymous
- **English or readily translatable** — non-English is fine; the pipeline handles translation

Sources we're cautious about:

- Pure aggregators that republish wire copy (noise without signal)
- Anonymous OSINT accounts without track record
- Paywalled sources that block programmatic fetch

## Editorial posture

Inclusion is **not** an endorsement. The pipeline deliberately ingests sources on many sides of a story — including state-controlled outlets — and flags them with a `propaganda` boolean so the origin of a claim is legible to readers. Monitoring a source is an act of listening, not agreement.

## What happens after you open an issue

1. A maintainer triages (usually within a few days).
2. If accepted, the source is added to the public inventory and then reconciled into the agent's enforced whitelist on the next cadence.
3. The source starts showing up in SITREPs from the next run where it surfaces relevant material.

If the suggestion is declined (scope, reliability, duplication, etc.), the issue gets a short explanation and is closed.

## Other ways to help

- **Broken-feed reports** are genuinely valuable — source outlets rotate URLs silently and the pipeline can degrade without anyone noticing.
- **Propaganda-flag disagreements** are welcome. The flag is meant to be a factual description; if we've got one wrong, tell us.
- **Category corrections** similarly.

## Contact

For anything not obviously an issue-tracker matter: [public@danielrosehill.com](mailto:public@danielrosehill.com).
