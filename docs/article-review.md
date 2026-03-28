# Article Review Guide

Use this guide for independent article review. Light polish is secondary.

Substantial draft work means a new full draft, a full-article rewrite, or structural changes across multiple sections. It does not mean small local edits.

## When To Trigger Review

- Review after a new full draft.
- Review after a substantial restructure or major rewrite.
- Skip the independent review loop for tiny edits like sentence trims, link additions, or a small intro cleanup.

## Review Inputs

- Always read `context/brand-voice.md`, `context/user-notes.md`, and `context/seo-guidelines.md`.
- Read `docs/article-writing.md` so the review matches the writing rules.
- Load `context/internal-links.md` and `context/target-keywords.md` only when they materially affect the review.
- Use `node ./scripts/analyze-draft.mjs <path> --keyword "..."` when a draft exists and the keyword is clear.

## What To Review

- search intent and reader usefulness
- metadata quality
- heading structure and scannability
- keyword placement without forcing it
- citation quality and link relevance
- brand voice alignment
- fairness of first-party product mentions
- whether suggested fixes are worth the tradeoff

## How To Present Feedback

- Start with what should stay as-is.
- Separate high-impact fixes from optional polish.
- Flag anything that feels over-optimized, vague, defensive, or self-serving.
- Say when a script warning is not worth changing.
- Prefer a short prioritized checklist over a long generic audit.

## Applying Edits

- Default to a light pass unless the user clearly wants a deeper rewrite.
- Preserve strong passages whenever possible.
- Add internal links only when they truly help the reader.
- Save durable feedback about tone, optimization style, or proof expectations to `context/user-notes.md`.
