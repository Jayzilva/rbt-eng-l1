# Plan — ENG-L1-M01 Code Quality & Testing

Scheduled **Wed 30 Sep – Thu 1 Oct 2026** · Content week 1 (post Mon 5 Oct) · Pass bar 70/100

## Outcome

Take a React + TypeScript component library with no tests and hidden defects to a trustworthy
state: a behaviour-focused test suite above 80% coverage, every seeded bug caught by a failing
test before it is fixed, and a git history that shows the red → green → refactor cycle. The real
outcome is that I can explain *why* each test exists and what the testing pyramid looks like for
a UI library.

## Targets

| Target | Measure | Where checked |
|---|---|---|
| Coverage | ≥ 80% lines, branches, functions | `coverageThreshold` in Jest config; `verify-report.md` |
| Suite completeness | 8/8 components, rendering + interaction + edge-case groups each | test files; self-score |
| Bugs | 5/5 found, each with a red commit before its green commit | `git log`; bug-fixes deliverable |
| Integration | ≥ 3 multi-component tests | test files |
| E2E | ≥ 1 Cypress flow incl. an accessibility check | `npx cypress run` |

## Timeboxed parts

| Part | Timebox | What I build | Concepts I must understand | specclaw wave |
|---|---|---|---|---|
| 0 | 30 min | Import starter library, baseline commit, `npm test` runs | project layout | W0 |
| 1 | 20 min | Jest + RTL + Cypress config, 80% thresholds | jsdom, setup files, coverage metrics | W1 |
| 2 | 60 min | Unit tests for all 8 components | AAA, accessible queries, user-event, mocking, edge cases | W2 (parallel per component) |
| 3 | 25 min | 5 bugs: red test → fix → refactor | TDD cycle, regression tests | W3 (red and green as separate tasks) |
| 4 | 15 min | 3 integration tests + 1 Cypress E2E | testing pyramid, integration vs E2E | W4 |
| 5 | 45 min | Coverage report, bug doc, TDD commit log, self-score, PUBLIC.md | — | W5 + skills |

Day split: **Wed** — `/study` (1.5 h), starter import, propose → teach → plan, Part 1.
**Thu** — Parts 2–4, verify, `/self-score`, `/public-writeup`, PR.

## Rubric map

| Rubric area | Points | Evidence I will produce |
|---|---|---|
| Test suite completeness | 25 | 8 test files, 5+ cases each, edge cases named in `describe` groups |
| Coverage | 25 | HTML coverage report ≥ 80% on all three metrics (aim 90%) |
| TDD process | 20 | 5 red/green commit pairs, small focused commits, `tdd-commits.md` from `git log` |
| Bug fixes | 15 | `bug-fixes.md`: location, symptom, root cause, test, fix per bug |
| Code quality | 10 | lint clean, no duplication across tests (shared render helpers) |
| Documentation | 5 | module README, bug doc, PUBLIC.md |

## Deliverables

- `jayath-de-silva-month1-test-suite.zip` — all test files
- `jayath-de-silva-month1-coverage-report.html` — coverage report
- `jayath-de-silva-month1-bug-fixes.md` — one section per bug
- `jayath-de-silva-month1-tdd-commits.md` — annotated `git log` showing red → green

## Risks and prerequisites

- **Starter library not in the academy pages.** The facilitator is meant to supply a starter
  repo with the 8 components and 5 planted bugs. Ask for it on Wed morning.
  Fallback: a subagent generates the library with 5 bugs matching the published bug categories
  and writes the answer key to `academy/bug-key.md` (gitignored). I do not open the key until
  Part 3 is finished, so the bugs are still found by testing. Decision recorded in
  `memory/decisions.md` either way.
- Node 18+ and a Cypress-capable browser on this machine (check in Part 0).
- specclaw's loop guard may revert test edits during build; if it fights the red-commit tasks,
  set `loop.guard_action` deliberately and record why.

## Checklist

- [x] Starter library in place (sealed-bug fallback, D1; not yet committed)
- [x] Syllabus: `/syllabus` (level map, chapters on GitHub Pages, NotebookLM learn pack)
- [ ] Studied: chapters, videos, NotebookLM videos, Check-yourself answered
- [x] Design: `/design-session` decisions in `docs/decisions-made.md`
- [x] Propose: change created from the challenge
- [x] Plan: spec, design (my choices), tasks
- [ ] Build: all waves done
- [ ] Verify: all targets met
- [ ] Self-score ≥ 70
- [ ] Deliverables named and present
- [ ] PUBLIC.md written, confidentiality check clean
- [ ] PR opened and linked
- [ ] Reviewer approved, merged, tagged `eng-l1-m01-v1`
- [ ] specclaw change archived
- [ ] NotebookLM video checked and uploaded
- [ ] Build-log post published on GitHub Pages (`/site-post`)
- [ ] Links cross-wired (README ↔ YouTube ↔ Pages site)
