# {{MODULE_ID}} — {{MODULE_TITLE}}

Self-contained learning project for **{{TRACK_NAME}} ({{TRACK_ID}})**, module {{MODULE_N}} of 6.
Everything this module needs is in this folder. Nothing here depends on the parent repo or on
other modules, so it can be opened on its own with `claude` from this directory.

- Scheduled: **{{DATES}}** · Content week: **{{WEEK}}**
- Challenge source (local only, gitignored): `academy/CHALLENGE.md`, `academy/SESSION.md`,
  `academy/rubric.md`, `academy/gamma-script.md`
- Module plan: `docs/plan.md` · My notes: `docs/notes.md` · Public write-up: `docs/PUBLIC.md`

## Why this module is run this way

The goal is to **learn the concepts**, not only to pass the challenge. Claude can write every line
of this challenge; that would score points and teach nothing. So the split is fixed:

- **I decide, Claude implements.** Design choices, test strategy, trade-offs: Claude presents 2–4
  options with costs and I choose. Claude writes the boilerplate.
- **Explain before building.** Any concept I rated (a) or (b) gets a short brief before the task
  that needs it. Specclaw teaching mode enforces this (`teach.enabled: true`).
- **I must be able to explain every artifact** in the PR without notes. If I can't, it isn't done.

## Workflow (one module = one specclaw change = one PR)

| Step | Command | Output |
|---|---|---|
| 1. Study | `/study` | `docs/notes.md` in my own words, quiz results in `memory/progress.md` |
| 2. Propose | `/specclaw:propose` from `academy/CHALLENGE.md` | `.specclaw/changes/<change>/proposal.md` |
| 3. Assess | `/specclaw:teach` | level map + `.specclaw/knowledge/learning-plan.md` |
| 4. Plan | `/specclaw:plan` | spec, design (my choices recorded), tasks |
| 5. Build | `/specclaw:build` | code + commits, wave by wave |
| 6. Verify | `/specclaw:verify` | `verify-report.md` against the stated targets |
| 7. Score | `/self-score` | `docs/self-score.md` from `academy/rubric.md` |
| 8. Publish prep | `/public-writeup` | `docs/PUBLIC.md` + `docs/deliverables/` |
| 9. PR | `/specclaw:pr` | PR titled `{{MODULE_ID}} {{MODULE_TITLE}}` |
| 10. Content | `/notebooklm-pack`, `/substack-draft` | `docs/media/` |
| 11. Close | merge, tag `{{TAG}}`, `/specclaw:archive`, `/checkpoint` | tracker updated |

Run `/checkpoint` at the end of every working session, not only at the end of the module.

## Memory

Project memory lives in this folder so it travels with the repo:

@memory/MEMORY.md

Update the files under `memory/` (never a global memory) when something is learned that a future
session needs: where I stopped, decisions and why, gotchas, open questions for the reviewer.

## Rules

Detailed rules are in `.claude/rules/`. They load automatically. Summary:

- `learning.md` — teach-first protocol, what Claude must not do for me
- `git-workflow.md` — branch, commit and PR conventions for this module
- `public-content.md` — what may and may not leave this repo (academy content is confidential)
- `module-stack.md` — stack, targets and conventions specific to this challenge
