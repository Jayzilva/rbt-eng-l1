---
name: start-module
description: Scaffold and kick off a ENG-L1 module folder (m01–m06) from the template, fill its plan and stack rules from the academy challenge, and initialise specclaw with teaching mode. Use when I say "start module N", "start ENG-L1-M0N", or on a module's start day.
---

# Start a module

Argument: module key `m01`…`m06` (ask if missing; `modules.json` lists them with dates).

1. Run `node tools/start-module.mjs <key>`. If it warns that `.academy/` is missing, ask me to
   run `ACADEMY_PASSWORD=... node tools/fetch-academy.mjs` myself (never ask for the password
   in chat), then re-run.
2. Work only inside the new module folder from here on.
3. Initialise specclaw in the module folder and switch teaching mode on:

   ```bash
   cd <module-dir>
   specclaw-init . "<MODULE-ID> <Title>" "<one-line summary>"
   specclaw-teach .specclaw enable
   ```

   Write `&` as `and` in both arguments: `specclaw-init` passes them through `sed`, where `&`
   corrupts the name. Then edit `.specclaw/config.yaml`: `git.base_branch: "main"`,
   `git.commit_prefix: "<module-id lowercase>"`, `git.branch_prefix: "eng-l1/"`, `teach.depth: "full"`, `teach.gate_builds: true`,
   `github.repo: "Jayzilva/rbt-eng-l1"`, `notifications.enabled: false`, and the build, test and
   lint commands once the stack is known.
4. Read `academy/CHALLENGE.md`, `academy/SESSION.md` and `academy/rubric.md`. Fill, in my
   own paraphrase (no verbatim academy text):
   - `.claude/rules/module-stack.md`: stack, hard targets, conventions (short).
   - `docs/plan.md`: outcome, targets table, timeboxed parts, rubric map, risks, checklist.
5. Note any missing prerequisite (starter code, environment, access) in `docs/plan.md` Risks and
   `memory/open-questions.md`.
6. Set the module's status to `Studying` in the track `README.md` tracker (make the module title
   a link) and in the module README.
7. Tell me the next action: open Claude Code in the module folder and run `/study`.
