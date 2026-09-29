# Decisions — ENG-L1-M01

One entry per decision: date, decision, options considered, my reason.

- 2026-09-29 · D1 starter library: hybrid — sealed-bug generated library now, swap to facilitator repo if it arrives before Part 2. Key in academy/bug-key.md (don't open before Part 3 ends). See docs/design-notes.md#d1.
- 2026-09-29 · D2 ts-jest · D3 hybrid layout (colocated unit, tests/integration, cypress/e2e) · D4 setup() + renderWithUser · D5 mock only at boundary + Harness. See docs/design-notes.md.
- 2026-09-29 · D6 coverage: global 80 + per-file 70 (lines/branches/functions/statements); collectCoverageFrom src/components minus index.ts/stories.
- 2026-09-29 · D7 TDD: red commit (failing test only) → green commit (fix only) → optional refactor; Part 2 failures parked as 'found'; hooks must not run full suite; specclaw red/green tasks.
