---
name: site-post
description: Write this module's build-log post for the GitHub Pages site from docs/PUBLIC.md, update the site overview links, and check it builds. Use when the module is approved or I say "write the build log" or "update the site".
---

# Build-log post for GitHub Pages

The module's public site is `mkdocs.yml` + `docs/`, published by the track repo's Pages workflow
at `https://jayzilva.github.io/{{TRACK_REPO}}/{{MODULE_DIR}}/`. This skill writes
`docs/build-log.md` and wires the links.

1. Check `node tools/check-public.mjs docs/PUBLIC.md` exits 0. Stop if not.
2. Write `docs/build-log.md` (500–900 words), built from my sentences in `PUBLIC.md`,
   `memory/progress.md` and `.specclaw/changes/<change>/teaching.md`. Restructure and trim; do
   not invent experiences or numbers:
   - Title: `{{MODULE_ID}} build log — {{MODULE_TITLE}}`
   - The problem, in plain words
   - What I built (2–4 bullets with the headline metric)
   - The concept that clicked, with one Mermaid diagram if it helps
   - One mistake I made and what fixed it
   - What I'd do differently
   - Links: code folder, PR, video, syllabus (if generated)
3. Update `docs/index.md` (PR, video, status rows) and the module `README.md` Links table.
4. Run the checker on everything the site publishes and fix every hit:

   ```bash
   node tools/check-public.mjs docs/index.md docs/PUBLIC.md docs/build-log.md docs/notes.md docs/resources.md docs/syllabus/*.md
   ```

5. If `mkdocs` is installed, run `mkdocs build --strict` and fix broken links or nav entries.
6. Show me the post. Edits are mine to accept. It publishes when merged to `main`.
