# Public content rules

Three public surfaces link to this module: **GitHub** (this repo, public),
**GitHub Pages** (module site: write-up, build log, notes, syllabus) and **YouTube** (NotebookLM
video). Treat all three as public.

## Confidential — never leaves `academy/`

- Anything under `academy/` (decrypted BISTEC Academy SESSION, CHALLENGE, rubric, gamma script).
- Verbatim challenge text, rubric wording, scoring prompts, starter code, the academy password.
- Names of internal projects/clients beyond what the academy owner has cleared.

## Public — may be published

- `docs/PUBLIC.md`: what I built, what I learned, results, in my own words.
- Everything `mkdocs.yml` publishes: `docs/index.md`, `build-log.md`, `notes.md`, `resources.md`,
  `syllabus/`. `plan.md`, `self-score.md`, `deliverables/` and `media/` are excluded from the site.
- My own code, tests, diagrams, metrics, and screenshots of my own work.
- General concepts (TDD, REST, Kubernetes…) explained in my words with public references.

## Before anything is published

1. Written OK from the academy owner exists (tracked in the repo README "Publishing" section).
2. `/public-writeup` confidentiality check passes: no sentence of 12+ words matches `academy/`.
3. I have watched/read the full output. NotebookLM videos are never uploaded unchecked.
4. Links are cross-wired: GitHub README ↔ Pages site ↔ YouTube description.
