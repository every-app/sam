# Article Review Guide

Use this guide for independent article review. Light polish is secondary, and the goal is a publish-ready draft rather than a saved audit.

Substantial draft work means a new full draft, a full-article rewrite, or structural changes across multiple sections. It does not mean small local edits.

## When To Trigger Review

- Review after a new full draft.
- Review after a substantial restructure or major rewrite.
- Review after required fact-check changes are already incorporated when a fact-check pass was needed.
- Skip the independent review loop for tiny edits like sentence trims, link additions, or a small intro cleanup.

## Review Inputs

- Always read `context/brand-voice.md`, `context/user-notes.md`, and `context/seo-guidelines.md`.
- Read `docs/article-writing.md` so the review matches the writing rules.
- Load `context/internal-links.md` and `context/target-keywords.md` only when they materially affect the review.
- Use `node ./scripts/analyze-draft.mjs <path> --keyword "..."` when a draft exists and the keyword is clear.

## What To Review

- opening strength and how quickly the article gets to the answer
- search intent and reader usefulness
- metadata quality
- heading structure and scannability
- keyword placement without forcing it
- citation quality and link relevance
- brand voice alignment
- fairness of first-party product mentions
- research-note leakage, unnecessary methodology, or exclusion asides
- whether suggested fixes are worth the tradeoff

## Publish-Ready Checks

- By roughly the first 120 to 150 words, the draft should make clear who it is for, what decision or problem it covers, and what the reader will get.
- Flag intros that explain the article, justify the writing approach, or delay the useful answer.
- Treat sections about inclusion criteria, exclusions, or methodology as suspect unless they clearly help the reader make a better decision.
- Flag sections that appear to come straight from internal brief notes rather than reader needs.
- Keep first-party disclosure present when needed, but brief and proportional to the article.
- Ask whether the piece would still feel publishable if the keyword targets and brief were hidden from view.

## How To Present Feedback

- Start with what should stay as-is.
- Separate required fixes from optional polish.
- Flag anything that feels over-optimized, vague, defensive, or self-serving.
- Prefer deleting weak sections over polishing them when the section itself is the problem.
- Say when a script warning is not worth changing.
- Prefer a short prioritized checklist over a long generic audit.
- Return findings in-session and do not save a separate review markdown file.
- End with one verdict: `ready to publish unless user feedback`, `publish after required fixes`, or `needs substantial revision`.

## Applying Edits

- Default to a light pass unless the user clearly wants a deeper rewrite.
- Preserve strong passages whenever possible.
- Add internal links only when they truly help the reader.
- Route required fixes back into the draft immediately rather than parking them in a separate review artifact.
- Save durable feedback about tone, optimization style, or proof expectations to `context/user-notes.md`.
