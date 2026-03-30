import assert from 'node:assert/strict';
import test from 'node:test';

import { analyzeKeyword } from '../lib/analyzers/keyword.mjs';
import { analyzeStructure } from '../lib/analyzers/structure.mjs';
import { normalizeContent } from '../scripts/normalize-draft.mjs';

test('keyword analysis ignores metadata-only matches and partial word matches', () => {
  const content = [
    '**Meta Title**: AI tools for founders',
    '**Meta Description**: A quick overview',
    '',
    '# Pricing Guide',
    '',
    'Paid plans help teams scale without extra setup.',
    '',
    '## Details',
    '',
    'No keyword in the article body.',
  ].join('\n');

  const report = analyzeKeyword(content, 'ai');

  assert.equal(report.occurrences, 0);
  assert.equal(report.inFirst100Words, false);
  assert.equal(report.inTitle, false);
  assert.equal(report.inMetaTitle, true);
});

test('structure analysis ignores headings inside fenced code blocks', () => {
  const content = [
    '# Real Title',
    '',
    '```md',
    '# Fake Title',
    '## Fake Section',
    '```',
    '',
    '## Real Section',
  ].join('\n');

  const report = analyzeStructure(content);

  assert.equal(report.h1Count, 1);
  assert.equal(report.h2Count, 1);
  assert.deepEqual(report.headingIssues, []);
});

test('normalization preserves em dashes and code block spacing', () => {
  const input = [
    'Alpha — beta\u200B',
    '',
    '',
    '',
    '```js',
    'const x =  1;  ',
    '```',
    '',
  ].join('\n');

  const normalized = normalizeContent(input);

  assert.match(normalized.content, /Alpha — beta/);
  assert.match(normalized.content, /const x =  1;  /);
  assert.ok(!normalized.content.includes('\u200B'));
  assert.equal(normalized.changes.invisibleCharactersRemoved, 1);
  assert.equal(normalized.changes.blankLinesCollapsed, 1);
});
