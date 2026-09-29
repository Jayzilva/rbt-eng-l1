#!/usr/bin/env node
// Download and decrypt this track's BISTEC Academy pages into .academy/ (gitignored).
// Usage: ACADEMY_PASSWORD=... node tools/fetch-academy.mjs
// The site uses mkdocs-encryptcontent: PBKDF2-SHA256 (100k) unwraps a per-page key,
// then AES-256-CBC decrypts the page body. Pandoc converts HTML to Markdown if installed.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const track = JSON.parse(fs.readFileSync(path.join(repo, 'track.json'), 'utf8'));
const password = process.env.ACADEMY_PASSWORD;
if (!password) { console.error('Set ACADEMY_PASSWORD'); process.exit(2); }

const SITE = 'https://process.bistecglobal.com';
const BASE = `/academy/role-based-training/${track.academyPath}/`;
const out = path.join(repo, '.academy');
fs.mkdirSync(out, { recursive: true });

const b64 = (s) => Buffer.from(s, 'base64');
const aes = (key, iv, ct) => {
  const d = crypto.createDecipheriv('aes-256-cbc', key, iv);
  return Buffer.concat([d.update(ct), d.final()]);
};
let pandoc = true;
try { execFileSync('pandoc', ['--version'], { stdio: 'ignore' }); } catch { pandoc = false; }

const toMarkdown = (html) => {
  if (!pandoc) return html.replace(/<[^>]+>/g, '').replace(/\n{3,}/g, '\n\n');
  const tmp = path.join(out, '.tmp.html');
  fs.writeFileSync(tmp, html);
  const md = execFileSync('pandoc', ['-f', 'html', '-t', 'gfm-raw_html', '--wrap=none', tmp], { encoding: 'utf8' });
  fs.unlinkSync(tmp);
  return md;
};
const clean = (md) =>
  md.replace(/\r\n/g, '\n')
    .replace(/\[¶\]\([^)]*\)/g, '')
    .replace(/^# [඀-෿][^\n]*\n+[඀-෿][^\n]*\n+/m, ''); // localized noscript banner

const sitemap = await (await fetch(`${SITE}/sitemap.xml`)).text();
const pages = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => new URL(m[1]).pathname.replace(/^\/process-docs/, ''))
  .filter((p) => p.startsWith(BASE));

let ok = 0;
for (const p of pages) {
  const html = await (await fetch(SITE + p)).text();
  const id = html.match(/encryptcontent_id = "([^"]+)"/);
  const ks = html.match(/encryptcontent_keystore = (\[[^\]]*\])/);
  const enc = html.match(/id=mkdocs-encrypted-content[^>]*>([^<]+)</);
  let body;
  if (id && ks && enc) {
    let keys;
    for (const entry of JSON.parse(ks[1])) {
      const [iv, ct, salt] = entry.split(';');
      const k = crypto.pbkdf2Sync(encodeURIComponent(password), b64(salt), 100000, 32, 'sha256');
      try { keys = JSON.parse(aes(k, b64(iv), b64(ct)).toString()); break; } catch { /* next entry */ }
    }
    if (!keys) { console.error(`wrong password or format: ${p}`); process.exitCode = 1; continue; }
    const [iv, ct] = enc[1].split(';');
    body = aes(Buffer.from(keys[id[1]], 'hex'), b64(iv), b64(ct)).toString();
  } else {
    body = (html.match(/<article[^>]*>([\s\S]*?)<\/article>/) || [, html])[1];
  }
  const rel = p.slice(BASE.length).replace(/\/$/, '') || 'index';
  fs.writeFileSync(path.join(out, rel.replace(/\//g, '__') + '.md'), clean(toMarkdown(body)));
  ok++;
}
console.log(`${ok}/${pages.length} pages written to .academy/`);
