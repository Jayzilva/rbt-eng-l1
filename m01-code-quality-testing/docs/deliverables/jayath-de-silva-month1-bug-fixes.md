# Bug fixes — ENG-L1-M01 (jayath-de-silva)

Five defects in the component library, each found by a behaviour test, then fixed test-first:
a red commit (failing test) followed by a green commit (minimal fix). Root causes are written in
my own words after diagnosing each one (decision P4).

## Found during Part 2

Recorded by the unit-test tasks when a correct test failed. The component was not changed.

| # | Component | Test (full name) | Failing assertion | Observed symptom | Red commit |
|---|---|---|---|---|---|
| F1 | Button | Button › edge cases › does not call onClick while loading | `expect(onClick).not.toHaveBeenCalled()`: received 1 call | Clicking a button in its loading state still fires `onClick` | T6 |

## Fixes (Part 3)

<!-- One section per bug, filled after the learner's triage and diagnosis (P4). -->

### Bug 1 — _title_

- **Location:** `file:line`
- **Symptom:** what a user (or the test) observed
- **Root cause:** why it happened, in my words
- **Test written:** test name and what it asserts
- **Fix applied:** the minimal change, and why it is minimal
- **Commits:** red `…` → green `…`

### Bug 2 — _title_

- **Location:**
- **Symptom:**
- **Root cause:**
- **Test written:**
- **Fix applied:**
- **Commits:**

### Bug 3 — _title_

- **Location:**
- **Symptom:**
- **Root cause:**
- **Test written:**
- **Fix applied:**
- **Commits:**

### Bug 4 — _title_

- **Location:**
- **Symptom:**
- **Root cause:**
- **Test written:**
- **Fix applied:**
- **Commits:**

### Bug 5 — _title_

- **Location:**
- **Symptom:**
- **Root cause:**
- **Test written:**
- **Fix applied:**
- **Commits:**
