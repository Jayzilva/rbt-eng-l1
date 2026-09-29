---
name: notebooklm-pack
description: Build NotebookLM packs. "learn" mode (start of module) builds sources and video prompts from the syllabus to study with; "recap" mode (end of module) builds the public video from PUBLIC.md plus the YouTube description. Use when I say "make the NotebookLM prompt", "video pack", or after /syllabus or /public-writeup.
---

# NotebookLM packs

Output goes to `docs/media/notebooklm/`. Only public material goes in; never `academy/`.
The mode is the argument (`learn` or `recap`). Ask if it's unclear.

## learn: study videos from the syllabus (before building)

1. Requires `docs/syllabus/`. `node tools/check-public.mjs docs/syllabus/*.md` must exit 0.
2. Write `docs/media/notebooklm/learn-pack.md`:
   - Notebook name.
   - **Sources**, as copy-paste blocks:
     - raw GitHub URLs for `docs/syllabus/README.md` and every chapter
       (`https://raw.githubusercontent.com/Jayzilva/{{TRACK_REPO}}/main/{{MODULE_DIR}}/docs/syllabus/<file>`)
     - 5–8 official or reference pages from the chapters' Go deeper lists
     - the 8–12 best YouTube videos from the chapters (verified links only)
     - a total count, which must stay within the NotebookLM source limit
   - One **Video Overview** "Customize" prompt per 5–7 chapters. Each prompt **opens with a
     source-roles paragraph**: the syllabus is the primary source (explanations, examples,
     diagrams, order); official pages and videos are supporting references used only to confirm
     facts, never as the narrative, with none of their examples, analogies or wording reused;
     the syllabus wins on any conflict; named ideas get a one-phrase credit. Then it states the audience
     (my level), the topics in chapter order, one running example from this module, "one common
     mistake per section", a recap and three self-check questions, and "do not invent
     statistics or product names".
   - An optional Audio Overview prompt with the same source-roles paragraph.
   - Publishing guidance: one video per prompt; upload them as a module playlist (Part 1, Part 2),
     unlisted by default. To publish publicly, regenerate with only the syllabus and official docs
     as sources, and credit the references in the description.
   - A check step: API names in the video must match the syllabus, and the syllabus wins on any
     conflict.
3. Remind me that the raw links work only after the syllabus is pushed to `main`, with file
   upload as the fallback. Then show me the first prompt ready to paste.

## recap: public module video (after the PR is approved)

1. `node tools/check-public.mjs docs/PUBLIC.md` must exit 0. Stop if not.
2. `docs/media/notebooklm/sources.md`: `docs/PUBLIC.md`, the headline metrics from
   `verify-report.md`, `docs/design-notes.md`, and 3–5 public references.
3. `docs/media/notebooklm/video-prompt.md`: 5–8 minutes, for engineers learning
   {{MODULE_TITLE}}. Same source-roles rule: my material leads, references only confirm. Explain the concepts through what was built, use only numbers from the
   sources, don't name internal projects, and end by pointing to the GitHub repo and site.
4. `docs/media/youtube.md`: title (≤ 70 characters, starting with `{{MODULE_ID}}`), and a
   description linking the module site (`https://jayzilva.github.io/{{TRACK_REPO}}/{{MODULE_DIR}}/`),
   the code folder and the PR. Plus a chapters placeholder and tags.
5. `docs/media/review-checklist.md`: numbers match sources, nothing confidential, no wrong
   claims, names pronounced correctly. Any failure means regenerate or cut; never upload
   unchecked.
6. Manual steps for me: notebook, sources, prompt, generate, watch, checklist, upload, then paste
   the URL into the `README.md` Links table and `docs/index.md`.
