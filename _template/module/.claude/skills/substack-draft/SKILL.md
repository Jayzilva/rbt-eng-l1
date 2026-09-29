---
name: substack-draft
description: Draft this module's section of the weekly Substack build-log post from docs/PUBLIC.md, with links to GitHub and YouTube. Use when the module is approved or I say "draft the Substack part".
---

# Substack section draft

The weekly build log (published Mondays) combines several modules. This skill writes this
module's section; the weekly post is assembled from sections.

1. Check `docs/PUBLIC.md` passes `node tools/check-public.mjs docs/PUBLIC.md`. Stop if not.
2. Write `docs/media/substack-section.md` (400–700 words), built from my sentences in
   `PUBLIC.md`; restructure and trim, do not invent:
   - Heading: `{{MODULE_ID}} — {{MODULE_TITLE}}`
   - One-paragraph hook: the problem, in plain words
   - What I built (2–4 bullets with the headline metric)
   - The concept that clicked, explained simply
   - One mistake I made and what fixed it
   - Links: GitHub module folder, PR, YouTube video (placeholders if not live yet)
3. Show me the draft. Edits are mine to accept. Once published, put the post URL in the
   `README.md` Links table and in `docs/media/youtube.md`.
