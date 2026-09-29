# Git workflow for {{MODULE_ID}}

- One module = one specclaw change = one branch = one PR.
- Branch is created by `/specclaw:build` from the change name, prefix `{{BRANCH_PREFIX}}`
  (set in `.specclaw/config.yaml`). Base branch: `main`.
- PR title: `{{MODULE_ID}} {{MODULE_TITLE}}`. PR body uses the repo's
  `.github/pull_request_template.md` and links `docs/self-score.md`.
- Commit messages: conventional commits scoped to the module, e.g.
  `test({{MODULE_SCOPE}}): add failing test for disabled Button click`.
- When a change is test-first (TDD, bug fixes), the failing test is its **own commit** before the
  fix commit. Split such work into two specclaw tasks (`red`, then `green`) so the history shows
  the cycle. Reviewers score this from `git log`.
- Never commit anything under `academy/`, secrets, or `.env` files. `.gitignore` covers them;
  check `git status` before every commit anyway.
- After approval: merge, then tag `{{TAG}}` and push the tag.
- Never force-push `main`. Never push without being asked.
