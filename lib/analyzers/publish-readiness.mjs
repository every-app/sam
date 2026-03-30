import { getHeadings, getWordCount, stripMetadata } from "./markdown.mjs";

const PROCESS_PATTERNS = [
  {
    pattern: /\bthis (guide|article|roundup)\b/i,
    label: 'self-referential phrasing like "this guide"',
  },
  {
    pattern: /\bat the time of writing\b/i,
    label: '"at the time of writing" language',
  },
  {
    pattern: /\b(inclusion bar|star bar|star filter)\b/i,
    label: "selection-threshold language",
  },
  {
    pattern: /\b\d+\+\s*github stars?\b/i,
    label: "GitHub star-threshold language",
  },
  {
    pattern: /\bi (used|chose|picked|left out|excluded)\b/i,
    label: "writer-process language",
  },
  {
    pattern: /\bcurated shortlist\b/i,
    label: 'phrasing like "curated shortlist"',
  },
  {
    pattern: /\bmethodolog(?:y|ical)\b/i,
    label: "methodology language",
  },
  {
    pattern: /\bexclusions?\b/i,
    label: "exclusion language",
  },
];

const META_HEADING_PATTERN =
  /(how i chose|methodolog|inclusion|why .* not in|what .* left out|exclusions?)/i;

export function analyzePublishReadiness(content) {
  const body = stripMetadata(content);
  const intro = getIntro(body);
  const headings = getHeadings(body);
  const introWordsBeforeFirstH2 = getWordCount(intro);
  const introProcessPatterns = collectMatches(firstWords(intro, 150));
  const bodyProcessPatterns = collectMatches(body);
  const metaHeadings = headings
    .filter(
      (heading) => heading.level >= 2 && META_HEADING_PATTERN.test(heading.text),
    )
    .map((heading) => heading.text);

  const issues = [];
  const wins = [];

  if (introWordsBeforeFirstH2 > 220) {
    issues.push(
      `Intro runs ${introWordsBeforeFirstH2} words before the first H2. Consider getting to the answer faster.`,
    );
  }

  if (
    introProcessPatterns.length >= 2 ||
    (introProcessPatterns.length > 0 && introWordsBeforeFirstH2 > 160)
  ) {
    issues.push(
      `Intro leans on process language (${introProcessPatterns.join(", ")}). Rewrite it around the reader's problem and payoff.`,
    );
  }

  if (metaHeadings.length > 0) {
    issues.push(
      `These headings read like internal process notes rather than reader-facing sections: ${metaHeadings
        .map((heading) => `"${heading}"`)
        .join(", ")}.`,
    );
  }

  if (bodyProcessPatterns.length >= 3) {
    issues.push(
      `Draft includes repeated methodology or exclusion language (${bodyProcessPatterns.join(", ")}). Keep research notes internal unless they change the recommendation.`,
    );
  }

  if (introWordsBeforeFirstH2 > 0 && introWordsBeforeFirstH2 <= 140) {
    wins.push(`Intro gets to the first H2 in ${introWordsBeforeFirstH2} words.`);
  }

  if (metaHeadings.length === 0 && bodyProcessPatterns.length === 0) {
    wins.push("No obvious methodology or exclusion sections detected.");
  }

  return {
    introWordsBeforeFirstH2,
    introProcessPatterns,
    bodyProcessPatterns,
    metaHeadings,
    wins,
    issues,
  };
}

function collectMatches(text) {
  return [...new Set(PROCESS_PATTERNS.filter((item) => item.pattern.test(text)).map((item) => item.label))];
}

function getIntro(content) {
  const lines = content.split("\n");
  const firstH2Line = lines.findIndex((line) => /^##\s+/.test(line));

  return (firstH2Line === -1 ? lines : lines.slice(0, firstH2Line))
    .join("\n")
    .trim();
}

function firstWords(content, count) {
  return (content.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g) ?? [])
    .slice(0, count)
    .join(" ");
}
