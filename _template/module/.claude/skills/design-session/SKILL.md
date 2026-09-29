---
name: design-session
description: Discussion-mode design session before planning. Claude proposes options, patterns and best practices with trade-offs, I decide, and the decisions feed specclaw propose/plan. Use after I've studied the syllabus, or when I say "let's design", "discuss the architecture" or "how should we build this".
---

# Design session (discussion mode)

Goal: I understand and own every significant design decision **before** any plan or code
exists. You are a senior engineer pairing with me: you suggest, explain and challenge; I decide.

## Rules of the discussion

- **One decision at a time.** For each: the problem in one sentence, 2–4 options (one
  deliberately simpler than your recommendation), each with how it works, pros, cons and cost.
  Name the pattern or best practice behind each option, and link the syllabus chapter that
  explains it.
- Give your recommendation and why, then **ask**. Use `AskUserQuestion` for crisp choices. For
  open questions, ask in plain text and wait.
- Use a Mermaid diagram whenever structure or flow is being decided (component tree, test
  layers, data flow, CI pipeline).
- If my choice has a risk I may not see, say so once, clearly, then respect the decision.
- If I ask "why?", answer from first principles, then point to the chapter or source.
- Don't write implementation code in this session. Short illustrative snippets are fine.

## Steps

1. Read `academy/CHALLENGE.md`, `docs/plan.md`, `.claude/rules/module-stack.md`,
   `docs/syllabus/index.md` and `memory/decisions.md`. Resume if a design session already
   started.
2. List the decisions this challenge needs (for example: project layout, test file structure,
   what to mock, how bugs are isolated, commit strategy, CI and quality gates, E2E scope). Show
   the list and let me reorder or cut it.
3. Discuss each decision with the rules above. After each one, record it in
   `docs/design-notes.md` (public, my words where I gave a reason): decision, options
   considered, chosen option, reason, pattern or practice, and chapter link. Mirror a one-line
   entry into `memory/decisions.md`.
4. Finish with an architecture overview diagram in `docs/design-notes.md` and a list of open
   risks.
5. Add `design-notes.md` to the `mkdocs.yml` nav (after the syllabus) and run
   `node tools/check-public.mjs docs/design-notes.md`.
6. Next action: `/specclaw:propose` from `academy/CHALLENGE.md`, then `/specclaw:plan`. Tell
   specclaw to treat `docs/design-notes.md` as settled decisions, so its teaching gate only
   raises decisions not already made.
