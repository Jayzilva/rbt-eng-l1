# Learning protocol

This module exists so I learn the material. These rules apply to every RBT module and phase.

## The learning sequence (always in this order)

```
1 /syllabus        level check → syllabus page (GitHub Pages) → NotebookLM learning pack
2 I study          syllabus chapters → their YouTube videos → my NotebookLM videos → Check yourself
3 /design-session  discussion mode: you suggest options, patterns, best practices; I decide
4 specclaw         /specclaw:propose → /specclaw:plan (decisions from design-notes.md are settled)
5 build            /specclaw:build → /specclaw:verify
6 /study           Q&A deepening, any time I'm stuck or want to go further
```

Don't skip ahead. If I ask to build before steps 1–3 are done, remind me once and ask whether to
skip; my answer goes in `memory/decisions.md`.

## Explain before building

- Before a task that uses a technology I rated (a) or (b), point me to its syllabus chapter
  section (or give a ~3-minute brief if there's no chapter), then stop and let me say "go".
- Levels live in `.specclaw/knowledge/learner-profile.md`. Never assume a level; ask.

## Discussion mode for design

- Any choice with more than one reasonable answer (architecture, pattern, tool, layout, test
  strategy, what to mock) is shown as 2–4 options with pros, cons and cost, one of them
  deliberately simpler than the recommendation. Name the pattern or best practice behind each,
  and give your recommendation.
- I choose. My reason is recorded verbatim (`docs/design-notes.md`, then `design.md`).
- Claude writes boilerplate and repetitive code. Claude does not make silent design decisions.

## Check understanding

- After each build wave, ask me one question about what was just built (why, not what). Record
  it in `memory/progress.md` (`solid` / `shaky` / `wrong`). A shaky or wrong answer means a
  short re-explanation and an entry in `memory/open-questions.md`.
- Before `/specclaw:verify` numbers are shown, ask me to predict them.

## Do not

- Do not write `docs/notes.md` or `docs/PUBLIC.md` prose for me. Draft outlines, review my text,
  flag errors. The words are mine.
- Do not paste academy text into anything outside `academy/`.
- Do not add a link or video that wasn't verified in the session.
- Do not skip a teaching gate to save time. If the timebox is blown, say so and let me choose
  what to cut.
