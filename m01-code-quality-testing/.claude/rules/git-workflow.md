# Git workflow for ENG-L1-M01

- One module = one specclaw change = one branch = one PR.
- Branch is created by `/specclaw:build` from the change name, prefix `eng-l1/`
  (set in `.specclaw/config.yaml`). Base branch: `main`.
- PR title: `ENG-L1-M01 Code Quality & Testing`. PR body uses the repo's
  `.github/pull_request_template.md` and links `docs/self-score.md`.
- Commit messages: conventional commits scoped to the module, e.g.
  `test(m01): add failing test for disabled Button click`.
- When a change is test-first (TDD, bug fixes), the failing test is its **own commit** before the
  fix commit. Split such work into two specclaw tasks (`red`, then `green`) so the history shows
  the cycle. Reviewers score this from `git log`.
- Never commit anything under `academy/`, secrets, or `.env` files. `.gitignore` covers them;
  check `git status` before every commit anyway.
- After approval: merge, then tag `eng-l1-m01-v1` and push the tag.
- Never force-push `main`. Never push without being asked.
