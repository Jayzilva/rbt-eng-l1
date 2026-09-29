# rbt-eng-l1 — Engineer track (ENG-L1)

Track container repo. Real work happens inside module folders (`mNN-*/`), each with its own
`CLAUDE.md`. Open Claude Code **inside a module folder** to work on it.

At this level:

- `/start-module mNN` scaffolds a module from `_template/module` and `modules.json`.
- `node tools/build-site.mjs` builds the GitHub Pages site (track landing + each module's
  `mkdocs.yml`) into `site/`; CI publishes it on push to `main`.
- `README.md` holds the track tracker (status, PR, video, site per module). Keep it in sync.
- `_template/module` changes apply only to modules scaffolded afterwards; existing modules are
  independent copies. Edit a live module's own files instead.
- Never commit `.academy/` or any `academy/` content, and never print the academy password.
