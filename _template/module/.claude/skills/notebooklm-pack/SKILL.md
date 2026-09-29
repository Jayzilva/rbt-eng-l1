---
name: notebooklm-pack
description: Build the NotebookLM source pack and video prompt for this module, plus the YouTube title and description with backlinks. Use after docs/PUBLIC.md passes the confidentiality check, or when I say "make the video pack".
---

# NotebookLM video pack

Output goes to `docs/media/notebooklm/`. Only public material goes in; never `academy/`.

1. Confirm `node tools/check-public.mjs docs/PUBLIC.md` exits 0. Stop if not.
2. Write `docs/media/notebooklm/sources.md`: a single upload file combining `docs/PUBLIC.md`,
   the key metrics from `verify-report.md`, and 3–5 public reference links (official docs,
   well-known articles) for the concepts. Mark the top: "Source pack for {{MODULE_ID}}".
3. Write `docs/media/notebooklm/video-prompt.md`: the "Customize" prompt to paste into
   NotebookLM Video Overview. Target 5–8 minutes. Audience: engineers learning {{MODULE_TITLE}}.
   Must say: explain concepts through what was built here; use only the numbers in the sources;
   do not name BISTEC internal projects; end by pointing to the GitHub repo.
4. Write `docs/media/youtube.md`: title (≤ 70 chars, starts with `{{MODULE_ID}}`), description
   with links to the GitHub module folder, the PR, and the module's GitHub Pages site
   (`https://jayzilva.github.io/<track repo>/<module dir>/`), chapters placeholder, tags.
5. Write `docs/media/review-checklist.md` for me to tick after watching the generated video:
   numbers match sources, no confidential content, no wrong claims, audio names correct. Any
   failure means regenerate or cut; never upload unchecked.
6. Tell me the manual steps: create notebook, upload `sources.md`, paste prompt, generate,
   watch, tick checklist, upload to YouTube, paste URL into `README.md` Links table.
