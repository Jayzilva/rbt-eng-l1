# Spec: ENG-L1-M01 Code Quality & Testing — test an untested component library

**Change:** 001-m01-code-quality-testing
**Created:** 2026-09-30
**Status:** 🟡 Draft

## Overview

Make `component-library/` (8 React 18 + TypeScript components with no tests and 5 seeded
defects) trustworthy. That means a behaviour-focused test suite at three pyramid levels, a
coverage gate that fails the build, every defect fixed test-first with visible red→green history,
and the evidence the challenge asks for. Design decisions D1–D10 (`docs/decisions-made.md`) and
P1–P4 (`design.md`) are settled.

## Requirements

### Functional Requirements

- **FR1 Baseline.** The generated starter library is committed unchanged before any tooling or
  test, as the reference point for every later diff (D1).
- **FR2 Tooling.** `component-library/` has a `package.json` with scripts `test`, `test:cov`,
  `lint`, `typecheck`, `dev`, `build`, `e2e`, `cy:open`, `verify` and `deliverables`, running on
  Node 18+. TypeScript is `strict`. Jest uses `ts-jest` with the `jsdom` environment and loads
  jest-dom and jest-axe matchers through `setupFilesAfterEnv` (D2).
- **FR3 Coverage gate.** `jest --coverage` enforces 80% global and a 70% per-file floor on
  statements, branches, functions and lines. `collectCoverageFrom` covers
  `src/components/**/*.{ts,tsx}`, excluding `index.ts` re-exports (D6). It produces text, HTML
  and lcov reports.
- **FR4 Lint and format.** ESLint with `eslint-plugin-testing-library`, `eslint-plugin-jest-dom`,
  React and TypeScript rules, plus Prettier with `eslint-config-prettier`. `npm run lint` passes.
- **FR5 Hooks.** Husky: `pre-commit` runs lint-staged (ESLint + Prettier on staged files only);
  `pre-push` runs `typecheck` and `test:cov`. Pre-commit must not run tests, so red commits are
  allowed (D7, D10).
- **FR6 Test helpers.** `tests/utils.tsx` exports `renderWithUser(ui)`, which returns RTL's render
  result plus a `user` from `userEvent.setup()`. Each unit test file defines a `setup(overrides)`
  factory. Controlled components are exercised through a `Harness` holding state (D4, D5).
- **FR7 Unit suite.** Each of the 8 components has a colocated `<Name>.test.tsx` with
  `describe` groups for rendering, interactions and edge cases. There are at least 5 behaviour
  tests per component in AAA form, using role or label queries (`getByTestId` only with a
  written reason). Only callbacks and time are mocked (D3, D5).
- **FR8 Accessibility.** Each interactive component (Modal, Tabs, Dropdown, Toggle, Input,
  Button) has keyboard and ARIA-state tests following its WAI-ARIA pattern. `jest-axe` reports no
  violations on the important states (default, open or expanded, error, disabled) (D8).
- **FR9 Found-bug handling (Part 2).** When a test that correctly describes intended behaviour
  fails, the task does not fix code and does not weaken the test. The component's test commit is
  then labelled red and names each failing test:
  `test(<component>): unit tests (red: <failing behaviour>)`. It records a "found" entry
  (component, failing test name, failing assertion, observed symptom) in the bug-fixes
  deliverable. *(Implementation note: specclaw commits once per task and bugs aren't known in
  advance, so the failing test shares its commit with that component's passing tests rather than
  having a commit of its own. The D7 evidence holds: the failing test is committed before its
  fix, and the fix commit touches no test.)* (D7, P4)
- **FR10 Bug fixes (Part 3).** For each of the 5 defects the learner confirms the test is correct
  and states the root cause and fix approach. A minimal code change is then committed as
  `fix(<component>): <what> (green)`, touching no test file. An optional
  `refactor(<component>): …` follows with all tests green (D7, P4).
- **FR11 Integration tests.** At least 3 tests in `tests/integration/*.int.test.tsx` render real
  components together (for example a form inside a Modal, a Dropdown driving a Card, Tabs holding
  inputs), with no mocked children (D3, D5).
- **FR12 Demo page and E2E.** `demo/` contains a Vite `index.html` + `main.tsx` Settings screen
  composed of the library components. `cypress/e2e/*.cy.ts` holds at least one flow that opens
  the Modal, uses at least 4 components, verifies the resulting state, and runs `cy.checkA11y()`
  (cypress-axe). `npm run e2e` starts Vite, waits for the URL, runs Cypress headless in Electron,
  and stops the server (D9, P3).
- **FR13 Deliverables.** `npm run deliverables` writes to `docs/deliverables/`:
  `jayath-de-silva-month1-test-suite.zip` (gitignored, attached to the PR),
  `…-coverage-report.html` (committed), `…-bug-fixes.md` (committed; one section per bug with
  location, symptom, root cause, test and fix), and `…-tdd-commits.md` (committed; `git log` of
  the change annotated red/green/refactor) (P2).
- **FR14 CI file.** `.github/workflows/m01-ci.yml` at the repo root runs lint, typecheck,
  `test:cov` and `e2e` for `m01-code-quality-testing/component-library/**` changes. It is
  committed; running it isn't required while the account's Actions billing lock remains.

### Non-Functional Requirements

- **NFR1 Test quality.** Tests assert user-observable behaviour, not internal state, class names
  or implementation details. Names read as sentences. No snapshot tests.
- **NFR2 Determinism.** No fixed waits (`setTimeout` sleeps, `cy.wait(<ms>)`). Timers use Jest fake
  timers. Async UI uses `findBy*` or `waitFor`. The unit and integration suite is stable across 3
  consecutive runs.
- **NFR3 Speed.** The full Jest suite with coverage finishes in under 60 s locally. The
  pre-commit hook finishes in under 10 s.
- **NFR4 Strictness.** `tsc --noEmit` passes, with no `any` in tests except where a comment
  explains why.
- **NFR5 Confidentiality.** Nothing under `academy/` is committed or quoted.
  `academy/bug-key.md` is not read until FR10 is complete for all 5 bugs.

## Acceptance Criteria

- [ ] **AC1** The first commit of the change adds `component-library/src/**` byte-identical to
  the generated starter (FR1).
- [ ] **AC2** `npm ci && npm run verify` succeeds from a clean clone of the final branch (lint,
  typecheck, `test:cov`, `e2e`) (FR2–FR5, FR12).
- [ ] **AC3** `test:cov` reports ≥ 80% global and ≥ 70% for every component file, on all four
  metrics. Deliberately lowering one component below 70% makes the run fail and name that file
  (FR3).
- [ ] **AC4** Each of the 8 components has a colocated test file with rendering, interactions and
  edge-case groups, and at least 5 behaviour tests (FR7).
- [ ] **AC5** Every interactive component has at least one keyboard test and one ARIA-state
  assertion, and `jest-axe` passes on the listed states (FR8).
- [ ] **AC6** `git log main..HEAD` shows 5 red→green pairs. Each red commit changes only test
  files and its test fails at that commit for the documented reason. Each green commit changes
  only non-test files and makes that test pass (FR9, FR10).
- [ ] **AC7** The bug-fixes deliverable has 5 complete sections whose root causes are stated in
  the learner's words and match the green commits (FR10, FR13).
- [ ] **AC8** At least 3 integration tests pass with real child components (FR11).
- [ ] **AC9** At least 1 Cypress flow passes headless via `npm run e2e`, covering at least 4
  components and an axe check with no violations, or with each disabled rule justified in a code
  comment (FR12).
- [ ] **AC10** A pre-commit containing a failing test is not blocked, and a pre-push with a
  failing test or coverage below threshold is blocked (FR5).
- [ ] **AC11** `npm run deliverables` produces all 4 named files; the zip is gitignored (FR13).
- [ ] **AC12** `.github/workflows/m01-ci.yml` exists and passes `actionlint` if available, or a
  YAML parse otherwise (FR14).
- [ ] **AC13** No test uses a fixed sleep, and 3 consecutive `npm test` runs all pass (NFR2).
- [ ] **AC14** `git log` for the change contains no file under `academy/` (NFR5).

## Edge Cases

- **Fewer than 5 bugs surface in Part 2.** Part 3 opens with a guided hunt for the remaining
  categories (off-by-one, null check, handler, state, accessibility). The learner chooses where to
  look first; the key stays sealed.
- **A failing test is wrong, not the code.** The learner triages it as a test bug. The test is
  fixed in a `test(…)` commit, with no red/green pair and no bug entry.
- **One defect spans two components**, or a fix breaks another test. The green commit stays
  minimal. Any follow-up goes in a `refactor(…)` commit with everything green, or the learner
  re-triages.
- **The facilitator's starter repo arrives before Part 2** (D1). The learner confirms the switch.
  The baseline is re-committed and props are reconciled in a `chore(…)` commit before Part 2.
- **Cypress can't launch on Windows.** Fall back to `cypress run --browser chrome` or record a
  gotcha. AC9 still requires one passing headless run.
- **A per-file threshold fails on an unreachable branch.** Prefer removing the dead branch in a
  refactor over excluding the file. Any exclusion needs a written reason in `jest.config.ts`.

## Dependencies

- Node.js 18+ and npm on this machine; network access for `npm install` and the Cypress
  binary (~500 MB)
- The specclaw fork 0.9.0 with teaching mode (already configured)
- No other change or module

## Bypassed Dependencies

_None._

## Item Split

_None._

## Resumed From Split

_None._

## Notes

- The size is **architectural**: `design.md` records D1–D10 and P1–P4.
- `/specclaw:loop` must not be run until all 5 green commits exist (P1).
- Timebox: scheduled Wed 30 Sep – Thu 1 Oct 2026; Parts 0–1 today, Parts 2–5 Thursday.
