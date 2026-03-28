---
description: Review a draft and produce an optimization report
agent: seo-reviewer
subtask: true
---

Optimize the draft at `$ARGUMENTS`.

Requirements:

- Read the draft.
- Read only the relevant context files.
- Run `node ./scripts/analyze-draft.mjs $ARGUMENTS` when possible.
- Produce a practical optimization report.
- Recommend specific fixes for title, description, structure, keyword placement, links, and readability.
- Save the report to `review-required/<draft-slug>-optimization-<YYYY-MM-DD>.md`.

Use `templates/optimization-report.md` as the report shape.

Do not edit the draft unless the user explicitly asks for revisions after the report.
