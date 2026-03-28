import { getHeadings, getWordCount } from "./markdown.mjs";

export function analyzeKeyword(content, keyword) {
  if (!keyword) {
    return null;
  }

  const normalizedKeyword = keyword.trim().toLowerCase();
  const normalizedContent = content.toLowerCase();
  const totalWords = Math.max(getWordCount(content), 1);
  const occurrences = countOccurrences(normalizedContent, normalizedKeyword);
  const density = Number(((occurrences / totalWords) * 100).toFixed(2));
  const headings = getHeadings(content);
  const h2Matches = headings.filter(
    (heading) =>
      heading.level === 2 &&
      heading.text.toLowerCase().includes(normalizedKeyword),
  ).length;

  return {
    keyword,
    occurrences,
    density,
    inTitle:
      /^#\s+.+/m.test(content) &&
      content
        .match(/^#\s+(.+)$/m)?.[1]
        ?.toLowerCase()
        .includes(normalizedKeyword),
    inFirst100Words: firstWords(content, 100)
      .toLowerCase()
      .includes(normalizedKeyword),
    inMetaTitle:
      /\*\*Meta Title\*\*:\s*(.+)$/im.test(content) &&
      content
        .match(/\*\*Meta Title\*\*:\s*(.+)$/im)?.[1]
        ?.toLowerCase()
        .includes(normalizedKeyword),
    inMetaDescription:
      /\*\*Meta Description\*\*:\s*(.+)$/im.test(content) &&
      content
        .match(/\*\*Meta Description\*\*:\s*(.+)$/im)?.[1]
        ?.toLowerCase()
        .includes(normalizedKeyword),
    h2Matches,
  };
}

function countOccurrences(content, keyword) {
  return content.split(keyword).length - 1;
}

function firstWords(content, count) {
  return (content.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g) ?? [])
    .slice(0, count)
    .join(" ");
}
