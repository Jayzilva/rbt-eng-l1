# {{MODULE_ID}} — {{MODULE_TITLE}}

Part of the [{{TRACK_NAME}} track]({{TRACK_README_REL}}). Scheduled {{DATES}}.

**Status:** Not started

## What this module covers

{{MODULE_SUMMARY}}

## Links

| GitHub PR | Tag | YouTube | Substack |
|---|---|---|---|
| pending | `{{TAG}}` | pending | pending |

## How to work on it

Open this folder on its own: `cd {{MODULE_DIR}} && claude`. `CLAUDE.md` describes the workflow;
the specclaw plugin is enabled by `.claude/settings.json` (marketplace `Jayzilva/specclaw`).
Challenge source files are local-only in `academy/`; see `academy/README.md`.

## Layout

    CLAUDE.md            module instructions (loads memory + rules)
    .claude/rules/       learning, git, public-content, stack rules
    .claude/skills/      study, self-score, public-writeup, notebooklm-pack, substack-draft, checkpoint
    memory/              portable project memory
    .specclaw/           spec-driven change: proposal, spec, design, tasks, teaching log
    docs/plan.md         module plan and checklist
    docs/notes.md        my study notes
    docs/PUBLIC.md       public write-up (feeds Substack + NotebookLM)
    docs/deliverables/   named challenge deliverables
    docs/media/          video pack, YouTube + Substack drafts
    tools/               confidentiality checker
    academy/             challenge source (gitignored)
