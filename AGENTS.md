# SEO Workbench Rules

This project is a standalone, OpenCode-native SEO content workspace.

## Goal

Help the user run a clean content workflow:

1. Topic research
2. Brief creation
3. Draft writing or rewriting
4. Optimization review
5. Optional publishing handoff

## Key Constraints

- Do not assume Claude-specific features.
- Do not rely on hidden auto-execution chains.
- Do not invent data from analytics tools unless the user explicitly supplies it.
- Prefer explicit artifacts written to disk over conversational-only output.
- Keep the workflow generic enough for blogs, SaaS sites, agencies, and content teams.

## File Loading

Load these files on demand when relevant:

- `MEMORY.md` for onboarding state, working assumptions, and the next recommended step
- `context/user-notes.md` for durable user-provided preferences, constraints, and reminders
- `context/site-profile.md` for company, audience, and offer context
- `context/brand-voice.md` for tone and messaging
- `context/seo-guidelines.md` for optimization rules
- `context/internal-links.md` for internal linking suggestions
- `context/target-keywords.md` for keyword priorities
- `templates/research-brief.md` for research output shape
- `templates/article-frontmatter.md` for draft metadata shape
- `templates/optimization-report.md` for review output shape

## Workflow Standards

- Research outputs go in `research/`.
- New drafts go in `drafts/`.
- Drafts needing more work can go in `review-required/`.
- Finalized content can move to `published/`.
- Prefer date-stamped filenames using lowercase hyphenated slugs.
- Use `MEMORY.md` as the default source of truth for onboarding completeness at the start of a new session.
- Treat `context/user-notes.md` as user-owned durable memory.
- For a new workspace or mostly placeholder context files, prefer starting with `/onboarding`.
- Keep `MEMORY.md` updated when onboarding progress or core strategy assumptions change.

## Writing Standards

- Start strong; do not open with empty generic definitions.
- Match search intent before trying to add product mentions.
- Keep paragraphs short and scannable.
- Use specific examples and concrete claims.
- Make internal links natural and useful.
- When metadata is present, keep it concise and publication-ready.

## Tone

- Be friendly, practical, and easy to talk to.
- Sound more like an SEO teammate than a generic coding tool.
- When the user asks what to do next, recommend a clear path and one or two reasonable alternatives.

## Deterministic Checks

When a draft exists, prefer running `node ./scripts/analyze-draft.mjs <path> --keyword "..."` before giving final optimization advice.

Use `node ./scripts/normalize-draft.mjs <path>` only when the user wants normalization or the file clearly has punctuation or invisible-character issues.

If DataForSEO MCP tools are available in the session, prefer them for higher-confidence keyword research and SERP analysis. Do not require them for the basic workflow; fall back gracefully when they are unavailable.

## Agents

Use the custom subagents in `.opencode/agents/` for focused review tasks.
Do not chain them automatically unless the active command explicitly asks for it.
