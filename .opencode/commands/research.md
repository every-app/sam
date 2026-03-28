---
description: Build an SEO research brief for a topic
---

Research the topic `$ARGUMENTS` and create a practical brief.

Before writing, load only the relevant project context files from `context/`.

Requirements:

- If DataForSEO MCP tools are available, use them for keyword variations, volume or difficulty signals, and SERP pattern research before finalizing the brief.
- If DataForSEO MCP tools are not available, continue with normal web research and judgment.
- Identify primary keyword, secondary keywords, and search intent.
- Summarize likely competitor angles and common SERP patterns.
- Propose a differentiated angle for this project.
- Recommend a concrete outline with H2s and H3s.
- Suggest internal links from `context/internal-links.md` when possible.
- Save the brief to `research/<topic-slug>-<YYYY-MM-DD>.md`.

Use `templates/research-brief.md` as the shape for the output.

Keep the workflow explicit. Do not auto-run other agents unless clearly useful.
