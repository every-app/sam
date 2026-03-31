# Exa Setup For OpenCode

Use this guide when search is failing in OpenCode or the Exa tools are missing in this workspace.

## What is happening

- OpenCode does not ship with native web search.
- In this workspace, Sam uses Exa through MCP for web search, code search, and page crawling.
- The checked-in `opencode.jsonc` uses Exa's shared free remote MCP endpoint so search works out of the box for many users.
- If searches start failing, the most likely cause is that the shared free limit has been exhausted or your current Exa access is rate limited.

## Recommended fix

1. Create an Exa account.
2. Generate your own API key.
3. Export `EXA_API_KEY` before launching OpenCode.
4. Use your key in a personal OpenCode config override, or update the project config if that is what you want.
5. Restart OpenCode and try the search again.

## Expected usage

- Exa provides some free usage without requiring an account.
- After signup, Exa also gives new users about `$10` of free usage.
- If you are mainly using Exa for Sam, you will probably never go through that free usage.

## Current workspace config

This repository enables Exa in `opencode.jsonc` with the shared endpoint:

```jsonc
{
  "mcp": {
    "exa": {
      "type": "remote",
      "url": "https://mcp.exa.ai/mcp",
      "enabled": true
    }
  }
}
```

## Personal API key setup

The safest upgrade path is to keep the shared repo config as-is and add your own authenticated Exa config in your personal OpenCode config.

OpenCode config files are merged, so a personal override can replace the URL locally without changing the checked-in project file.

Use this URL when you want OpenCode to send your own Exa API key:

```jsonc
{
  "mcp": {
    "exa": {
      "type": "remote",
      "url": "https://mcp.exa.ai/mcp?exaApiKey={env:EXA_API_KEY}",
      "enabled": true
    }
  }
}
```

You can place that in `~/.config/opencode/opencode.json` or another local OpenCode config override.

## Export the API key

macOS/Linux:

```bash
export EXA_API_KEY="your_exa_api_key"
opencode
```

Windows PowerShell:

```powershell
$env:EXA_API_KEY = "your_exa_api_key"
opencode
```

If OpenCode is already running, restart it after exporting the variable.

## Where to get the key

- Create or sign in to your Exa account.
- Open the Exa dashboard.
- Create or copy an API key for your account.

Reference docs:

- Exa MCP docs: <https://docs.exa.ai/docs/reference/exa-mcp>
- Exa pricing: <https://exa.ai/pricing>
- OpenCode MCP docs: <https://dev.opencode.ai/docs/mcp-servers>

## What Sam should say when search fails

If search tools are erroring in OpenCode, Sam should explain:

- OpenCode does not have native search built in.
- This workspace uses Exa for search.
- The shared free Exa limit is the likely reason for the failure.
- The user should follow this doc to add their own Exa account and API key.
