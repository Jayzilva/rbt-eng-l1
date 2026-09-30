# Tasks: ENG-L1-M01 Code Quality & Testing — test an untested component library

**Change:** 001-m01-code-quality-testing
**Created:** 2026-09-30
**Total Tasks:** 22

## Summary

Six waves mirror the challenge Parts 0–5: W1 baseline, W2 tooling and gates, W3 unit suite (bugs
parked red), W4 learner-gated green fixes, W5 integration and E2E, W6 deliverables and CI. All
paths are relative to `m01-code-quality-testing/` unless absolute.

**Rules for every task:**
- Never read or quote anything under `academy/`.
- Never change component source (`src/components/*/*.tsx`) outside W4.
- Never weaken or delete a correct test to make it pass.
- Queries: role or label first. No fixed sleeps. Reports include the exact commands run and
  their output (required by build).

## Tasks

### Wave 1 — Baseline (Part 0)

- [x] `T1` — Commit the generated starter library as the baseline
  - Files: component-library/src/**, component-library/README.md
  - Estimate: small
  - Kind: config
  - Notes: add the files exactly as they are, with no edits. Commit message
    `chore(m01): import starter component library (generated stand-in, see D1)`.

### Wave 2 — Tooling, gates and helpers (Part 1)

- [x] `T2` — package.json, TypeScript and Jest with ts-jest and the coverage gate
  - Files: component-library/package.json, package-lock.json, tsconfig.json, jest.config.ts, jest.setup.ts, .gitignore
  - Estimate: medium
  - Kind: config
  - Depends: T1
  - Notes: React 18, TypeScript strict, Jest 29 + ts-jest + jest-environment-jsdom,
    @testing-library/react + user-event 14 + jest-dom, jest-axe. Put the D6 thresholds and
    `collectCoverageFrom` in jest.config.ts. Scripts: test, test:cov, typecheck, verify
    (placeholder until W5/W6). Evidence: `npm test -- --passWithNoTests` and `npm run typecheck`
    output. The gitignore covers coverage/, node_modules/ and the deliverables zip.
- [x] `T3` — ESLint, Prettier, Husky and lint-staged
  - Files: component-library/eslint.config.js, .prettierrc, .lintstagedrc.json, .husky/pre-commit, .husky/pre-push, package.json (scripts, prepare)
  - Estimate: medium
  - Kind: config
  - Depends: T2
  - Notes: flat config with typescript-eslint, react, react-hooks, testing-library, jest-dom and
    eslint-config-prettier. pre-commit runs lint-staged only. pre-push runs typecheck and
    test:cov. Husky must install from the nested package: `prepare` runs
    `cd .. && husky component-library/.husky` or the equivalent for a monorepo subfolder. Verify
    that the repo root is used and document it. Evidence: `npm run lint` output, plus a dry run
    of each hook.
- [x] `T4` — Vite and Cypress installed and configured
  - Files: component-library/vite.config.ts, cypress.config.ts, cypress/support/e2e.ts, cypress/tsconfig.json, package.json (dev, build, cy:open, e2e scripts)
  - Estimate: medium
  - Kind: config
  - Depends: T2
  - Notes: Vite root `demo/` (the page is created in T20), dev port 5173. Cypress
    `baseUrl http://localhost:5173`, specPattern `cypress/e2e/**/*.cy.ts`, cypress-axe and
    @testing-library/cypress registered in support. The `e2e` script uses
    `start-server-and-test dev http://localhost:5173 cy:run`. Evidence: `npx cypress verify`
    output (proves the binary works on this machine).
- [ ] `T5` — Shared test helper and bug-fixes deliverable skeleton
  - Files: component-library/tests/utils.tsx, component-library/scripts/expect-failures.mjs, docs/deliverables/jayath-de-silva-month1-bug-fixes.md
  - Estimate: small
  - Kind: test
  - Depends: T2
  - Notes: `expect-failures.mjs <jest-json> <name>...` exits 0 only if the failing test names equal the given list (used as red-state evidence). `renderWithUser(ui)` returns the render result plus `user` (D4). The bug doc has a
    "Found" table (component, test name, failing assertion, symptom) and 5 empty sections:
    location, symptom, root cause (learner's words), test, fix.

### Wave 3 — Unit suite, 8 components (Part 2)

Each task: colocated `<Name>.test.tsx` with `setup()` factory; describe groups rendering /
interactions / edge cases; ≥ 5 behaviour tests; keyboard + ARIA-state tests per WAI-ARIA pattern
where interactive; `jest-axe` on key states. **If a correct test fails: stop, do not fix the
component, keep the test, label the commit `(red: <behaviour>)`, add a "Found" row (FR9).**
Evidence: `npx jest <Name> --coverage --collectCoverageFrom=src/components/<Name>/**` output.
**Red-state evidence:** the build's verification command must exit 0. When a task ends with parked
failing tests, verify with a command that runs the file's tests and exits 0 only if the failing
tests are exactly the ones listed in the Found rows, for example
`npx jest <Name> --json --outputFile=.jest-<Name>.json; node scripts/expect-failures.mjs .jest-<Name>.json "<test name>"`.
T5 creates `scripts/expect-failures.mjs`.

- [ ] `T6` — Button tests
  - Files: component-library/src/components/Button/Button.test.tsx, docs/deliverables/jayath-de-silva-month1-bug-fixes.md
  - Estimate: small
  - Kind: test
  - Depends: T5
  - Notes: **Teaching checkpoint:** after this task, the learner reviews the file before T7–T13
    run (style reference for the rest).
- [ ] `T7` — Input tests
  - Files: component-library/src/components/Input/Input.test.tsx, docs/deliverables/jayath-de-silva-month1-bug-fixes.md
  - Estimate: medium
  - Kind: test
  - Depends: T6
  - Notes: controlled component, so use a `Harness` with useState for state checks (D5);
    label, error and required semantics.
- [ ] `T8` — Modal tests
  - Files: component-library/src/components/Modal/Modal.test.tsx, docs/deliverables/jayath-de-silva-month1-bug-fixes.md
  - Estimate: medium
  - Kind: test
  - Depends: T6
  - Notes: dialog role and naming, Escape, backdrop, focus moves in, is trapped, and returns to
    the trigger.
- [ ] `T9` — Card tests
  - Files: component-library/src/components/Card/Card.test.tsx, docs/deliverables/jayath-de-silva-month1-bug-fixes.md
  - Estimate: small
  - Kind: test
  - Depends: T6
- [ ] `T10` — Dropdown tests
  - Files: component-library/src/components/Dropdown/Dropdown.test.tsx, docs/deliverables/jayath-de-silva-month1-bug-fixes.md
  - Estimate: medium
  - Kind: test
  - Depends: T6
  - Notes: controlled; listbox keyboard (arrows, Enter, Escape), aria-expanded, aria-selected.
- [ ] `T11` — Toggle tests
  - Files: component-library/src/components/Toggle/Toggle.test.tsx, docs/deliverables/jayath-de-silva-month1-bug-fixes.md
  - Estimate: small
  - Kind: test
  - Depends: T6
  - Notes: controlled; switch role, aria-checked, Space/Enter, disabled.
- [ ] `T12` — Alert tests
  - Files: component-library/src/components/Alert/Alert.test.tsx, docs/deliverables/jayath-de-silva-month1-bug-fixes.md
  - Estimate: medium
  - Kind: test
  - Depends: T6
  - Notes: fake timers for autoDismissMs, using `userEvent.setup({ advanceTimers: jest.advanceTimersByTime })`;
    dismiss button; timer cleanup on unmount.
- [ ] `T13` — Tabs tests
  - Files: component-library/src/components/Tabs/Tabs.test.tsx, docs/deliverables/jayath-de-silva-month1-bug-fixes.md
  - Estimate: medium
  - Kind: test
  - Depends: T6
  - Notes: controlled and uncontrolled; tablist, tab and tabpanel roles and ARIA; arrow keys;
    pagination at its boundaries (first, last, exact fit, remainder).

### Wave 4 — Bug fixes, learner-gated (Part 3)

Each task begins with the **learner gate (P4)**. Show the red test and its failure output. The
learner states whether the test or the code is wrong, the root cause (file, line, why), and the
fix approach. Only then write the **minimal** fix, which touches no test file. Commit as
`fix(<component>): <what> (green)`. Fill the bug section with the learner's words. Evidence:
the red test now passes, and the full `npm test` passes, apart from other bugs not yet fixed.

- [ ] `T14` — Fix found bug 1
  - Files: the component file named in the Found row, plus the bug-fixes deliverable
  - Estimate: small
  - Kind: impl
  - Depends: T7, T8, T9, T10, T11, T12, T13
- [ ] `T15` — Fix found bug 2
  - Files: as T14
  - Estimate: small
  - Kind: impl
  - Depends: T14
- [ ] `T16` — Fix found bug 3
  - Files: as T14
  - Estimate: small
  - Kind: impl
  - Depends: T15
- [ ] `T17` — Fix found bug 4
  - Files: as T14
  - Estimate: small
  - Kind: impl
  - Depends: T16
- [ ] `T18` — Fix found bug 5
  - Files: as T14
  - Estimate: small
  - Kind: impl
  - Depends: T17
  - Notes: if fewer than 5 bugs were found in W3, this task opens with a guided hunt (spec edge
    case): the learner picks the category and component to probe, and a red test is written and
    committed first. After this task, and only then, the learner may open `academy/bug-key.md` to
    compare.

### Wave 5 — Integration, demo page and E2E (Part 4)

- [ ] `T19` — Three integration tests with real children
  - Files: component-library/tests/integration/settings-form.int.test.tsx, dropdown-card.int.test.tsx, tabs-inputs.int.test.tsx
  - Estimate: medium
  - Kind: test
  - Depends: T18
  - Notes: no mocked children (D5). Each test crosses at least 2 components and checks
    user-visible outcomes.
- [ ] `T20` — Demo Settings page and the Cypress E2E flow
  - Files: component-library/demo/index.html, demo/main.tsx, cypress/e2e/settings-flow.cy.ts
  - Estimate: medium
  - Kind: test
  - Depends: T4, T18
  - Notes: teaching brief first (Vite `index.html` entry, start-server-and-test). The learner
    chooses the flow's steps. It must open the Modal, use at least 4 components, verify state,
    and run `cy.injectAxe(); cy.checkA11y()`. No `cy.wait(<ms>)`. Evidence: `npm run e2e` output.

### Wave 6 — Deliverables, CI and docs (Part 5)

- [ ] `T21` — Deliverables script and generated evidence
  - Files: component-library/scripts/deliverables.mjs, package.json (deliverables script), docs/deliverables/jayath-de-silva-month1-coverage-report.html, docs/deliverables/jayath-de-silva-month1-tdd-commits.md
  - Estimate: medium
  - Kind: docs
  - Depends: T19, T20
  - Notes: the script zips the test files to `…-test-suite.zip` (gitignored), copies the coverage
    HTML (single file or index), and writes an annotated `git log main..HEAD` (red / green /
    refactor labels). The learner reviews the annotations.
- [ ] `T22` — CI workflow file, verify script, module README
  - Files: /d/rbt/rbt-eng-l1/.github/workflows/m01-ci.yml, component-library/package.json (verify), component-library/README.md
  - Estimate: small
  - Kind: config
  - Depends: T21
  - Notes: CI is path-filtered to this module and runs `npm ci`, lint, typecheck, test:cov and
    e2e. It stays dormant while the billing lock is on. `verify` runs lint, typecheck, test:cov
    and e2e. The README gains how to run it and the suite layout.

---

## Legend

- `[ ]` Pending
- `[~]` In Progress
- `[x]` Complete
- `[!]` Failed
- `[>]` Deferred — correctly blocked on a sibling change, not incomplete through any fault of its own; excluded from the incomplete-task count that gates `verify`
