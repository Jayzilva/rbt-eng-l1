#!/usr/bin/env node
// Scaffold a self-contained module folder from _template/module.
// Usage: node tools/start-module.mjs <m01..m06> [--refresh-academy]
//   --refresh-academy  only re-copy academy/ source files into an existing module
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const track = JSON.parse(fs.readFileSync(path.join(repo, 'track.json'), 'utf8'));
const modules = JSON.parse(fs.readFileSync(path.join(repo, 'modules.json'), 'utf8'));
const [key, flag] = process.argv.slice(2);
const mod = modules.find((m) => m.key === key);
if (!mod) {
  console.error(`usage: node tools/start-module.mjs <${modules.map((m) => m.key).join('|')}> [--refresh-academy]`);
  process.exit(2);
}

const dir = path.join(repo, mod.dir);
const vars = {
  TRACK_NAME: track.name,
  TRACK_ID: track.id,
  TRACK_REPO: track.github.split('/').pop(),
  TRACK_README_REL: '../README.md',
  PARTICIPANT: track.participant,
  PASS_BAR: track.passBar,
  MODULE_ID: mod.id,
  MODULE_KEY: mod.key,
  MODULE_N: String(mod.n),
  MODULE_TITLE: mod.title,
  MODULE_DIR: mod.dir,
  MODULE_SCOPE: mod.key,
  MODULE_SUMMARY: mod.summary,
  DATES: mod.dates,
  WEEK: String(mod.week),
  TAG: `${mod.id.toLowerCase()}-v1`,
  BRANCH_PREFIX: `${track.id.toLowerCase()}/`,
};
const fill = (s) => s.replace(/\{\{([A-Z_]+)\}\}/g, (m, k) => (k in vars ? vars[k] : m));

function copyTree(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name);
    const d = path.join(dst, e.name);
    if (e.isDirectory()) copyTree(s, d);
    else if (fs.existsSync(d)) console.log(`keep   ${path.relative(repo, d)}`);
    else fs.writeFileSync(d, fill(fs.readFileSync(s, 'utf8')));
  }
}

function copyAcademy() {
  const src = path.join(repo, '.academy');
  if (!fs.existsSync(src)) {
    console.warn('No .academy/ cache. Run: ACADEMY_PASSWORD=... node tools/fetch-academy.mjs');
    return;
  }
  const map = {
    'SESSION.md': `${mod.academySlug}__SESSION.md`,
    'CHALLENGE.md': `${mod.academySlug}__CHALLENGE.md`,
    'rubric.md': `evaluation__month-${mod.n}-rubric.md`,
    'gamma-script.md': mod.gammaSlug ? `gamma-scripts__${mod.gammaSlug}.md` : null,
    'track-overview.md': 'index.md',
  };
  const dst = path.join(dir, 'academy');
  fs.mkdirSync(dst, { recursive: true });
  for (const [to, from] of Object.entries(map)) {
    const f = from && path.join(src, from);
    if (f && fs.existsSync(f)) { fs.copyFileSync(f, path.join(dst, to)); console.log(`academy/${to}`); }
    else console.log(`academy/${to}  (not published yet)`);
  }
}

if (flag === '--refresh-academy') {
  copyAcademy();
} else {
  if (fs.existsSync(dir)) console.log(`${mod.dir} exists; filling in missing files only`);
  copyTree(path.join(repo, '_template', 'module'), dir);
  copyAcademy();
  console.log(`\nScaffolded ${mod.dir}. Next: cd ${mod.dir} && claude, then /specclaw:init and /study.`);
}
