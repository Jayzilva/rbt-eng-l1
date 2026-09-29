# Design notes — ENG-L1-M01 Code Quality & Testing

Decisions made in `/design-session` before planning. Each entry: the decision, the options
considered, what I chose, my reason, and the pattern or practice behind it.

## D1 · Where the starter library comes from

- **Decided:** 2026-09-29
- **Options:** (A) wait for the facilitator's starter repo; (B) sealed-bug generated library;
  (C) build the library and plant bugs ourselves; (D) hybrid: B now, switch to A if it arrives
  before Part 2.
- **Chose:** D, hybrid.
- **Reason:** keeps the Wed–Thu timebox without faking the part that teaches: finding bugs I
  didn't write. An agent with no access to this discussion generates the 8 components with 5
  bugs in the published categories. The answer key stays in `academy/bug-key.md` (gitignored)
  and is opened only after Part 3.
- **Pattern:** substitute a stand-in for an unavailable dependency behind a clean swap point,
  and record the substitution (the same idea as a fake, [ch07](syllabus/07-mocking.md)).
- **Reviewer note:** the PR states the library was generated, and why.

## D2 · Project tooling

- **Decided:** 2026-09-29
- **Options:** (A) Vite + Jest with `ts-jest`; (B) Vite + Jest with `babel-jest`; (C) Vite + Jest
  with `@swc/jest`. Vitest was ruled out because the challenge requires Jest.
- **Chose:** A, `ts-jest`.
- **Reason:** type errors fail the tests, which reinforces strict TypeScript while I'm learning
  it. Speed doesn't matter for 8 components.
- **Pattern:** fail fast: catch type errors at the earliest, cheapest step ([ch02](syllabus/02-jest-basics.md), [ch04](syllabus/04-typescript-props.md)).

## D3 · Test file layout and naming

- **Decided:** 2026-09-29
- **Options:** (A) everything colocated; (B) `__tests__/` folders; (C) top-level folders by level;
  (D) hybrid.
- **Chose:** D, hybrid. Unit tests colocated as `Button.test.tsx`; integration tests in
  `tests/integration/*.int.test.tsx`; E2E in `cypress/e2e/*.cy.ts`.
- **Reason:** each pyramid level has an obvious home, and the suffix says which level a test is.
- **Pattern:** screaming architecture: the tree shows what each test is ([ch01](syllabus/01-testing-pyramid.md)).

## D4 · Shared test helpers

- **Decided:** 2026-09-29
- **Options:** (A) everything inline; (B) `beforeEach` with shared `let` variables; (C) a `setup()`
  factory per file; (D) C plus a shared `renderWithUser()`.
- **Chose:** D.
- **Reason:** the Arrange step stays one explicit line per test, with defaults plus overrides, and
  there's no hidden shared state.
- **Pattern:** test data builder / factory ([ch09](syllabus/09-aaa-and-behaviour.md)).

## D5 · Mocking policy

- **Decided:** 2026-09-29
- **Options:** (A) mock only at the boundary; (B) mock child components; (C) mock nothing.
- **Chose:** A. `jest.fn()` for callback props and fake timers for time. Never mock React, the DOM
  or child components. Controlled components are tested through a `Harness` that holds state
  with `useState`.
- **Reason:** integration tests must exercise the real wiring. Interaction checks (did the
  handler get called?) use a mock; state checks (did the UI update?) use a harness.
- **Pattern:** mock at architectural boundaries ([ch07](syllabus/07-mocking.md)).

## D6 · Coverage gate

- **Decided:** 2026-09-29
- **Options:** (A) global 80% only; (B) global 80% plus a 70% floor for every file; (C) global
  90%; (D) 80% for every file.
- **Chose:** B, for lines, branches, functions and statements. `collectCoverageFrom` covers
  `src/components/**`, excluding `index.ts` re-exports and stories.
- **Reason:** meets the rubric's 80% and stops a strong component from hiding a weak one. It
  leaves room for quality instead of chasing lines.
- **Pattern:** a quality gate with a per-unit floor. Coverage finds untested code; it doesn't
  prove the tests are good ([ch03](syllabus/03-code-coverage.md)).

## D7 · TDD bug workflow and commit strategy

- **Decided:** 2026-09-29
- **Options:** (A) test and fix in one commit; (B) a red commit, then a green commit, then an
  optional refactor; (C) a red commit using `it.failing`, then a flip; (D) a branch and PR per bug.
- **Chose:** B. A correct test that fails during Part 2 is parked: it's recorded as "found" in
  the bug-fixes deliverable and committed alone as `test(<component>): … (red)`. The fix follows
  in Part 3 as `fix(<component>): … (green)`, with an optional `refactor(...)` after.
- **Reason:** it's the clearest evidence for the TDD score, and commit history can't be honestly
  rebuilt later.
- **Constraints this places on later decisions:** pre-commit hooks must not run the full test
  suite (D10). Each bug is two specclaw tasks, red then green, with the loop guard set so it
  doesn't revert red tests. `main` only ever receives the green merge.
- **Pattern:** red-green-refactor with regression tests; atomic Conventional Commits ([ch10](syllabus/10-tdd.md)).
