# Triggering runs

Three ways a SITREP run starts. All of them land in the same GitHub Actions workflow — `.github/workflows/on-demand-sitrep.yml` on the main site repo.

## 1. Scheduled cron

Four runs per day, every 6 hours. Defined in the workflow's `schedule:` block. No human in the loop.

If the triage stage finds nothing new since the last published SITREP, the run exits with a heartbeat instead of publishing.

## 2. Manual via admin surface

[`admin.sitrepisr.com`](https://admin.sitrepisr.com) has a "Fire SITREP" form. Submitting it:

1. Hits `POST /api/trigger/sitrep` on the admin app.
2. Admin app dispatches the `on-demand-sitrep.yml` workflow via the GitHub API, passing the form inputs as workflow `inputs`.
3. The workflow runs the agent with those inputs.

### Knobs exposed in the admin UI

| Field | Purpose |
|---|---|
| **Coverage hours** | Size of the rolling window the agent considers. Default 6, range 1–168. |
| **Include URLs** | Newline-separated list of URLs to force into the run. Bypasses the whitelist and coverage window, and overrides the heartbeat gate — so a run with manual URLs *will* publish even if nothing else is new. |

## 3. Telegram bot

A Telegram bot (defined in `src/app/api/telegram-webhook`) accepts commands in an operator chat. On a trigger command it dispatches the same workflow, threading the eventual publish notification as a reply (`reply_chat_id` / `reply_message_id`).

No admin UI equivalent — this path exists so runs can be triggered from a phone without opening the admin site.

## Where to watch a run

- **Live logs** — GitHub Actions run page for `on-demand-sitrep.yml`.
- **Did it publish?** — check [`sitrepisr.com/update`](https://sitrepisr.com/update). If it triaged out as a heartbeat, there will be no new entry but the workflow log will show a `heartbeat` marker.
- **Did ingest fail?** — Vercel logs on the public-site project.

## Things that go wrong and where to look

| Symptom | First place to check |
|---|---|
| Workflow didn't fire on schedule | GitHub Actions scheduler UI. Scheduled workflows on free tier can be silently paused after repo inactivity. |
| Workflow ran but nothing published | Agent log — look for the triage / heartbeat marker. |
| Publish step 401/403 | `ADMIN_INGEST_SECRET` mismatch between repo secrets and Vercel env. |
| Source returning empty results | `agent/sitrep_agent/whitelist.py` — feed URL may have rotated. Log an issue on [Grounding-Sources](https://github.com/SITREP-Israel/Grounding-Sources). |
| Manual URLs ignored | Confirm they were passed as newline-separated via the admin form; blank lines are dropped. |
