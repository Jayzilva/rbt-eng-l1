# Learning resources — ENG-L1-M01 Code Quality & Testing

Public resources only, sorted by the concept they teach and the plan part that needs them.
Academy material stays in `academy/` (gitignored). All links checked 2026-09-29.

**How to use:** don't read ahead. `/study` and specclaw's teaching gates point to a row when
you need it. ★ = read in full; the rest are for looking things up.

## 1. Why test, and at which level (study, Part 4)

| Resource | What you get from it |
|---|---|
| ★ [Martin Fowler — Test Pyramid](https://martinfowler.com/bliki/TestPyramid.html) | The original short argument: many fast unit tests, few slow UI tests |
| [Ham Vocke — The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) | Long worked version; read the unit vs integration vs UI sections |
| ★ [Kent C. Dodds — Testing Trophy](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications) | The front-end counterpoint: weight toward integration tests |
| [Martin Fowler — Test Coverage](https://martinfowler.com/bliki/TestCoverage.html) | Coverage finds untested code; it doesn't prove the tests are good |

## 2. TDD and test structure (study, Part 3)

| Resource | What you get from it |
|---|---|
| ★ [Martin Fowler — Test-Driven Development](https://martinfowler.com/bliki/TestDrivenDevelopment.html) | Red → green → refactor in one page, plus the common failure (skipping refactor) |
| ★ [Bill Wake — Arrange, Act, Assert](https://xp123.com/articles/3a-arrange-act-assert/) | Where the AAA pattern comes from and why it keeps tests readable |
| Book: Kent Beck, *Test-Driven Development: By Example* | Part I shows the cycle in tiny steps; optional reading |
| [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) | Commit message format for the `test(...)` (red) / `fix(...)` (green) commits |

## 3. Jest (Part 1, Part 2)

| Resource | What you get from it |
|---|---|
| [Getting started](https://jestjs.io/docs/getting-started) | Install, first test, `describe` / `it` / `expect` |
| ★ [`coverageThreshold`](https://jestjs.io/docs/configuration#coveragethreshold-object) | Making the build fail below 80% |
| ★ [Mock functions](https://jestjs.io/docs/mock-functions) | `jest.fn()`, spies, checking a handler was or wasn't called |
| [Timer mocks](https://jestjs.io/docs/timer-mocks) | Fake timers for auto-dismissing alerts and debounced inputs |
| [Istanbul](https://istanbul.js.org/) | Tool behind Jest coverage: what lines, branches and functions mean |

## 4. React Testing Library (Part 2)

| Resource | What you get from it |
|---|---|
| ★ [Guiding principles](https://testing-library.com/docs/guiding-principles) | Test the way a user uses the UI. The idea behind every RTL rule |
| ★ [Query priority](https://testing-library.com/docs/queries/about/#priority) | `getByRole` > `getByLabelText` > … > `getByTestId`, and why |
| ★ [user-event](https://testing-library.com/docs/user-event/intro) | Realistic clicks and typing; why it beats `fireEvent` |
| [jest-dom matchers](https://github.com/testing-library/jest-dom) | `toBeDisabled`, `toHaveAccessibleName`, `toBeInTheDocument` |
| ★ [Common mistakes with RTL](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library) | Checklist to run against your own tests before the PR |
| [Testing implementation details](https://kentcdodds.com/blog/testing-implementation-details) | Why testing internal state breaks on refactors (a mistake the rubric penalises) |

## 5. Accessible behaviour to test per component (Part 2, Part 3)

WAI-ARIA patterns describe the keyboard and focus behaviour each component should have. They
work as a ready-made list of edge cases, and one seeded bug is an accessibility bug.

| Component | Pattern |
|---|---|
| Modal | [Dialog (modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/): focus trap, Escape closes, focus returns |
| Tabs | [Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/): arrow keys, `aria-selected`, roving tabindex |
| Dropdown | [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/): arrow/Home/End keys, selection state |
| Toggle | [Switch](https://www.w3.org/WAI/ARIA/apg/patterns/switch/): `role="switch"`, `aria-checked`, Space toggles |

## 6. Cypress E2E (Part 4)

| Resource | What you get from it |
|---|---|
| [Why Cypress](https://docs.cypress.io/app/get-started/why-cypress) | What E2E covers that jsdom can't (real browser, real layout) |
| ★ [Best practices](https://docs.cypress.io/app/core-concepts/best-practices) | Selector strategy, no arbitrary waits, independent tests |
| [cypress-axe](https://github.com/component-driven/cypress-axe) | Automated accessibility check inside the E2E flow |
