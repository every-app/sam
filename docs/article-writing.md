# Article Writing Guide

Use this guide for net-new articles and major rewrites.

Substantial draft work means a new full draft, a full-article rewrite, or structural changes across multiple sections. It does not mean small local edits.

## Inputs To Load

- Always load `context/brand-voice.md`, `context/user-notes.md`, and `context/seo-guidelines.md`.
- Load `context/internal-links.md` only when a real internal-link opportunity exists.
- Load `context/target-keywords.md` when it helps clarify topic fit or terminology.
- Load a relevant brief from `research/` when one exists.

## Drafting Workflow

1. For net-new drafts, present a compact mini-brief before drafting: proposed primary keyword, inferred search intent, suggested angle, working outline, and any source or evidence gaps.
2. Ask one bundled check-in question for outline preferences, must-use sources, must-cover points, claims to avoid, or other constraints.
3. Skip that pre-draft check-in only when the user clearly wants an immediate draft or has already provided the needed direction.
4. Clarify the search intent and reader problem before outlining.
5. Use `templates/article-frontmatter.md` for the metadata block.
6. Open with the main problem and article promise quickly.
7. Within roughly the first 120 to 150 words, make it clear who the piece is for, what problem or decision it addresses, and what the reader will get.
8. Use clear H2s and H3s that help the reader scan and decide.
9. Favor concrete examples, comparisons, and caveats over filler.
10. Add external links when they help verify tools, claims, or definitions.
11. Add internal links only when they are relevant, natural, and supported by context.
12. Save full drafts to `drafts/<topic-slug>-<YYYY-MM-DD>.md`.
13. Expect substantial drafts to go through fact-check and final review before they are considered publish-ready.
14. Incorporate required review feedback directly into the draft rather than saving a separate review file.

## Reader-First Draft Rules

- Drafts should read like finished articles for readers, not like process notes for the writer.
- Treat brief methodology, inclusion filters, star thresholds, and exclusion notes as internal by default.
- Surface methodology only when it materially helps the reader trust, compare, or use the recommendation.
- When revising from review notes, make the reader-facing change without carrying the editor's rationale into the draft.
- Do not spend the intro explaining why the article exists, why the category is messy, or how the list was assembled.
- Keep first-party disclosures plain and proportional. They should inform the reader without taking over the opening.
- Every major section should help the reader choose, act, or understand. Cut sections that only justify the writer's process.
- If a section would disappear during a strong editorial pass without hurting the reader, it probably does not belong.

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
- Use analyzer warnings about publish readiness to cut or rewrite weak sections, not to force new SEO boilerplate into the draft.
- Apply only changes that improve clarity, search intent, metadata quality, or linking usefulness.
- Do not make a change just because the script surfaced it.

## Tone And Evidence

- Keep the writing practical, direct, and specific.
- Avoid snark, defensiveness, and judgmental phrasing.
- Do not invent analytics, usage claims, or market proof.
- Flag missing proof instead of filling the gap with vague confidence.
- If a claim cannot be supported confidently during revision, soften it or remove it.
