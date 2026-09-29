# Offline milestones — ENG-L1-M01

Work the session asks for *outside* the challenge, to be done after this module and before
the track ends. They count toward the track's milestone completion bar, so they're tracked here
like the challenge itself. Evidence lives in `milestones/` in this module folder unless noted.

**Target:** all six by **Sun 1 Nov 2026** (end of the Engineer track). Items 4 and 6 fall out
of the challenge work and can be done this week.

| # | Milestone | Why it matters | My plan (evidence) | Target | Status |
|---|---|---|---|---|---|
| 1 | Solve 20 easy algorithm problems, focusing on data structures | Arrays, maps, stacks and queues show up in every component and in interviews | Solve them in TypeScript, each **with a Jest test written first**, so it doubles as TDD practice. Solutions in `milestones/algorithms/`, plus a `README.md` table: problem, structure used, one-line insight | 1 per day from 2 Oct | Not started |
| 2 | Read *Clean Code*, chapters 1–6 | Naming, functions, comments and formatting are the "code quality" in this module's title | Own-words notes per chapter, plus one refactor I applied to this module's tests: `milestones/clean-code-notes.md` | 11 Oct | Not started |
| 3 | Implement the Factory, Observer and Strategy patterns in a personal project | Recognising patterns makes design discussions faster (see decisions-made.md) | Small TypeScript examples with tests in `milestones/patterns/`: Strategy for Alert variants, Observer for a toast event bus, Factory for creating form fields. Each has a README: problem, pattern, trade-off | 18 Oct | Not started |
| 4 | Write a blog post explaining the benefits of TDD | Teaching it proves understanding, and it's public content | The module's build log (`/site-post`) plus a dedicated page `docs/tdd-benefits.md` on the site, using my red→green commits as evidence | 5 Oct | Not started |
| 5 | Add tests to an existing untested project | Real code is messier than a seeded library | Pick one of my own repos with no tests. Add Jest tests, a coverage threshold and a short README section. Link the PR here | 25 Oct | Not started |
| 6 | Set up pre-commit hooks that run tests | Makes the test gate automatic | Done through [D10](decisions-made.md#d10-quality-gates): Husky + lint-staged on pre-commit, full `jest --coverage` on **pre-push**. Evidence: `.husky/` in `component-library/`, plus a note on why tests run on pre-push (D7's red commits) | with Part 5 | Not started |

## Resources

- Algorithm practice: [NeetCode practice list](https://neetcode.io/practice) (verified 2026-09-29),
  or LeetCode's problem set filtered to Easy (`leetcode.com/problemset`; it blocks automated
  link checks, so it wasn't verified by script).
- Design patterns: [Factory Method](https://refactoring.guru/design-patterns/factory-method),
  [Observer](https://refactoring.guru/design-patterns/observer),
  [Strategy](https://refactoring.guru/design-patterns/strategy) at Refactoring.Guru (verified 2026-09-29).
- Hooks: [Husky](https://typicode.github.io/husky/),
  [lint-staged](https://github.com/lint-staged/lint-staged) (verified 2026-09-29).
- *Clean Code*, Robert C. Martin (book; the publisher's page blocks automated checks).

## Log

*Entries: date, milestone, what was done, link to evidence.*
