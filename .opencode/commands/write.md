---
description: Write a new article draft from a topic or brief
---

Write a draft based on `$ARGUMENTS`.

Before writing, load the relevant files from `context/` and use `templates/article-frontmatter.md` for the metadata block.

Requirements:

- If `$ARGUMENTS` points to a file in `research/`, use it as the source brief.
- Otherwise, infer a topic brief from the argument before drafting.
- Save the result to `drafts/<topic-slug>-<YYYY-MM-DD>.md`.
- Include concise publication metadata at the top.
- Match search intent and avoid filler.
- Keep product mentions contextual, not forced.

After saving, run the JS analyzer on the draft if the primary keyword is known:

`node ./scripts/analyze-draft.mjs <saved-file> --keyword "<primary keyword>"`

Use the results to make one quick improvement pass, then stop.

Do not trigger hidden review pipelines.
