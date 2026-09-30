# ENG-L1-M01 — Code Quality & Testing

Part of the [Engineer track](../README.md). Scheduled Wed 30 Sep – Thu 1 Oct 2026.

**Status:** Studying + design done — build starts after `/specclaw:propose`

## Start learning here

Follow these in order. Everything renders directly on GitHub.

1. **[Syllabus overview](docs/syllabus/README.md)**: scope, level map, reading order, time per chapter.
2. **Part 1 (foundations):** read these, watch each chapter's *Go deeper* videos, then generate NotebookLM video 1.
   [01 Testing pyramid](docs/syllabus/01-testing-pyramid.md) ·
   [02 Jest basics](docs/syllabus/02-jest-basics.md) ·
   [03 Code coverage](docs/syllabus/03-code-coverage.md) ·
   [04 Typing props](docs/syllabus/04-typescript-props.md) ·
   [05 React Testing Library](docs/syllabus/05-react-testing-library.md) ·
   [06 user-event](docs/syllabus/06-user-event.md)
3. **Part 2 (writing good tests):** read these, then generate NotebookLM video 2.
   [07 Mocking](docs/syllabus/07-mocking.md) ·
   [08 Async and fake timers](docs/syllabus/08-async-and-fake-timers.md) ·
   [09 AAA and behaviour](docs/syllabus/09-aaa-and-behaviour.md) ·
   [10 TDD](docs/syllabus/10-tdd.md) ·
   [11 Accessibility](docs/syllabus/11-accessibility.md) ·
   [12 Cypress E2E](docs/syllabus/12-cypress-e2e.md)
4. **[NotebookLM learning pack](docs/media/notebooklm/learn-pack.md)**: sources to paste and both video prompts.
5. **[Decisions made](docs/decisions-made.md)**: the 10 design decisions with full reasoning. Reread before each part.
6. **[Offline milestones](docs/offline-milestones.md)**: the work beyond the challenge, due 1 Nov.
7. Answer each chapter's *Check yourself* questions before opening the answers. For deeper Q&A, open
   Claude Code in this folder and run `/study <chapter>`.

## What this module covers

Test an untested React + TypeScript component library with Jest, React Testing Library and Cypress; reach 80% coverage and fix seeded bugs test-first.

## Links

| GitHub PR | Tag | YouTube | Site |
|---|---|---|---|
| pending | `eng-l1-m01-v1` | pending | pending |

## How to work on it

Open this folder on its own: `cd m01-code-quality-testing && claude`. `CLAUDE.md` describes the workflow;
the specclaw plugin is enabled by `.claude/settings.json` (marketplace `Jayzilva/specclaw`).
Challenge source files are local-only in `academy/`; see `academy/README.md`.

## Layout

    CLAUDE.md            module instructions (loads memory + rules)
    .claude/rules/       learning, git, public-content, stack rules
    .claude/skills/      syllabus, design-session, study, self-score, public-writeup,
                         notebooklm-pack, site-post, checkpoint
    memory/              portable project memory
    .specclaw/           spec-driven change: proposal, spec, design, tasks, teaching log
    mkdocs.yml           public site config (GitHub Pages)
    docs/syllabus/       syllabus guide from /study (optional)
    docs/plan.md         module plan and checklist
    docs/notes.md        my study notes
    docs/PUBLIC.md       public write-up (feeds the Pages site + NotebookLM)
    docs/deliverables/   named challenge deliverables
    docs/media/          video pack and YouTube drafts (not published to the site)
    tools/               confidentiality checker
    academy/             challenge source (gitignored)
