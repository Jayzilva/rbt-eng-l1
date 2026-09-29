---
name: self-score
description: Score this module's deliverables against the academy rubric and write docs/self-score.md for the PR. Use after /specclaw:verify passes and before /specclaw:pr, or when I ask "how would this score?".
---

# Self-score against the rubric

1. Read `academy/rubric.md` (if missing, use the "Evaluation" section of `academy/CHALLENGE.md`).
2. Read `.specclaw/changes/<change>/verify-report.md`, the deliverables in `docs/deliverables/`,
   and `git log --oneline main..HEAD`.
3. For every rubric criterion, write one row: criterion, max points, my estimate, the evidence
   (file path, metric, commit hash), and what would raise the score. Estimate conservatively;
   a reviewer will check each claim.
4. Evidence must be concrete. "Tests are good" is not evidence; `src/Button.test.tsx` (7 cases,
   AAA, covers disabled state) is.
5. Rubric wording is confidential: paraphrase criterion names, never paste descriptors.
6. Write `docs/self-score.md` with the table, total, pass bar ({{PASS_BAR}}), and a
   "Gaps I know about" list. Show me the total and the top 3 gaps; ask whether to fix any before
   the PR.
