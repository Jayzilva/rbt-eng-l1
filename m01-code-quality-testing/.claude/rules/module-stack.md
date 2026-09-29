# Stack and targets for ENG-L1-M01

## Stack

- React 18 + TypeScript component library (8 components: Button, Input, Modal, Card, Dropdown,
  Toggle, Alert, Tabs), Node 18+
- Jest with `jsdom`, React Testing Library, `@testing-library/user-event`, `jest-dom` matchers
- Cypress for one end-to-end flow; Istanbul coverage via Jest

## Hard targets

- Coverage ≥ 80% for lines, branches and functions, enforced by `coverageThreshold` in Jest
  config (the build fails below it)
- Every component has a test file with rendering, interaction and edge-case groups
- 5 seeded bugs found and fixed test-first; ≥ 3 integration tests; ≥ 1 Cypress E2E test

## Conventions

- Query by role, label or text first; `data-testid` only when nothing accessible exists
- Test behaviour a user can observe, never internal state or CSS classes
- Arrange / Act / Assert, visibly separated; test names read as sentences
- Fake timers for anything time-based; mock only at module boundaries
- TDD bug fixes: failing-test commit first (`test(m01): … (red)`), fix commit second
  (`fix(m01): … (green)`), optional `refactor(m01): …`
- Deliverables in `docs/deliverables/` named `jayath-de-silva-month1-<deliverable>.<ext>`
