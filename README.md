# discord_github_bots
A package for developing Discord AI bots capable of managing GitHub issues.

## Features
- Create GitHub issues from Discord messages
- Update existing GitHub issues based on Discord activity
- Cache messages for context-aware interactions
- AI integration for natural language processing

## Usage

To interact with GitHub issues directly from Discord, include specific keywords in your messages:
- To **create a new issue**, use `createissue`.
- To **update an existing issue**, use `updateissue`.

**Note:** The detection of these keywords is not case-sensitive, meaning you can use `CREATEISSUE`, `createIssue`, `UPDATEISSUE`, or any other case variations, and the bot will still recognize your command.

## Prerequisites
- An account with [LLM Lab](https://intelligentiterations.com)
- A Discord bot token
    - your bot added to a Discord server with the necessary permissions.
- a GitHub personal access token.


## Quick Start

### Configuration
__Set Up Environment Variables__
1. Create a .env file in your project root.
2. Add the following lines, replacing your_value_here with your actual credentials:
```
II_KEY= <your_ii_key> //you can get this in user settings
GITHUB_TOKEN= <your_github_token>
DISCORD_BOT_TOKEN= <your_discord_bot_token>
```
__index.js__

This is where the bots are being initialized. Ensure to replace the placeholders with your actual data.
- **agentID**: Obtain the Agent IDs from the AI response source at [LLM Lab](https://intelligentiterations.com). These IDs are crucial for your bots to function properly.

- **updateIssuesBotId**: Similar to `agentID`, but this agent focuses on formatting issues rather than user interaction. More details can be found in the AI Setup section below.

- **githubOrg**: The bot is configured to fetch issues from your organization's name specified in `projectConfig`. Ensure this is correctly set to allow the bot to access the relevant issues.

- **discordToGithubUsernames**: The bot displays only issues assigned to you. Ensure you map your team members' usernames to their Discord usernames for them to see their assigned issues, facilitating better collaboration.


## AI Setup

To use this SDK, you'll need to provides at least 1 agentId and updateIssuesBotId necessary for the SDK's AI configutation. 

## Update Issues Agent

> **Important:** This agent is responsible for formatting the data for the GitHub API. You can configure your agent with the following values in the lab:

- **Model**: `mistal-small`

#### Prompt Configuration:

```plaintext
Update the issue now by replying with one of these fields:name, description, assignees, status (open, closed), projects
and the updated value next to it in JSON format

Example format for assistant reply for the github API:{“name”: “chat list out of order”}

be brief and abide exactly by the provided options for possible values.
```


the ID of this agent with be passed as the value for updateIssuesBotId

### User facing agent
This will be the agent that will talk to your users, you can create however many you want and add them to the discordBotConfig list! 

Just get the agent id from the agent lab and assign it as the value for agentId


### Running Your Bot
__With Docker__

If you're using Docker, you can start your bot using the start.sh script. This script should build your Docker image and run your bot instance inside a Docker container. Ensure start.sh is executable:
```
chmod +x start.sh
./start.sh
```
__Without Docker__

To run your bot directly without Docker, simply start your application:
```
node main.js
```
replace main.js with whatever file which is initializing your Bot


