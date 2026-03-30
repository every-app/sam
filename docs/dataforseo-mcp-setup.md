# DataForSEO MCP Setup

Use this guide when a user wants to set up DataForSEO in this workspace.

## What this setup does

It connects the active coding client to DataForSEO so the assistant can use external keyword and SERP data during research.

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
2. If the active runtime is not obvious from the session or repo state, ask one short clarifying question about whether they are using OpenCode or Claude Code before giving setup commands.
3. Explain that you can help wire the workspace config now.
4. Offer to update the runtime-specific config for them.
5. Explain that they will still need to export their credentials in the shell before launching their coding client.
6. Walk them through getting the API login and API password from DataForSEO.
7. Do not ask them to paste secrets into chat unless they explicitly insist.
8. After setup, ask them to restart or reload their coding client if needed, then confirm whether the MCP tools appear.

## Workspace setup steps

### 1. Choose the runtime-specific config target

If the user is in OpenCode, update `opencode.jsonc`.

If the user is in Claude Code, update `.mcp.json`.

If the workspace supports both and the current runtime is unclear, ask which one they are using instead of assuming.

If the workspace already has other MCP servers, append the new one instead of replacing anything.

### 2. OpenCode config

OpenCode supports `{env:VARIABLE_NAME}` substitution, which reads from the actual shell environment.

That means the safest default is to have the user export their DataForSEO credentials before launching OpenCode.

The workspace config belongs in `opencode.jsonc`.

### 3. Claude Code config

Claude Code project MCP servers live in `.mcp.json`.

Claude Code supports `${VAR}` and `${VAR:-default}` expansion inside `.mcp.json`.

For shared repo config, prefer `${DATAFORSEO_USERNAME:-}` and `${DATAFORSEO_PASSWORD:-}` so the file still parses for collaborators who have not exported credentials yet.

After the user exports credentials, have them restart Claude Code and approve the project MCP server through `/mcp` if needed.

### 4. Export the credentials before launching the coding client

Examples:

macOS/Linux

```bash
export DATAFORSEO_USERNAME="your_username"
export DATAFORSEO_PASSWORD="your_api_password"
# Then launch the client you are using.
opencode
# or
claude
```

Windows PowerShell

```powershell
$env:DATAFORSEO_USERNAME = "your_username"
$env:DATAFORSEO_PASSWORD = "your_password"
opencode
# or
claude
```

Windows Command Prompt

```bat
set DATAFORSEO_USERNAME="your_username"
set DATAFORSEO_PASSWORD="your_password"
opencode
# or
claude
```

If their coding client is already running, tell them to restart it after exporting the variables.

### 5. Help the user get their DataForSEO credentials

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
- Remind the user that credentials still need to be exported in their shell before launching OpenCode or Claude Code.
- If the runtime is unclear, ask whether they are using OpenCode or Claude Code before giving setup commands.
- Point the user to <https://app.dataforseo.com/api-access> to find the API username/login and password.
- Advise against pasting credentials into chat.

## Safety notes

- Treat API credentials as secrets.
- Do not commit `.env` files or credentials to git.
- Prefer not asking the user to paste secrets into chat.
