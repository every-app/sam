# DataForSEO MCP Setup

Use this guide when a user wants to set up DataForSEO in this workspace.

## What this setup does

It connects OpenCode to DataForSEO so the assistant can use external keyword and SERP data during research.

Typical value:

- search volume context
- competition or difficulty signals
- related keyword ideas
- better confidence when choosing what to target first

## Important status rule

Do not describe DataForSEO as active until its MCP tools are actually available in the current session.

## Recommended assistant behavior

When a user wants DataForSEO setup:

1. Say clearly that it is not configured yet if the MCP tools are not available.
2. Explain that you can help wire the workspace config now.
3. Offer to add the MCP entry to `opencode.jsonc` for them.
4. Explain that they will still need to provide credentials in a local `.env` file.
5. Walk them through getting the API key from DataForSEO.
6. Tell them they can paste the API key into chat and you can create the `.env` file for them.
7. After setup, ask them to restart or reload OpenCode if needed, then confirm whether the MCP tools appear.

## Workspace setup steps

### 1. Add the MCP server config

Add a DataForSEO MCP server entry to `opencode.jsonc`.

If the workspace already has other MCP servers, append the new one instead of replacing anything.

### 2. Create a local `.env` file

The workspace should have a `.env` file with the credentials required by the DataForSEO MCP server.

At minimum, tell the user they will need their DataForSEO API login and API password, or whatever credentials the chosen MCP server expects.

If the user wants help and is comfortable sharing the values in chat, offer to create the `.env` file for them.

### 3. Help the user get their DataForSEO credentials

Walk them through this in plain language:

- Sign in to DataForSEO.
- Open the API dashboard or account access area.
- Copy the API login and API password provided by DataForSEO.
- If they do not have access yet, have them finish account setup and API access first.

If needed, point them to the official setup guide:

<https://dataforseo.com/help-center/setting-up-the-official-dataforseo-mcp-server-simple-guide>

## Suggested wording

- "I can wire the DataForSEO MCP config into this workspace for you."
- "You’ll still need a local `.env` file with your DataForSEO credentials."
- "If you want, paste the API credentials here and I can create the `.env` file for you."
- "If you’d rather do it yourself, I can show you exactly what to paste into `.env`."

## Safety notes

- Treat API credentials as secrets.
- Do not commit `.env` files or credentials to git.
- Avoid writing secrets anywhere except the local `.env` file the user asked for.
