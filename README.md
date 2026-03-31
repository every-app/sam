# Sam - AI Content Writing

Sam is the best AI content writer. Sam is a minimal, customizable and extendable agent that works with any model. Sam does keyword research, find sources and writes content that is actually good for your blog or website.

Agents built on Claude Code all sound like Claude. OpenAI's GPT 5.4 is my preferred model for writing. GPT 5.4 actually changes its voice based on your preferences and doesn't have the tell-tale sentence structure of Claude. 

## Who is this for?
- SEOs & Content Writers - Get more leverage by using the best available model to write drafts that you don't need to babysit or throw out.
- Founders - Writing content from scratch is extremely tedious. If you're too early to pay a professional, Sam is the next best option for starting to rank for SEO terms relevant to your business.

<img width="auto" height="400" alt="image" src="https://github.com/user-attachments/assets/0a486c47-32df-43e0-81f4-1971574a5871" />

## What's different?
- Model Agnostic - Supports OpenCode so that you can use any model including GPT 5.4. It also works with Claude Code.
- Simple - There are no slash commands or skills. There is a "SEO Guide" agent which walks you through the [Core Workflows](#core-workflows). This agent knows to review all writing against your brand's voice. We provide a minimal agent that is really good at the core research and writing flow which you can customize and extend. 
- Customizable - Sam grows with you. If you want to add slash commands, skills, or MCPs to integrate with data provider or publishing platforms, just ask the Agent how to update the code to achieve this.

## Quickstart
### Prerequisites
- A coding agent subscription.
	- I recommend a ChatGPT Plus or Pro subscription since GPT 5.4 is my preferred model for writing: https://chatgpt.com/#pricing
- Claude Code or OpenCode
	- If you want to use GPT 5.4, use OpenCode. OpenCode is similar to Claude Code, but open source and better. If you want to use a alternative harness, just ask your coding agent to port the repo to support it.
	- Sam will still work great with Claude Code.

### Setup
 1. Run the below commands to clone and this project and open it with your coding agent (it will assume the role of "SEO Guide".
 2. Say "hi" and the agent will talk you through onboarding

```
# Clone the project
git clone ...

# Switch to the directory
cd openseo-agent

# Open the agent
opencode 
# Or, run `claude`
```

## Core Workflows
The guiding principle is that Sam should just work without you needing to "learn how to use it". If you don't know what to do next, just ask what your options are. Get started just by saying "hi".
- Simple Onboarding - No slash commands or skills. Sam will walk you through getting set up via natural language. Just enter your website and the agent will scrape it to understand your company's positioning and brand voice. It will save this as reference for all future research and content.
- Research - Tell Sam content ideas you have or ask it to suggest what to write after doing research. Connect arbitrary MCPs such as DataForSEO so that it has access to the highest quality data for making recommendations. It will use web search and scraping to understand what is already written on these topics. 
- Writing - Tell Sam what you want it to write. It will research the topic, write a draft, then trigger subagents to review that draft for 1. quality 2. fact checking and sourcing, then apply the fixes. This loop is much slower than other agents, but its goal is to be set it and forget, aiming for something high quality on the first attempt. 

