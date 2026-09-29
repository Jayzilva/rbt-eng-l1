# academy/ (local only)

This folder holds the decrypted BISTEC Academy pages for ENG-L1-M01: `SESSION.md`,
`CHALLENGE.md`, `rubric.md`, `gamma-script.md`. Everything here except this README is
gitignored and must never be published.

Missing after a fresh clone? From the repo root run:

    ACADEMY_PASSWORD=... node tools/fetch-academy.mjs
    node tools/start-module.mjs m01 --refresh-academy
