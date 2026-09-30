# Gotchas — ENG-L1-M01

Environment and tool surprises, with the fix.

- `specclaw-init` corrupts a project name containing `&` (sed replacement). Use "and".
- npm 11 holds back install scripts: approve cypress + esbuild (`npm approve-scripts cypress esbuild`) or Vite/Cypress break.
- Jest config .ts needs ts-node; "type": "module" in package.json clashes with Jest CJS — removed.
- Windows CRLF breaks `prettier --check`: component-library/.gitattributes forces LF.
- Git hooks are repo-wide in rbt-eng-l1 → M01 hooks are path-guarded (B1).
- specclaw build reports need `## Verification` with `Exit: 0`; red tasks use scripts/expect-failures.mjs.
