---
name: syllabus
description: Step 1 of every module. Check my level per concept, generate the syllabus guide (scope, chapters with diagrams, verified docs, articles and YouTube videos) as a GitHub Pages section, and build the NotebookLM learning pack. Use at the start of a module or when I say "make the syllabus".
---

# Syllabus: learn before building

The learning sequence for every module (see `.claude/rules/learning.md`):
**syllabus page → NotebookLM video → I study → design discussion → plan → build → `/study` Q&A as needed.**
This skill covers the first two steps.

## 1. Level check (short)

1. Read `academy/SESSION.md`, `academy/CHALLENGE.md`, `academy/gamma-script.md` (if present),
   `docs/resources.md` and `.specclaw/knowledge/learner-profile.md`. Never show academy text
   verbatim.
2. Build the concept table (`#`, concept, why it matters in this challenge, my level), in the
   order the challenge needs them. Show levels already recorded instead of re-asking them.
3. Ask the missing levels with `AskUserQuestion`, 4 per call: (a) never used, (b) theory only,
   (c) shipped, (d) deep. Spot-check each (c)/(d) with one concrete question, and lower the
   level if the answer doesn't hold, saying why. Record every level:

   ```bash
   specclaw-teach .specclaw level "<technology>" <a|b|c|d> self
   ```

## 2. Scope, then generate

1. Show the scope: one chapter per (a) concept, a short production-concerns chapter per (b),
   a glossary line for (c), nothing for (d). Give estimated reading plus exercise time. Ask
   once for changes to the scope, then generate.
2. Generate `docs/syllabus/` following the specclaw recipe (`references/syllabus.md` in the
   specclaw plugin): `README.md` (GitHub shows it on the folder page; scope, level map, how-to-use flow diagram, chapter table,
   assumptions) and `NN-<concept>.md` chapters. Each chapter has, in order: Why this matters
   here, Mental model, Diagram (Mermaid), Core primitives (code in this module's stack),
   Worked example, Common mistakes, Check yourself (answers in `<details markdown="1"><summary>…</summary>` blocks (they render on GitHub and in MkDocs)),
   Go deeper, Used in. Footer: `*Resources verified <date>.*`
3. **Resources are verified in this session, never recalled.** Fetch every article and doc
   (HTTP 200, topic matches, real title). Look up every YouTube video through
   `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<id>&format=json` and
   copy the returned title and channel. Prefer official channels and known educators. For 8 or
   more chapters, parallel writer agents are fine, but they must receive the verified list and
   add nothing to it.
4. Add every chapter to the `Syllabus` section of `mkdocs.yml` `nav` (overview: `syllabus/README.md`).
   Use only Markdown that GitHub renders too: Mermaid fences, tables, `<details>`; no `???`/`!!!`
   admonitions. The syllabus must be fully readable on github.com without the site.
5. Check: `node tools/check-public.mjs docs/syllabus/*.md` exits 0, and
   `python -m mkdocs build --strict` passes (if mkdocs is installed).

## 3. NotebookLM learning pack

Run `/notebooklm-pack learn`: sources list (raw GitHub links to the chapters, official docs,
the best 8–12 videos), plus one Video Overview prompt per 5–7 chapters.

## 4. Hand-off

Tell me: the GitHub folder link (`https://github.com/Jayzilva/{{TRACK_REPO}}/tree/main/{{MODULE_DIR}}/docs/syllabus`),
the site page when Pages is live, the learn-pack path, and the study order (chapter → its videos → NotebookLM
video → Check yourself). Update the module status to `Studying` in `README.md`, `docs/index.md`
and the track README. The next action after I finish studying is `/design-session`.
