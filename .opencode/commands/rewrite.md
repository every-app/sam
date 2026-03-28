---
description: Rewrite an existing article with better structure and SEO
---

Rewrite the article at `$ARGUMENTS`.

Requirements:

- Read the source file first.
- Preserve any genuinely strong ideas, examples, and useful structure.
- Improve clarity, flow, search-intent alignment, and metadata.
- Save the rewrite to `drafts/<topic-slug>-rewrite-<YYYY-MM-DD>.md` unless the user clearly asks for an in-place edit.
- If the target keyword is clear, run:

`node ./scripts/analyze-draft.mjs <saved-file> --keyword "<primary keyword>"`

- Apply only the most valuable improvements from the analyzer.

Use `templates/article-frontmatter.md` when generating metadata.
