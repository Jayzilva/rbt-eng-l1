#!/usr/bin/env node
// Confidentiality check for public write-ups.
// Usage: node tools/check-public.mjs <file...>
// Flags any run of 12+ consecutive words shared with a file under academy/, plus lines that
// mention academy URLs or passwords. Exit 0 = clean, 1 = hits found, 2 = usage error.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RUN = 12;
const moduleDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const academyDir = path.join(moduleDir, 'academy');
const targets = process.argv.slice(2);
if (targets.length === 0) {
  console.error('usage: node tools/check-public.mjs <file...>');
  process.exit(2);
}

const words = (text) =>
  text.toLowerCase().replace(/[`*_#>|[\]()]/g, ' ').split(/\s+/).filter((w) => /[a-z0-9]/.test(w));

const shingles = new Set();
if (fs.existsSync(academyDir)) {
  for (const f of fs.readdirSync(academyDir)) {
    if (!f.endsWith('.md') || f === 'README.md') continue;
    const w = words(fs.readFileSync(path.join(academyDir, f), 'utf8'));
    for (let i = 0; i + RUN <= w.length; i++) shingles.add(w.slice(i, i + RUN).join(' '));
  }
} else {
  console.warn('warning: academy/ not found; only the URL/password check runs');
}

const banned = [/process\.bistecglobal\.com/i, /bistecglobal\.github\.io\/process-docs/i, /password\s*[:=]/i, /bistec20\d\d/i];
let hits = 0;
for (const t of targets) {
  const lines = fs.readFileSync(t, 'utf8').split(/\r?\n/);
  lines.forEach((line, n) => {
    for (const re of banned) {
      if (re.test(line)) { hits++; console.log(`${t}:${n + 1}: internal reference: ${line.trim().slice(0, 100)}`); }
    }
    const w = words(line);
    for (let i = 0; i + RUN <= w.length; i++) {
      if (shingles.has(w.slice(i, i + RUN).join(' '))) {
        hits++;
        console.log(`${t}:${n + 1}: matches academy text: "${w.slice(i, i + RUN).join(' ')}"`);
        break;
      }
    }
  });
}
console.log(hits ? `${hits} hit(s). Rewrite in your own words.` : 'clean');
process.exit(hits ? 1 : 0);
