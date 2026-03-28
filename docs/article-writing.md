# Article Writing Guide

Use this guide for net-new articles and major rewrites.

Substantial draft work means a new full draft, a full-article rewrite, or structural changes across multiple sections. It does not mean small local edits.

## Inputs To Load

- Always load `context/brand-voice.md`, `context/user-notes.md`, and `context/seo-guidelines.md`.
- Load `context/internal-links.md` only when a real internal-link opportunity exists.
- Load `context/target-keywords.md` when it helps clarify topic fit or terminology.
- Load a relevant brief from `research/` when one exists.

## Drafting Workflow

1. Clarify the search intent and reader problem before outlining.
2. Use `templates/article-frontmatter.md` for the metadata block.
3. Open with the main problem and article promise quickly.
4. Use clear H2s and H3s that help the reader scan and decide.
5. Favor concrete examples, comparisons, and caveats over filler.
6. Add external links when they help verify tools, claims, or definitions.
7. Add internal links only when they are relevant, natural, and supported by context.
8. Save full drafts to `drafts/<topic-slug>-<YYYY-MM-DD>.md`.

## Rewriting Rules

- Treat rewrites as a mode, not a separate workflow.
- For major rewrites, preserve strong ideas, useful examples, and any sections that already read well.
- For small edits, prefer direct in-place changes instead of a full rewrite loop.
- Default to a new draft only when the changes are structural or the user asks for a separate version.

## First-Party Product Mentions

- Be useful first.
- If the article comes from the product team and the product belongs in the category, say so plainly.
- Keep product mentions contextual, not dominant.
- Include real limitations or tradeoffs when they matter.
- Do not put the product first unless there is a reader-first reason to do so.

## Optimization Guardrails

- Run `node ./scripts/analyze-draft.mjs <path> --keyword "..."` when the draft exists and the keyword is clear.
- Treat analyzer output as a spot check.
- Apply only changes that improve clarity, search intent, metadata quality, or linking usefulness.
- Do not make a change just because the script surfaced it.

## Tone And Evidence

- Keep the writing practical, direct, and specific.
- Avoid snark, defensiveness, and judgmental phrasing.
- Do not invent analytics, usage claims, or market proof.
- Flag missing proof instead of filling the gap with vague confidence.
