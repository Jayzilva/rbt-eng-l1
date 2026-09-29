---
name: public-writeup
description: Prepare docs/PUBLIC.md (my own-words summary for the GitHub Pages site, YouTube and the portfolio) and the named deliverables, then run the confidentiality check. Use after self-score, or when I say "write up the module" or "prepare the public version".
---

# Public write-up

`docs/PUBLIC.md` is the main source for the Pages site and NotebookLM. It must be in my words and
must not leak academy content. Follow `.claude/rules/public-content.md`.

## 1. Deliverables

Create or check the files the challenge names, in `docs/deliverables/`, using the naming
convention `{{PARTICIPANT}}-month{{MODULE_N}}-<deliverable>.<ext>`. List which exist and which
are missing.

## 2. PUBLIC.md

Walk me through the headings in `docs/PUBLIC.md` one at a time. For each: ask me a question that
draws the content out ("What surprised you about…?", "What number are you proudest of?"), let me
answer, then help me tighten *my* sentences. Do not invent experiences or numbers. Every metric
must trace to `verify-report.md` or a deliverable.

## 3. Confidentiality check

Run the checker and fix every hit before continuing:

```bash
node tools/check-public.mjs docs/PUBLIC.md
```

The check flags any 12-word run shared with `academy/` files and any line mentioning internal
academy URLs or passwords. Exit code 0 means clean.

## 4. Links

Update the "Links" table in `README.md` (module) with the PR URL once it exists. YouTube and
Site cells stay `pending` until published.
