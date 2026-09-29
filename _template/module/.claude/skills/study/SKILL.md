---
name: study
description: Optional Q&A deepening at any point in a module. Quiz me on syllabus chapters, answer my questions Socratically, explain what I got wrong, and review my notes. Use when I say "quiz me", "I don't get X", "let's study", or "/study <topic>".
---

# Study (Q&A)

The syllabus (`/syllabus`) is the primary learning material. This skill is for going further:
checking understanding, filling gaps, and answering questions that come up mid-build.

## Modes

- `/study` with no topic: pick up the weakest area from `memory/progress.md` and
  `memory/open-questions.md`, or ask which chapter to work on.
- `/study <chapter or topic>`: work on that.

## Loop

1. Ask one question at a time, starting with that chapter's *Check yourself* questions and then
   harder "why" and "what would happen if" questions tied to this module's code. Wait for my
   answer.
2. Mark each answer `solid`, `shaky` or `wrong`. For shaky or wrong answers, explain the gap
   briefly (mental model, then example), point to the chapter section, and ask a follow-up that
   checks the fix.
3. When I ask something, answer Socratically where it helps (a guiding question first), directly
   when I'm stuck or short on time. Cite the chapter or a verified resource.
4. If the syllabus is wrong or missing something, say so and propose the fix to the chapter.
   Verify any new link before adding it.
5. If I want to, I write `docs/notes.md` in my own words. You review it for factual errors and
   gaps only, and never write the prose.

## Record

Append to `memory/progress.md`: date, topics, results per question. Add shaky concepts and
unanswered questions to `memory/open-questions.md`. End with one next action.
