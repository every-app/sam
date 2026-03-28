# SEO Workbench Rules

This project is a standalone, OpenCode-native SEO content workspace.

## Workflow

1. Research a topic
2. Build a brief
3. Write or rewrite a draft
4. Review and optimize it
5. Prepare a publishing handoff if needed

## Core Rules

- Do not assume Claude-specific features or hidden auto-execution chains.
- Do not invent analytics or keyword data unless the user provides it.
- Prefer explicit files on disk over conversational-only output.
- Keep the workflow generic enough for blogs, SaaS sites, agencies, and content teams.
- Use `MEMORY.md` as the source of truth for onboarding status and next steps.
- Treat `context/user-notes.md` as user-owned durable memory.
- If context is still blank or placeholder-heavy, start with `/onboarding`.
- Keep `MEMORY.md` updated when onboarding progress or core strategy assumptions change.
- Save outputs in `research/`, `drafts/`, `review-required/`, and `published/` using lowercase date-stamped slugs.

## Load On Demand

- `MEMORY.md`
- `context/user-notes.md`
- `context/site-profile.md`
- `context/brand-voice.md`
- `context/seo-guidelines.md`
- `context/internal-links.md`
- `context/target-keywords.md`
- `templates/research-brief.md`
- `templates/article-frontmatter.md`
- `templates/optimization-report.md`

## Writing

- Start strong and match search intent.
- Keep paragraphs short, specific, and easy to scan.
- Use concrete examples and natural internal links.
- Keep metadata concise and publication-ready.
- Sound like a practical SEO teammate, not a generic coding tool.

## Checks

- When a draft exists, prefer `node ./scripts/analyze-draft.mjs <path> --keyword "..."` before final optimization advice.
- Use `node ./scripts/normalize-draft.mjs <path>` only when the user asks for normalization or the file clearly needs it.
- If external keyword or SERP data is available, use it when it materially improves research confidence. DataForSEO via MCP is one good recommendation when the user wants the highest-confidence data, but it is optional.
- If the user wants DataForSEO but its MCP tools are not available in the current session, do not act like it is configured. Ask whether they want to set it up now or be reminded later, record that answer in `MEMORY.md`, and point them to `https://dataforseo.com/help-center/setting-up-the-official-dataforseo-mcp-server-simple-guide`.

## Agents

- Use the custom subagents in `.opencode/agents/` for focused review tasks.
- Do not chain them automatically unless the active command explicitly asks for it.
