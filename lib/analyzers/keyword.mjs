import { getHeadings, getWordCount, stripMetadata } from "./markdown.mjs";

export function analyzeKeyword(content, keyword) {
  if (!keyword || !keyword.trim()) {
    return null;
  }

  const normalizedKeyword = keyword.trim().toLowerCase();
  const body = stripMetadata(content);
  const totalWords = Math.max(getWordCount(body), 1);
  const occurrences = countOccurrences(body, normalizedKeyword);
  const density = Number(((occurrences / totalWords) * 100).toFixed(2));
  const headings = getHeadings(body);
  const title = headings.find((heading) => heading.level === 1)?.text ?? "";
  const metaTitle = content.match(/\*\*Meta Title\*\*:\s*(.+)$/im)?.[1] ?? "";
  const metaDescription =
    content.match(/\*\*Meta Description\*\*:\s*(.+)$/im)?.[1] ?? "";
  const h2Matches = headings.filter(
    (heading) => heading.level === 2 && containsKeyword(heading.text, normalizedKeyword),
  ).length;

  return {
    keyword,
    occurrences,
    density,
    inTitle: containsKeyword(title, normalizedKeyword),
    inFirst100Words: containsKeyword(firstWords(body, 100), normalizedKeyword),
    inMetaTitle: containsKeyword(metaTitle, normalizedKeyword),
    inMetaDescription: containsKeyword(metaDescription, normalizedKeyword),
    h2Matches,
  };
}

function countOccurrences(content, keyword) {
  return content.match(createKeywordPattern(keyword, "gi"))?.length ?? 0;
}

function firstWords(content, count) {
  return (content.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g) ?? [])
    .slice(0, count)
    .join(" ");
}

function containsKeyword(content, keyword) {
  if (!content) {
    return false;
  }

  return createKeywordPattern(keyword, "i").test(content);
}

function createKeywordPattern(keyword, flags) {
  const escapedKeyword = escapeRegex(keyword).replace(/\s+/g, "\\s+");
  return new RegExp(`(^|[^A-Za-z0-9])${escapedKeyword}(?=$|[^A-Za-z0-9])`, flags);
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
