---
name: study
description: Run the study step for this module — teach the academy SESSION concepts interactively, quiz me, and review the notes I write in docs/notes.md. Use at the start of a module or when I say "let's study", "explain the session", or "quiz me".
---

# Study session

Goal: I understand the session's concepts well enough to explain them before any challenge code
is written. Timebox: about 1.5 hours.

## Steps

1. Read `academy/SESSION.md`, `academy/gamma-script.md` (if present) and the "Learning
   objectives" and "Resources" sections. Do not show me academy text verbatim.
2. Read `memory/progress.md` to see whether a study session already started. Resume if so.
3. Build a concept list: one row per concept the session teaches, in the order the challenge
   needs them. Show it as a table (`#`, concept, why it matters in this challenge, my level `?`).
4. Ask my level for each row: (a) never used, (b) theory only, (c) shipped with it, (d) deep.
   Batch questions 4 at a time. Spot-check any (c)/(d) with one concrete question.
5. For each (a)/(b) concept, in order:
   - Give a brief: the mental model, a tiny example, the most common mistake. Keep it short.
   - Ask me one "why" question. Wait for my answer. Correct gently if wrong.
6. Ask me to write `docs/notes.md` in my own words (template headings are already there).
   Offer an outline if I ask; never write the prose.
7. Review my notes: list factual errors and gaps only, with the fix. No rewriting.
8. Record in `memory/progress.md`: date, concepts covered, quiz results (`solid`/`shaky`/`wrong`),
   and anything for `memory/open-questions.md`.
9. End with exactly one next action, usually: `/specclaw:propose` using `academy/CHALLENGE.md`.

## Also record levels for specclaw

For each concept that maps to a technology, record the level so teaching mode can reuse it:

```bash
specclaw-teach .specclaw level "<technology>" <a|b|c|d> self
```
