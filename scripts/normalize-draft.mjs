#!/usr/bin/env node

import { readMarkdown, writeMarkdown } from "../lib/analyzers/markdown.mjs";

const filePath = process.argv[2];

if (!filePath) {
  console.error("Usage: node ./scripts/normalize-draft.mjs <file>");
  process.exit(1);
}

const content = readMarkdown(filePath);
const normalized = normalizeContent(content);

writeMarkdown(filePath, normalized.content);
console.log(
  JSON.stringify({ file: filePath, changes: normalized.changes }, null, 2),
);

function normalizeContent(input) {
  let content = input;
  const changes = {
    invisibleCharactersRemoved: 0,
    emDashesReplaced: 0,
    repeatedSpacesCollapsed: 0,
  };

  const invisiblePattern = /[\u200B\u200C\u2060\uFEFF\u00AD]/g;
  const invisibleMatches = content.match(invisiblePattern) ?? [];
  changes.invisibleCharactersRemoved = invisibleMatches.length;
  content = content.replace(invisiblePattern, "");

  const emDashMatches = content.match(/—/g) ?? [];
  changes.emDashesReplaced = emDashMatches.length;
  content = content.replace(/—/g, ", ");

  const doubleSpaceMatches = content.match(/ {2,}/g) ?? [];
  changes.repeatedSpacesCollapsed = doubleSpaceMatches.length;
  content = content.replace(/ {2,}/g, " ");
  content = content.replace(/\s+([,.;!?])/g, "$1");
  content = content.replace(/\n{3,}/g, "\n\n");

  return { content, changes };
}
