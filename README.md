# SEO Workbench

SEO Workbench is a small, OpenCode-native content operations workspace for research, drafting, rewriting, and optimization.

It intentionally avoids the complexity of the original SEO Machine:

- no Python
- no hidden agent chains
- no Claude-specific `.claude` conventions
- no mandatory CMS integration
- no analytics vendor lock-in

The core idea is simple:

1. Research a topic into a structured brief.
2. Write or rewrite an article from that brief.
3. Run a lightweight JS analyzer for deterministic checks.
4. Improve the draft explicitly, not through hidden automation.

## Structure

```text
seo-workbench/
  AGENTS.md
  MEMORY.md
  .opencode/
    commands/
    agents/
  context/
  templates/
  scripts/
  lib/analyzers/
  research/
  drafts/
  review-required/
  published/
```

## OpenCode Usage

Run OpenCode from this directory if you want these commands and rules to apply:

```bash
cd seo-workbench
opencode
```

This workspace defaults to a friendly `seo-guide` primary agent and hides the standard `build` and `plan` agents to keep the experience simpler while the workflow is still taking shape.

If a DataForSEO MCP server is available in your OpenCode session, the guide can use it as a keyword and SERP data provider for things like search volume, competition or difficulty signals, and related query research. That can lead to better informed keyword decisions, but the workflow still works without it.

Available commands:

- `/onboarding`
- `/whats-next`
- `/research <topic>`
- `/write <topic or brief path>`
- `/rewrite <existing article path>`
- `/optimize <draft path>`
- `/publish <draft path>`

`/onboarding` is the best place to start. It helps fill in company context, brand voice, target keywords, and an optional DataForSEO setup decision without making the user answer every strategy question from scratch.

## JS Utilities

These scripts replace the most useful deterministic Python checks from SEO Machine.

Analyze a draft:

```bash
node ./scripts/analyze-draft.mjs ./drafts/example.md --keyword "best seo workflow"
```

Normalize punctuation and invisible characters:

```bash
node ./scripts/normalize-draft.mjs ./drafts/example.md
```

## What To Customize First

Before using the workspace for real content, update:

- `context/site-profile.md`
- `context/brand-voice.md`
- `context/target-keywords.md`
- `context/user-notes.md` if you want to save durable preferences or reminders for future sessions

Optional advanced setup:

- `context/internal-links.md`

The easiest way to do that is to start OpenCode in this folder and run `/onboarding`.

## Design Principles

- Keep orchestration in commands and docs, not hidden prompt magic.
- Prefer explicit files as outputs for every stage.
- Use subagents for focused review only.
- Keep integrations optional and replaceable.
- Favor a small number of excellent workflows over a large number of half-automated ones.
