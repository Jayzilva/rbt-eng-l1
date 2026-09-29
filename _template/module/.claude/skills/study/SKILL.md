---
name: study
description: Run the study step for this module — diagnose my level per concept, offer a published syllabus guide, then teach and quiz me and review my notes. Use at the start of a module or when I say "let's study", "explain the session", or "quiz me".
---

# Study session

Goal: I understand the session's concepts well enough to explain them before any challenge code
is written. Timebox: about 1.5 hours, plus reading time if a syllabus is generated.

## Steps

1. Read `academy/SESSION.md`, `academy/gamma-script.md` (if present), `academy/CHALLENGE.md`
   and `docs/resources.md` (if present). Do not show me academy text verbatim.
2. Read `memory/progress.md` and `.specclaw/knowledge/learner-profile.md` to see whether a study
   session already started. Resume if so; don't re-ask recorded levels.
3. **Diagnose.** Build a concept list: one row per concept the session teaches, in the order the
   challenge needs them. Show it as a table (`#`, concept, why it matters in this challenge, my
   level `?`). Ask my level per row, (a) never used, (b) theory only, (c) shipped, (d) deep,
   batched 4 at a time with `AskUserQuestion`. Spot-check each (c)/(d) with one concrete
   question and lower the level if the answer doesn't hold, saying so. Record every level:

   ```bash
   specclaw-teach .specclaw level "<technology>" <a|b|c|d> self
   ```

4. **Show the level map** and what it means for my time.
5. **Offer the syllabus guide.** If `specclaw-teach .specclaw syllabus` prints `ask` and any
   concept is (a)/(b), ask with `AskUserQuestion`: *"Generate a syllabus guide for these
   concepts?"*, options **Yes, generate it** / **No, go straight to briefs**. (`always` skips the
   question, `never` skips this step.)
   - **Yes:** generate it following the specclaw recipe (`/specclaw:teach syllabus`, recipe in
     the plugin's `references/syllabus.md`), into `docs/syllabus/`. One chapter per (a)/(b)
     concept, each with a Mermaid diagram, worked examples in this module's stack, common
     mistakes, collapsed self-check answers, and **verified** docs, articles and YouTube videos
     (fetch every URL; look up every video via YouTube oEmbed; never write a link from memory).
     Start from `docs/resources.md` where it covers a concept. Add each chapter to the
     `nav` in `mkdocs.yml`. Run `node tools/check-public.mjs docs/syllabus/*.md` and fix hits.
     Then tell me the reading order and ask me to read chapter 1.
   - **No:** continue with step 6.
6. **Teach and check.** For each (a)/(b) concept, in order:
   - With a syllabus: I read the chapter, then you ask me its hardest check-yourself question
     and one "why" question of your own. Don't re-explain what the chapter says; fix what I got
     wrong.
   - Without one: give a short brief (mental model, tiny example, most common mistake), then one
     "why" question.
   - Wait for my answer every time. Correct gently if wrong.
7. Ask me to write `docs/notes.md` in my own words (template headings are already there).
   Offer an outline if I ask; never write the prose.
8. Review my notes: list factual errors and gaps only, with the fix. No rewriting.
9. Record in `memory/progress.md`: date, concepts covered, quiz results per concept
   (`solid` / `shaky` / `wrong`), and anything for `memory/open-questions.md`.
10. End with exactly one next action, usually `/specclaw:propose` using `academy/CHALLENGE.md`.
