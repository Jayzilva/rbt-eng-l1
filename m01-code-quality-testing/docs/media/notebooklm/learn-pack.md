# NotebookLM learning pack — ENG-L1-M01 Code Quality & Testing

Use this **before** the design discussion and build. It turns the syllabus into two video
overviews (5–10 min each), plus an optional audio overview for commuting. Sources are public;
nothing from `academy/` goes in.

## 1. Create the notebook

Name it `ENG-L1-M01 · Testing a React component library`.

### Sources: syllabus chapters (add as website links)

```
https://raw.githubusercontent.com/Jayzilva/rbt-eng-l1/main/m01-code-quality-testing/docs/syllabus/index.md
https://raw.githubusercontent.com/Jayzilva/rbt-eng-l1/main/m01-code-quality-testing/docs/syllabus/01-testing-pyramid.md
https://raw.githubusercontent.com/Jayzilva/rbt-eng-l1/main/m01-code-quality-testing/docs/syllabus/02-jest-basics.md
https://raw.githubusercontent.com/Jayzilva/rbt-eng-l1/main/m01-code-quality-testing/docs/syllabus/03-code-coverage.md
https://raw.githubusercontent.com/Jayzilva/rbt-eng-l1/main/m01-code-quality-testing/docs/syllabus/04-typescript-props.md
https://raw.githubusercontent.com/Jayzilva/rbt-eng-l1/main/m01-code-quality-testing/docs/syllabus/05-react-testing-library.md
https://raw.githubusercontent.com/Jayzilva/rbt-eng-l1/main/m01-code-quality-testing/docs/syllabus/06-user-event.md
https://raw.githubusercontent.com/Jayzilva/rbt-eng-l1/main/m01-code-quality-testing/docs/syllabus/07-mocking.md
https://raw.githubusercontent.com/Jayzilva/rbt-eng-l1/main/m01-code-quality-testing/docs/syllabus/08-async-and-fake-timers.md
https://raw.githubusercontent.com/Jayzilva/rbt-eng-l1/main/m01-code-quality-testing/docs/syllabus/09-aaa-and-behaviour.md
https://raw.githubusercontent.com/Jayzilva/rbt-eng-l1/main/m01-code-quality-testing/docs/syllabus/10-tdd.md
https://raw.githubusercontent.com/Jayzilva/rbt-eng-l1/main/m01-code-quality-testing/docs/syllabus/11-accessibility.md
https://raw.githubusercontent.com/Jayzilva/rbt-eng-l1/main/m01-code-quality-testing/docs/syllabus/12-cypress-e2e.md
```

If a link fails to import, upload the same files from `docs/syllabus/` instead.

### Sources: official references (website links)

```
https://martinfowler.com/bliki/TestPyramid.html
https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications
https://testing-library.com/docs/guiding-principles
https://testing-library.com/docs/queries/about/#priority
https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
https://martinfowler.com/bliki/TestDrivenDevelopment.html
https://docs.cypress.io/app/core-concepts/best-practices
```

### Sources: videos (YouTube links; NotebookLM reads their transcripts)

```
https://www.youtube.com/watch?v=Z_U6M1hMC6s
https://www.youtube.com/watch?v=IPiUDhwnZxA
https://www.youtube.com/watch?v=Kf0OCNmoIeA
https://www.youtube.com/watch?v=Veaql3noyyo
https://www.youtube.com/watch?v=mSWYQUXXF5Q
https://www.youtube.com/watch?v=TuxmnyhPdhA
https://www.youtube.com/watch?v=XL6YeZC-Tlg
https://www.youtube.com/watch?v=foiMMI-pEes
https://www.youtube.com/watch?v=JS68faEUduk
https://www.youtube.com/watch?v=BQqzfHQkREo
```

That's 30 sources, within NotebookLM's per-notebook limit.

## 2. Video overview 1: foundations (chapters 01–06)

Studio → Video Overview → Customize, then paste:

```text
Audience: a software engineer who has never written automated tests, about to test a React 18 +
TypeScript component library (Button, Input, Modal, Card, Dropdown, Toggle, Alert, Tabs) with
Jest, React Testing Library and user-event, and must reach 80% line, branch and function coverage.

Cover, in this order, using the syllabus chapters 01 to 06 as the backbone and the other sources
for examples: (1) the testing pyramid versus the testing trophy, and which level a component
test, an integration test and an end-to-end test belong to; (2) how Jest runs a test, what jsdom
is and why it is needed; (3) what line, branch and function coverage measure, why coverage is a
floor and not proof of quality, and how a coverage threshold fails the build; (4) why typed
props reveal edge cases worth testing; (5) React Testing Library's rule of testing the way a user
uses the UI, and the query priority with getByRole first; (6) why user-event is preferred over
fireEvent, and why every user-event call is awaited.

Explain each idea with one concrete example from the component library, for example "a disabled
Button must not call onClick". Show the mental model as a simple diagram where it helps. End each
section with one common mistake and how to spot it. Finish with a 30-second recap and three
questions the viewer should be able to answer. Do not invent statistics or product names. Keep a
calm, teacher-like pace.
```

## 3. Video overview 2: writing good tests (chapters 07–12)

```text
Audience: the same engineer, who now understands Jest, React Testing Library and user-event
basics, and next has to write the real test suite, fix five seeded bugs test-first, and add
integration and end-to-end tests.

Cover, in this order, using syllabus chapters 07 to 12 as the backbone: (1) mocking with jest.fn,
spyOn and module mocks, and when not to mock; (2) async tests: findBy versus waitFor, what an
act() warning means, and fake timers for an Alert that dismisses itself after a delay;
(3) Arrange-Act-Assert and testing behaviour instead of implementation details, with a bad test
rewritten into a good one; (4) test-driven development: red, green, refactor, and how a failing
test committed before its fix proves a bug was caught, shown on the disabled-Button bug;
(5) accessibility: roles, accessible names, keyboard support and a Modal focus trap, and testing
them with role queries and jest-axe; (6) what a Cypress end-to-end test adds over jsdom, selector
best practices, avoiding fixed waits, and an automated accessibility check with cypress-axe.

Use one running example: a settings form inside a Modal, with an Input, a Toggle, a Dropdown and
a Save Button, and a success Alert. End with how the pieces fit together as a test strategy for
the whole library, and three self-check questions. Do not invent statistics or product names.
```

## 4. Optional: audio overview

Studio → Audio Overview → Customize: *"Deep dive for a beginner on testing a React component
library: the testing pyramid, React Testing Library philosophy, TDD with red and green commits,
and accessibility testing. Use concrete component examples; avoid jargon without explaining it."*

## 5. Before you rely on a generated video

Watch it fully. Check that API names match the syllabus: `userEvent.setup()`,
`setupFilesAfterEnv`, `coverageThreshold`, `getByRole`. If a video states something the
syllabus contradicts, the syllabus wins; note the mismatch in `memory/open-questions.md`.
Upload to YouTube only after the checklist in `review-checklist.md` passes (made by
`/notebooklm-pack recap` at the end of the module).
