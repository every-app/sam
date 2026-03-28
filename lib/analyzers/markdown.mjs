import fs from "node:fs";

export function readMarkdown(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

export function writeMarkdown(filePath, content) {
  fs.writeFileSync(filePath, content, "utf8");
}

export function getWordCount(content) {
  const words = content.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g) ?? [];
  return words.length;
}

export function getSentences(content) {
  return content
    .replace(/\n+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function getParagraphs(content) {
  return content
    .split(/\n\s*\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function getHeadings(content) {
  return content
    .split("\n")
    .filter((line) => /^#{1,6}\s+/.test(line))
    .map((line) => {
      const hashes = line.match(/^#+/)?.[0] ?? "#";
      return {
        level: hashes.length,
        text: line.replace(/^#{1,6}\s+/, "").trim(),
      };
    });
}

export function extractMetadata(content) {
  const fields = [
    "Meta Title",
    "Meta Description",
    "Primary Keyword",
    "Secondary Keywords",
    "URL Slug",
    "Category",
    "Tags",
  ];

  const result = {};

  for (const field of fields) {
    const pattern = new RegExp(
      `\\*\\*${escapeRegex(field)}\\*\\*:\\s*(.+)`,
      "i",
    );
    const match = content.match(pattern);
    result[field] = match?.[1]?.trim() ?? "";
  }

  return result;
}

export function stripMetadata(content) {
  return content
    .split("\n")
    .filter(
      (line) =>
        !/^\*\*(Meta Title|Meta Description|Primary Keyword|Secondary Keywords|URL Slug|Category|Tags)\*\*:/i.test(
          line,
        ),
    )
    .join("\n")
    .trim();
}

export function countLinks(content) {
  const links = [...content.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)].map(
    (match) => ({
      text: match[1],
      url: match[2],
    }),
  );

  const internal = links.filter(
    (link) => link.url.startsWith("/") || link.url.startsWith("#"),
  );
  const external = links.filter((link) => /^https?:\/\//i.test(link.url));

  return {
    total: links.length,
    internal: internal.length,
    external: external.length,
    links,
  };
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
