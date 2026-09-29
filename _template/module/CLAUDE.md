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

## Workflow (learn first; one module = one specclaw change = one PR)

| Step | Command | Output |
|---|---|---|
| 1. Syllabus | `/syllabus` | level map, `docs/syllabus/` (GitHub Pages), NotebookLM learn pack |
| 2. Study | me: chapters → videos → NotebookLM video → Check yourself | understanding; `/study` for Q&A |
| 3. Design | `/design-session` | `docs/decisions-made.md`: decisions I made, with patterns and reasons |
| 4. Propose | `/specclaw:propose` from `academy/CHALLENGE.md` | `.specclaw/changes/<change>/proposal.md` |
| 5. Plan | `/specclaw:plan` | spec, design (my decisions settled), tasks |
| 6. Build | `/specclaw:build` | code + commits, wave by wave |
| 7. Verify | `/specclaw:verify` | `verify-report.md` against the stated targets |
| 8. Score | `/self-score` | `docs/self-score.md` from `academy/rubric.md` |
| 9. Publish prep | `/public-writeup` | `docs/PUBLIC.md` + `docs/deliverables/` |
| 10. PR | `/specclaw:pr` | PR titled `{{MODULE_ID}} {{MODULE_TITLE}}` |
| 11. Content | `/notebooklm-pack recap`, `/site-post` | public video pack; `docs/build-log.md` |
| 12. Close | merge, tag `{{TAG}}`, `/specclaw:archive`, `/checkpoint` | tracker updated |


Alongside: offline milestones in `docs/offline-milestones.md`. Decisions with full context:
`docs/decisions-made.md`. Any time: `/study` for Q&A. Run `/checkpoint` at the end of every working session.

## Memory

Project memory lives in this folder so it travels with the repo:

@memory/MEMORY.md

Update the files under `memory/` (never a global memory) when something is learned that a future
session needs: where I stopped, decisions and why, gotchas, open questions for the reviewer.

## Rules

Detailed rules are in `.claude/rules/`. They load automatically. Summary:

- `learning.md` — the learning sequence, discussion-mode design, what Claude must not do
- `git-workflow.md` — branch, commit and PR conventions for this module
- `public-content.md` — what may and may not leave this repo (academy content is confidential)
- `module-stack.md` — stack, targets and conventions specific to this challenge
