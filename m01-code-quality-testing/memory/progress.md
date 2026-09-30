# Progress log — ENG-L1-M01

Newest entry first. Format: date · time spent · what · quiz results · stopped at · next action.

## 2026-09-29 · setup
- Module scaffolded from `_template/module`; academy pages decrypted into `academy/` (gitignored).
- specclaw 0.8.0 (fork Jayzilva/specclaw, teaching mode) initialised; teach depth `full`.
- `docs/plan.md` and `.claude/rules/module-stack.md` filled from the challenge.
- Stopped at: nothing built yet.
- Next action: ask facilitator for the starter library (see plan Risks), then `/study`.

## 2026-09-29 · level check + syllabus
- Level check: 11/12 concepts at (a); React+TS downgraded c→b after spot-check (untyped props under strict).
- Quiz: testing pyramid (Dropdown→Card wiring = integration test) — solid. Disabled button test: shaky (thought test would stop; it runs and asserts handler not called).
- Syllabus generated: docs/syllabus/ index + 12 chapters, verified resources (12×2 videos, 12×2 articles).
- NotebookLM learn pack: docs/media/notebooklm/learn-pack.md (30 sources, 2 video prompts).
- Learning flow changed at my request: syllabus → NotebookLM → study → /design-session → specclaw → build; /study = Q&A.
- Stopped at: studying chapter 01.
- Next action: read chapters 01–06 + videos + NotebookLM video 1, then 07–12 + video 2, then `/design-session`.

## 2026-09-30 · propose + plan + build W1–W2
- Proposal 001 approved (architectural); plan: 14 FR / 14 AC / 22 tasks / 6 waves; decisions P1–P4 + B1 (hook scope) recorded.
- Build on branch eng-l1/001-m01-code-quality-testing (pushed): T1 baseline, style commit (Prettier on starter), T2 Jest/ts-jest/coverage gate, T3 ESLint/Prettier/Husky (path-guarded), T4 Vite/Cypress (Cypress verified on Windows), T5 renderWithUser + expect-failures + bug doc skeleton.
- Spot-check: Vite entry is index.html (not vite.config.ts) — shaky → Vite b.
- Pending approval: pre-push coverage gate enforced only for pushes to main (advisory on feature branch).
- Stopped at: wave 3 gate (T6 Button tests, then learner review).
- Next action: wave 3 brief (RTL, user-event, mocking, jest-axe) → T6 → review Button tests → T7–T13.
