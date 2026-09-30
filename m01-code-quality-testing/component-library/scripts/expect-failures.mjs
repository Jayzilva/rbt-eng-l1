#!/usr/bin/env node
// Red-state evidence for specclaw build reports (tasks.md, wave 3).
// Usage: node scripts/expect-failures.mjs <jest --json output> "<full test name>" ...
// Exits 0 only when the failing tests are exactly the names given (order-independent),
// so a report can prove "these tests fail, and nothing else does".
import { readFileSync } from 'node:fs';

const [file, ...expected] = process.argv.slice(2);
if (!file) {
  console.error('usage: expect-failures.mjs <jest-json> "<test name>" ...');
  process.exit(2);
}
const result = JSON.parse(readFileSync(file, 'utf8'));
const failing = result.testResults
  .flatMap((f) => f.assertionResults)
  .filter((a) => a.status === 'failed')
  .map((a) => a.fullName);
const missing = expected.filter((n) => !failing.includes(n));
const unexpected = failing.filter((n) => !expected.includes(n));
console.log(`failing (${failing.length}):`);
failing.forEach((n) => console.log(`  - ${n}`));
if (missing.length || unexpected.length) {
  missing.forEach((n) => console.log(`expected to fail but did not: ${n}`));
  unexpected.forEach((n) => console.log(`failed but not expected: ${n}`));
  process.exit(1);
}
console.log('red state matches expectation');
