import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const agentPairs = [
  {
    name: 'seo-guide',
    opencodePath: '.opencode/agents/seo-guide.md',
    claudePath: '.claude/agents/seo-guide.md',
  },
  {
    name: 'article-writer',
    opencodePath: '.opencode/agents/article-writer.md',
    claudePath: '.claude/agents/article-writer.md',
  },
  {
    name: 'fact-checker',
    opencodePath: '.opencode/agents/fact-checker.md',
    claudePath: '.claude/agents/fact-checker.md',
  },
  {
    name: 'seo-reviewer',
    opencodePath: '.opencode/agents/seo-reviewer.md',
    claudePath: '.claude/agents/seo-reviewer.md',
  },
];

function stripFrontmatter(content) {
  return content.replace(/^---\n[\s\S]*?\n---(?:\n|$)/, '');
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);

  if (!match) {
    return {};
  }

  return Object.fromEntries(
    match[1]
      .split('\n')
      .map((line) => line.match(/^([^:]+):\s*(.*)$/))
      .filter(Boolean)
      .map(([, key, value]) => [key.trim(), value.trim()]),
  );
}

function stripHarnessSpecificNotes(content) {
  return content.replace(/(?:^|\n)#{2,6} Harness Specific Notes\n[\s\S]*$/, '');
}

function normalizeBody(content) {
  const normalizedLineEndings = content.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');
  const withoutFrontmatter = stripFrontmatter(normalizedLineEndings);
  const withoutHarnessSpecificNotes = stripHarnessSpecificNotes(withoutFrontmatter);
  const withoutTrailingWhitespace = withoutHarnessSpecificNotes
    .split('\n')
    .map((line) => line.replace(/[ \t]+$/g, ''))
    .join('\n');

  return withoutTrailingWhitespace.replace(/^\n+|\n+$/g, '');
}

function firstDifferenceSnippet(left, right) {
  const leftLines = left.split('\n');
  const rightLines = right.split('\n');
  const lineCount = Math.max(leftLines.length, rightLines.length);

  for (let index = 0; index < lineCount; index += 1) {
    if (leftLines[index] !== rightLines[index]) {
      return [
        `First difference at line ${index + 1}:`,
        `OpenCode: ${leftLines[index] ?? '<missing>'}`,
        `Claude: ${rightLines[index] ?? '<missing>'}`,
      ].join('\n');
    }
  }

  return 'Bodies differ, but no line-level delta was identified.';
}

for (const pair of agentPairs) {
  test(`agent bodies stay in sync for ${pair.name}`, async () => {
    const opencodeFile = path.join(repoRoot, pair.opencodePath);
    const claudeFile = path.join(repoRoot, pair.claudePath);

    assert.ok(
      existsSync(opencodeFile),
      `Mapped agent file missing for ${pair.name}:\n${pair.opencodePath}`,
    );
    assert.ok(
      existsSync(claudeFile),
      `Mapped agent file missing for ${pair.name}:\n${pair.claudePath}`,
    );

    const [opencodeContent, claudeContent] = await Promise.all([
      readFile(opencodeFile, 'utf8'),
      readFile(claudeFile, 'utf8'),
    ]);
    const opencodeFrontmatter = parseFrontmatter(opencodeContent);
    const claudeFrontmatter = parseFrontmatter(claudeContent);

    const opencodeBody = normalizeBody(opencodeContent);
    const claudeBody = normalizeBody(claudeContent);

    assert.equal(
      opencodeFrontmatter.description,
      claudeFrontmatter.description,
      `Agent description drift detected for ${pair.name}`,
    );

    if (opencodeBody !== claudeBody) {
      assert.fail(
        [
          `Agent body drift detected for ${pair.name}:`,
          pair.opencodePath,
          pair.claudePath,
          '',
          firstDifferenceSnippet(opencodeBody, claudeBody),
        ].join('\n'),
      );
    }
  });
}
