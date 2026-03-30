# SEO Workbench Rules

This project is a standalone, OpenCode-native SEO content workspace.

## Workflow

1. Research a topic
2. Build a brief
3. Draft or revise the article
4. Fact-check substantial drafts and incorporate required fixes
5. Independently review for final publish readiness and incorporate required fixes

Substantial draft work means a new full draft, a full-article rewrite, or structural changes across multiple sections. It does not mean small local edits.

## Core Rules

- Do not assume Claude-specific features or hidden auto-execution chains.
- Do not invent analytics or keyword data unless the user provides it.
- Prefer explicit files on disk over conversational-only output.
- Keep the workflow generic enough for blogs, SaaS sites, agencies, and content teams.
- Use `MEMORY.md` as the source of truth for setup status and next steps.
- Treat `context/user-notes.md` as user-owned durable memory.
- If context is still blank or placeholder-heavy, begin setup in chat.
- If a live site exists, read beyond the homepage before drafting setup assumptions.
- Keep `MEMORY.md` updated when setup progress or core strategy assumptions change.
- Save outputs in `research/` and `drafts/` using lowercase date-stamped slugs.

## Load On Demand

- `MEMORY.md`
- `docs/setup-guide.md`
- `docs/article-writing.md`
- `docs/article-review.md`
- `docs/dataforseo-mcp-setup.md`
- `context/user-notes.md`
- `context/site-profile.md`
- `context/brand-voice.md`
- `context/seo-guidelines.md`
- `context/internal-links.md`
- `context/target-keywords.md`
- `templates/research-brief.md`
- `templates/article-frontmatter.md`

## Writing

- For net-new articles, prefer a compact pre-draft mini-brief that states the proposed keyword, likely search intent, suggested angle, working outline, and any source gaps before writing.
- Ask one bundled user check-in for outline preferences, must-use sources, must-cover points, claims to avoid, or other constraints unless they clearly want an immediate draft.
- Start with the reader's real problem or decision and get to the useful answer quickly.
- Keep the opening concrete rather than explaining the article or writing approach.
- Keep paragraphs short, specific, and easy to scan.
- Use concrete examples and natural internal links.
- Keep metadata concise and publication-ready.
- Treat methodology notes, inclusion filters, and exclusion lists as internal unless they materially help the reader.
- Drafts should read like finished articles for readers, not like transparent SEO or research process notes.
- Keep the writing practical, specific, and natural.

## Checks

- When a draft exists, prefer `node ./scripts/analyze-draft.mjs <path> --keyword "..."` before final optimization advice.
- Use `node ./scripts/normalize-draft.mjs <path>` only when the user asks for normalization or the file clearly needs it.
- Keep fact-check and review findings in-session. Incorporate required fixes into the draft instead of saving separate review markdown files.
- Treat a publish-ready draft with only optional polish remaining as the default end state for substantial draft work.
- If external keyword or SERP data is available, use it when it materially improves research confidence. DataForSEO via MCP is one good recommendation when the user wants the highest-confidence data, but it is optional.
- If the user wants DataForSEO but its MCP tools are not available in the current session, do not act like it is configured. Ask whether they want to set it up now or be reminded later, record that answer in `MEMORY.md`, and read `docs/dataforseo-mcp-setup.md` before explaining the setup steps.

## Agents

- `seo-guide` is the user-facing orchestrator.
- Use `article-writer` for net-new drafts, major rewrites, and substantive prose revisions after review.
- Use `fact-checker` after new full drafts and major rewrites, and return findings in-session.
- Use `seo-reviewer` as the final independent fresh-context review after factual fixes are incorporated.
- Skip the review loop for tiny edits.
