#!/usr/bin/env node
// Build the track's GitHub Pages site into site/.
//   site/index.html        track landing page (from README.md + track.json)
//   site/<module-dir>/     each module that has an mkdocs.yml, built on its own
// Usage: node tools/build-site.mjs        (needs: pip install mkdocs-material)
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const track = JSON.parse(fs.readFileSync(path.join(repo, 'track.json'), 'utf8'));
const modules = JSON.parse(fs.readFileSync(path.join(repo, 'modules.json'), 'utf8'));
const out = path.join(repo, 'site');
const src = path.join(repo, '.site-src');
const mkdocs = (args, cwd) => execFileSync('python', ['-m', 'mkdocs', ...args], { cwd, stdio: 'inherit' });

fs.rmSync(out, { recursive: true, force: true });
fs.rmSync(src, { recursive: true, force: true });
fs.mkdirSync(path.join(src, 'docs'), { recursive: true });

// Landing page: README with module links pointed at the module sites.
const built = modules.filter((m) => fs.existsSync(path.join(repo, m.dir, 'mkdocs.yml')));
let readme = fs.readFileSync(path.join(repo, 'README.md'), 'utf8');
for (const m of built) readme = readme.replaceAll(`](${m.dir}/)`, `](${m.dir}/index.html)`);
readme = readme.replace(/^## Setup after a fresh clone[\s\S]*$/m, '');
fs.writeFileSync(path.join(src, 'docs', 'index.md'), readme);
fs.writeFileSync(path.join(src, 'mkdocs.yml'), [
  `site_name: "${track.id} — ${track.name} track"`,
  `repo_url: "${track.github}"`,
  'docs_dir: docs',
  'theme:',
  '  name: material',
  'markdown_extensions: [tables, admonition, attr_list]',
  // module sites are built separately, so their links are unknown to this build
  'validation: { nav: { not_found: info }, links: { not_found: info } }',
  'nav:',
  '  - Track: index.md',
  ...built.map((m) => `  - "${m.id} ${m.title.replace(/"/g, '')}": "${m.dir}/index.html"`),
  '',
].join('\n'));
mkdocs(['build', '-f', 'mkdocs.yml', '-d', out], src);

for (const m of built) {
  console.log(`\n== ${m.id}`);
  mkdocs(['build', '-f', 'mkdocs.yml', '-d', path.join(out, m.dir)], path.join(repo, m.dir));
}
fs.writeFileSync(path.join(out, '.nojekyll'), '');
fs.rmSync(src, { recursive: true, force: true });
console.log(`\nSite built: ${path.relative(repo, out)}/ (${built.length} module site(s))`);
