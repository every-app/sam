#!/usr/bin/env node

import path from "node:path";
import { analyzeKeyword } from "../lib/analyzers/keyword.mjs";
import { readMarkdown } from "../lib/analyzers/markdown.mjs";
import { analyzeReadability } from "../lib/analyzers/readability.mjs";
import { analyzeStructure } from "../lib/analyzers/structure.mjs";

const { filePath, keyword } = parseArgs(process.argv.slice(2));

if (!filePath) {
  console.error(
    'Usage: node ./scripts/analyze-draft.mjs <file> [--keyword "primary keyword"]',
  );
  process.exit(1);
}

const content = readMarkdown(filePath);
const readability = analyzeReadability(content);
const structure = analyzeStructure(content);
const keywordReport = analyzeKeyword(
  content,
  keyword || structure.metadata["Primary Keyword"],
);
const summary = buildSummary({ readability, structure, keywordReport });

console.log(
  JSON.stringify(
    {
      file: path.resolve(filePath),
      readability,
      structure,
      keyword: keywordReport,
      summary,
    },
    null,
    2,
  ),
);

function buildSummary({ readability, structure, keywordReport }) {
  const issues = [];
  const wins = [];

  if (structure.h1Count === 1) wins.push("Single H1 present.");
  if (structure.headingIssues.length > 0)
    issues.push(...structure.headingIssues);
  if (structure.internalLinks === 0) issues.push("No internal links found.");
  if (structure.externalLinks === 0) issues.push("No external links found.");
  if (!structure.metadata["Meta Title"]) issues.push("Missing meta title.");
  if (!structure.metadata["Meta Description"])
    issues.push("Missing meta description.");
  if (!structure.metadata["URL Slug"]) issues.push("Missing URL slug.");
  if (readability.averageSentenceLength > 24)
    issues.push(
      `Average sentence length is ${readability.averageSentenceLength} words.`,
    );
  if (readability.longSentences > 0)
    issues.push(`${readability.longSentences} long sentences detected.`);
  if (structure.longParagraphs > 0)
    issues.push(`${structure.longParagraphs} very long paragraphs detected.`);

  if (keywordReport) {
    if (!keywordReport.inTitle) issues.push("Primary keyword missing from H1.");
    if (!keywordReport.inFirst100Words)
      issues.push("Primary keyword missing from first 100 words.");
    if (keywordReport.h2Matches === 0)
      issues.push("Primary keyword missing from H2 headings.");
    if (!keywordReport.inMetaTitle)
      issues.push("Primary keyword missing from meta title.");
    if (!keywordReport.inMetaDescription)
      issues.push("Primary keyword missing from meta description.");
    if (keywordReport.density < 0.5)
      issues.push(`Keyword density is low at ${keywordReport.density}%.`);
    if (keywordReport.density >= 0.8 && keywordReport.density <= 2.2)
      wins.push(`Keyword density looks healthy at ${keywordReport.density}%.`);
    if (keywordReport.density > 2.5)
      issues.push(
        `Keyword density may be too high at ${keywordReport.density}%.`,
      );
  }

  return { wins, issues };
}

function parseArgs(args) {
  const result = { filePath: "", keyword: "" };

  for (let index = 0; index < args.length; index += 1) {
    const value = args[index];

    if (!value) continue;

    if (value === "--keyword") {
      result.keyword = args[index + 1] ?? "";
      index += 1;
      continue;
    }

    if (!result.filePath) {
      result.filePath = value;
    }
  }

  return result;
}
