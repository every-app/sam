import { getParagraphs, getSentences, getWordCount } from "./markdown.mjs";

const COMMON_WORDS = new Set([
  "the",
  "be",
  "to",
  "of",
  "and",
  "a",
  "in",
  "that",
  "have",
  "it",
  "for",
  "not",
  "on",
  "with",
  "as",
  "you",
  "do",
  "at",
  "this",
  "but",
  "his",
  "by",
  "from",
  "they",
  "we",
  "say",
  "her",
  "she",
  "or",
  "an",
  "will",
  "my",
  "one",
  "all",
]);

export function analyzeReadability(content) {
  const words = getWordCount(content);
  const sentences = getSentences(content);
  const paragraphs = getParagraphs(content);
  const averageSentenceLength = sentences.length
    ? Number((words / sentences.length).toFixed(1))
    : 0;
  const averageParagraphLength = paragraphs.length
    ? Number((sentences.length / paragraphs.length).toFixed(1))
    : 0;
  const complexWords = countComplexWords(content);
  const longSentences = sentences.filter(
    (sentence) => wordCount(sentence) >= 25,
  ).length;

  return {
    words,
    sentenceCount: sentences.length,
    paragraphCount: paragraphs.length,
    averageSentenceLength,
    averageParagraphLength,
    complexWordRate: words
      ? Number(((complexWords / words) * 100).toFixed(1))
      : 0,
    longSentences,
  };
}

function countComplexWords(content) {
  const words = content.match(/[A-Za-z][A-Za-z'-]*/g) ?? [];

  return words.filter((word) => {
    const normalized = word.toLowerCase();
    return normalized.length >= 10 && !COMMON_WORDS.has(normalized);
  }).length;
}

function wordCount(content) {
  return content.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)?.length ?? 0;
}
