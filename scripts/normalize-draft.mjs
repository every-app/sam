#!/usr/bin/env node

import { pathToFileURL } from "node:url";
import { readMarkdown, writeMarkdown } from "../lib/analyzers/markdown.mjs";

if (isCli()) {
  main(process.argv.slice(2));
}

function main(args) {
  const filePath = args[0];

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
}

export function normalizeContent(input) {
  let content = input;
  const changes = {
    invisibleCharactersRemoved: 0,
    trailingWhitespaceRemoved: 0,
    blankLinesCollapsed: 0,
    lineEndingsNormalized: false,
  };

  if (/\r/.test(content)) {
    changes.lineEndingsNormalized = true;
    content = content.replace(/\r\n?/g, "\n");
  }

  const invisiblePattern = /[\u200B\u200C\u2060\uFEFF\u00AD]/g;
  const invisibleMatches = content.match(invisiblePattern) ?? [];
  changes.invisibleCharactersRemoved = invisibleMatches.length;
  content = content.replace(invisiblePattern, "");

  const lines = content.split("\n");
  const normalizedLines = [];
  let inFence = false;
  let blankLineCount = 0;

  for (const line of lines) {
    const trimmed = line.trimStart();

    if (/^(```|~~~)/.test(trimmed)) {
      inFence = !inFence;
      blankLineCount = 0;
      normalizedLines.push(line);
      continue;
    }

    if (inFence) {
      normalizedLines.push(line);
      continue;
    }

    const withoutTrailingWhitespace = line.replace(/[ \t]+$/g, "");
    changes.trailingWhitespaceRemoved +=
      line.length - withoutTrailingWhitespace.length;

    if (withoutTrailingWhitespace === "") {
      blankLineCount += 1;

      if (blankLineCount > 2) {
        changes.blankLinesCollapsed += 1;
        continue;
      }

      normalizedLines.push("");
      continue;
    }

    blankLineCount = 0;
    normalizedLines.push(withoutTrailingWhitespace);
  }

  content = normalizedLines.join("\n");

  return { content, changes };
}

function isCli() {
  return Boolean(
    process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href,
  );
}
