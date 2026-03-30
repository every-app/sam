# SEO Workbench

SEO Workbench is a small, OpenCode-native workspace for research, drafting, revision, and review.

The flow is simple:

1. Research a topic into a brief.
2. Draft or revise the article.
3. Run the JS analyzer for deterministic checks when helpful.
4. Independently review substantial drafts.

## OpenCode Usage

Run OpenCode from this directory:

```bash
cd seo-workbench
opencode
```

Start by sharing your website URL or your first task. If setup is incomplete, `seo-guide` will guide you through it in chat and create the core context files as it goes.

For everything else, ask naturally. Examples:

- "Research open source SEO tools and build a brief."
- "Write a draft for this topic."
- "Tighten this intro and add citations."
- "Review this draft against the context files."

The `seo-guide` agent handles routing. It may use:

- `article-writer` for net-new drafts and major rewrites
- `seo-reviewer` for independent review after full drafts or major restructures

Substantial draft work means a new full draft, a full-article rewrite, or structural changes across multiple sections. Small local edits stay in the main thread.

If external keyword or SERP data is available, the guide can use it to improve research. DataForSEO via MCP is one good option when you want the highest-confidence data, but the workspace does not depend on it. If you want to set it up, see `docs/dataforseo-mcp-setup.md`.

If you already have a live site, setup will read more than the homepage so the first pass is grounded in key pages and representative posts.

## Layout

```text
seo-workbench/
  AGENTS.md
  MEMORY.md
  .opencode/
  docs/
  context/
  templates/
  scripts/
  research/
  drafts/
  review-required/
```

## JS Utilities

Analyze a draft:

```bash
node ./scripts/analyze-draft.mjs ./drafts/example.md --keyword "best seo workflow"
```

Normalize punctuation and invisible characters:

```bash
node ./scripts/normalize-draft.mjs ./drafts/example.md
```

## Customize First

Core context:

- `context/site-profile.md`
- `context/brand-voice.md`
- `context/target-keywords.md`
- `context/user-notes.md` if you want to save durable preferences or reminders for future sessions

Optional advanced setup:

- `context/internal-links.md`

The easiest path is to share your website URL. If you do not have one yet, the guide will ask a few lightweight setup questions.

## Design Principles

- Keep setup and workflow guidance in `seo-guide` plus durable docs, not commands.
- Prefer explicit files as outputs.
- Use `article-writer` and `seo-reviewer` when they materially improve quality.
- Keep integrations optional and replaceable.
