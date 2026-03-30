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
4. Explain that they will still need to export their credentials in the shell before launching OpenCode.
5. Walk them through getting the API login and API password from DataForSEO.
6. Do not ask them to paste secrets into chat unless they explicitly insist.
7. After setup, ask them to restart or reload OpenCode if needed, then confirm whether the MCP tools appear.

## Workspace setup steps

### 1. Add the MCP server config

Add a DataForSEO MCP server entry to `opencode.jsonc`.

If the workspace already has other MCP servers, append the new one instead of replacing anything.

### 2. Export the credentials before launching OpenCode

OpenCode supports `{env:VARIABLE_NAME}` substitution, which reads from the actual shell environment.

That means the safest default is to have the user export their DataForSEO credentials before launching OpenCode.

Examples:

macOS/Linux

```bash
export DATAFORSEO_USERNAME="your_username"
export DATAFORSEO_PASSWORD="your_api_password"
opencode
```

Windows PowerShell

```powershell
$env:DATAFORSEO_USERNAME = "your_username"
$env:DATAFORSEO_PASSWORD = "your_password"
opencode
```

Windows Command Prompt

```bat
set DATAFORSEO_USERNAME="your_username"
set DATAFORSEO_PASSWORD="your_password"
opencode
```

If OpenCode is already running, tell the user to restart it after exporting the variables.

### 3. Help the user get their DataForSEO credentials

Walk them through this in plain language:

- Sign in to DataForSEO.
- Open the API access page: <https://app.dataforseo.com/api-access>
- Copy the API username/login and API password shown there.
- If they do not have access yet, have them finish account setup and API access first.

If needed, point them to the official setup guide:

<https://dataforseo.com/help-center/setting-up-the-official-dataforseo-mcp-server-simple-guide>

When explaining this to the user, prefer the API access page for actually finding their username and password, and use the official MCP guide as supporting setup reference.

## What To Cover

- Offer to wire the DataForSEO MCP config into the workspace if the user wants help.
- Remind the user that credentials still need to be exported in their shell before launching OpenCode.
- Point the user to <https://app.dataforseo.com/api-access> to find the API username/login and password.
- Advise against pasting credentials into chat.

## Safety notes

- Treat API credentials as secrets.
- Do not commit `.env` files or credentials to git.
- Prefer not asking the user to paste secrets into chat.
