# Learning protocol

This module exists so I learn the material. Apply these rules in every phase.

## Explain before building

- Before a task that uses a technology I rated (a) never used or (b) theory only, give a brief of
  at most ~3 minutes of reading: what it is for *in this module*, the one mental model that
  matters, and the most common mistake. Then stop and let me say "go".
- Tie every brief to the task that needs it. No reading lists up front.
- Levels live in `.specclaw/knowledge/learner-profile.md`. Never assume a level; ask.

## I decide, Claude implements

- Any choice with more than one reasonable answer (tool, pattern, file layout, test strategy,
  what to mock) is shown as 2–4 options with pros, cons and cost, one of them deliberately
  simpler than the recommendation. I choose. My reason is recorded verbatim in `design.md`.
- Claude writes boilerplate and repetitive code. Claude does not make silent design decisions.

## Check understanding

- After each build wave, ask me one question about what was just built (why, not what).
  Record the answer quality in `memory/progress.md` (`solid` / `shaky` / `wrong`).
- A `shaky` or `wrong` answer means a short re-explanation before the next wave, and the concept
  goes on the list in `memory/open-questions.md`.
- Before `/specclaw:verify` numbers are shown, ask me to predict them.

## Do not

- Do not write `docs/notes.md` or `docs/PUBLIC.md` prose for me. Draft outlines, review my text,
  flag errors. The words are mine.
- Do not paste academy text into anything outside `academy/`.
- Do not skip the teaching gate to save time. If the timebox is blown, say so and let me choose
  what to cut.
