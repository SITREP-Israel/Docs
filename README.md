# SITREP ISR — Docs

Source for the SITREP ISR pipeline documentation site, built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and deployed to GitHub Pages.

Live site: _to be configured — see below_.

## Running locally

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Site will be at `http://127.0.0.1:8000`.

## Structure

```
docs/
  index.md                    Home
  architecture.md             High-level map of the four moving parts
  pipelines/
    index.md                  Pipeline overview
    sitrep-generation.md      The core SITREP pipeline
    simulation-runner.md      Scenario simulations
    audio.md                  Audio / podcast pipeline
    publication.md            Fan-out: web, newsletter, Telegram, RSS
  operations/
    sources.md                Source whitelist & contributor inventory
    triggering.md             How runs are kicked off
    admin.md                  The admin surface
  reference/
    glossary.md
    repos.md
mkdocs.yml                    Site config
requirements.txt              Python deps
.github/workflows/deploy.yml  GitHub Pages deploy
CNAME                         Custom domain for Pages (once set)
```

## Deploying

Pushes to `main` build and publish via the `deploy.yml` workflow. First-time setup:

1. **Repo → Settings → Pages**: set Source to **"GitHub Actions"**.
2. **Repo → Settings → Pages → Custom domain**: set to the verified subdomain (e.g. `docs.sitrepisr.com`) and save. This writes the `CNAME` file automatically and enables HTTPS once the cert is provisioned.
3. **DNS**: add a `CNAME` record on `sitrepisr.com` pointing `docs` (or whichever subdomain) → `<org>.github.io`. Wait for verification + cert.
4. Push to `main`. The workflow will build and deploy.

## Editing

Every page has an "edit this page" pencil in the top-right of the MkDocs Material header; it links straight to the file on GitHub.

## Licence

Docs content is CC BY 4.0.
