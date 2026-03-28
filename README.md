# SEO Workbench

SEO Workbench is a small, OpenCode-native workspace for research, drafting, rewriting, and optimization.

The flow is simple:

1. Research a topic into a brief.
2. Write or rewrite a draft.
3. Run the JS analyzer for deterministic checks.
4. Optimize the draft and prepare a handoff if needed.

## OpenCode Usage

Run OpenCode from this directory:

```bash
cd seo-workbench
opencode
```

Start with `/onboarding` unless you want to jump straight into a task.

Available commands:

- `/onboarding`
- `/whats-next`
- `/research <topic>`
- `/write <topic or brief path>`
- `/rewrite <existing article path>`
- `/optimize <draft path>`
- `/publish <draft path>`

If external keyword or SERP data is available, the guide can use it to improve research. DataForSEO via MCP is one good option when you want the highest-confidence data, but the workspace does not depend on it.

If you already have a live site, onboarding will read more than the homepage so the first pass is grounded in key pages and representative posts.

## Layout

```text
seo-workbench/
  AGENTS.md
  MEMORY.md
  .opencode/
  context/
  templates/
  scripts/
  research/
  drafts/
  review-required/
  published/
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

The easiest path is to run `/onboarding`.

## Design Principles

- Keep orchestration in commands and docs, not hidden prompt magic.
- Prefer explicit files as outputs.
- Use subagents for focused review only.
- Keep integrations optional and replaceable.
