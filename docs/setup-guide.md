# Setup Guide

Use this guide when workspace setup is incomplete or placeholder-heavy.

## Goal

- get the workspace to good-enough-to-start quickly
- update the core context files as you go
- make reasonable first-pass assumptions, then ask the user to confirm or correct them

## Files To Maintain

- `MEMORY.md`
- `context/user-notes.md`
- `context/site-profile.md`
- `context/brand-voice.md`
- `context/internal-links.md`
- `context/target-keywords.md`

## Good-Enough Threshold

Setup is good enough when `MEMORY.md` is current and the workspace has a usable first pass for:

- company and offer
- audience and content goals
- brand voice and messaging rules
- optional external research data decision
- starter target keywords

`context/internal-links.md` can still be incomplete.

## Setup States

- `Not started`: ask for the website URL first, or offer a few lightweight setup questions if no site exists.
- `In progress`: resume the next unresolved setup item from `MEMORY.md` instead of restarting.
- `Good enough`: stop defaulting to setup and guide the user toward the next useful action.

## Core Flow

1. Read `MEMORY.md` and the main context files first.
2. If setup is already underway, resume instead of restarting.
3. If setup is still mostly blank, explain briefly what setup will help with.
4. Ask whether the user already has a website.
5. If they do, ask for the URL and explain that you can explore the homepage, key pages, and a few representative posts or SEO pages to draft a first pass for company context, audience, voice, and keyword directions.
6. If they do not, switch to a few lightweight setup questions instead.
7. When a site exists, read more than the homepage. Prioritize pages like product, pricing, solutions, about, docs, and 2-5 representative blog posts or landing pages that show positioning, voice, and SEO direction.
8. Work through this order: company and offer, audience and goals, brand voice, optional research data, starter keywords, then optional internal links.
9. If the user chooses DataForSEO, check whether its MCP tools are available in the current session before treating it as active.
10. If DataForSEO is wanted but unavailable, ask a required follow-up: do they want to set it up now, or should you remind them later?
11. Do not move past that choice until you have a clear yes or no answer.
12. Record the user's answer in `MEMORY.md`.
13. If they want to set it up now, read `docs/dataforseo-mcp-setup.md`, ask whether they are using OpenCode or Claude Code if that is not already clear, explain the steps from there, reference `https://app.dataforseo.com/api-access` for finding their API login and password, and make MCP setup the next step instead of jumping straight to research.
14. If they want a reminder later, record that and continue.
15. Update the relevant file after each meaningful answer and keep `MEMORY.md` in sync.
16. Once setup is useful, say so and recommend the next best action, usually researching a topic, creating a brief, or drafting an article.

## Rules

- Keep replies short, friendly, and low-pressure.
- On the first message of a mostly blank setup flow, use a concise welcome that explains you will help set up the OpenSEO Agent by creating a few files to learn the user's brand voice, strategy, and SEO goals.
- Ask one small batch of questions at a time.
- Prefer draft assumptions over broad strategy questions.
- Invite URLs, docs, or existing copy instead of asking the user to retype everything.
- Preserve real user details and replace scaffolding with useful project-specific content.
- Save durable preferences or reminders in `context/user-notes.md`.
- Do not ask "what do you want to rank for?" Propose a first-pass keyword direction and ask for confirmation.
- Treat internal links as optional advanced setup.
- When a website is available, do not rely on the homepage alone.
- Read selectively: use a few representative pages or posts, not the whole site.
- Explain external keyword or SERP data in plain language as optional. If the user wants the highest-confidence data and DataForSEO is available, recommend it and mention the setup and cost tradeoff.
- If the user wants DataForSEO but it is not configured in the current session, do not say it is set up. Ask whether they want to set it up now or be reminded later, and if the runtime is unclear ask whether they are using OpenCode or Claude Code before giving setup commands. Read `docs/dataforseo-mcp-setup.md` before explaining setup, and record both the status and their timing choice in `MEMORY.md`.

## Useful Framing

- "Hi! I'm going to help you get set up with the OpenSEO Agent. We'll create a few files so I can learn your brand voice, strategy, and SEO goals."
- "If you already have a website, send me the URL and I'll draft a first pass from it. If you don't have a website yet, I can ask you a few quick questions instead. What's your website URL?"
- "I'll read the homepage plus a few key pages and representative posts so the first pass is based on more than one page."
- "It sounds like you want DataForSEO, but it is not configured in this session yet. I can walk you through the MCP setup and help wire the workspace config."
- "Do you want to set up DataForSEO now, or should I remind you about it later?"
