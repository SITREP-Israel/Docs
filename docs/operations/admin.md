# Admin surface

Separate Next.js app, separate Vercel deploy, separate repo.

- **URL:** [admin.sitrepisr.com](https://admin.sitrepisr.com)
- **Repo:** [`danielrosehill/SITREP-ISR-Admin`](https://github.com/danielrosehill/SITREP-ISR-Admin)
- **Local path on workstation:** `~/repos/github/my-repos/SITREP-ISR-Admin`

## Why it's a separate repo

Split from the public site on 2026-04-20 (commit `87fdd18` on the main repo). Reasons:

- **Independent deploys.** Operator-only UI changes don't redeploy the reader surface.
- **Auth scope.** Admin middleware and secrets stay off the public domain.
- **Independent rollback.** Reverting admin doesn't touch published reports.

Deliberately **not a git submodule.** Sibling repos, reconciled by the sync rule (see [Architecture](../architecture.md#the-sync-rule)).

## What it does

### Fire SITREP

Form → `POST /api/trigger/sitrep` → GitHub Actions `workflow_dispatch` on the main repo's `on-demand-sitrep.yml`.

Requires a PAT with `workflow` scope, stored as an admin env var.

### Newsletter preview + send

Renders a SITREP into the newsletter template, shows the operator the preview, and on confirm hands off to Buttondown for send. This is deliberately a two-step flow — the agent pipeline does not auto-send to the list.

### Back-edit

Edits to already-published SITREPs (typo fixes, clarifications, corrections). Writes through a back-edit API on the public site. Changes are dated in place, not silently applied.

### Newsletter-adjacent housekeeping

- Buttondown list stats
- Resend unresponsive emails
- Preview the newsletter rendering without sending

## Env contract

Admin's `.env.local` holds:

| Var | Purpose |
|---|---|
| `GITHUB_DISPATCH_TOKEN` | PAT for dispatching the public-repo workflow |
| `BUTTONDOWN_API_KEY` | Newsletter provider |
| `VERCEL_DEPLOY_HOOK_URL` | Optional — trigger public-site redeploy from admin |
| `ADMIN_INGEST_SECRET` | Shared with the public site; used for back-edit calls |
| `NEXTAUTH_SECRET` / auth vars | Admin auth middleware |

**Do not copy admin secrets into the public site repo.** They are scoped deliberately.

## The sync rule, restated

Any operator-relevant knob added on the agent side must be mirrored through four layers:

1. CLI flag / agent state (main repo)
2. Workflow input in `on-demand-sitrep.yml` (main repo)
3. API passthrough in `src/app/api/trigger/sitrep/route.ts` (admin repo)
4. UI control in `src/app/admin/page.tsx` (admin repo)

Wire three of the four and you ship a feature the operator can't reach. Wire all four or don't ship.
