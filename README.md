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
- A GitHub personal access token.
- At least one Github Repository to create/update issues from


## Quick Start

### Installation
```
git clone https://github.com/intelligent-iterations/discord_github_bots.git
```

## Configuration

### Step 1: Create Configuration Files
Create two JSON configuration files in your project root: 

- **agent_config.json** 
- **project_config.json**

Create these files in your project's root directory. They will store configurations for your bot and project, respectively. These files are added to gitignore to prevent sensitive information from being uploaded to your repository..

### Step 2: Configure Your Files

#### Replace placeholders: 
**token**: This is the Discord bot token, you can obtain it from the Discord Developer Portal

- **agent_config.json**:
 

  ```json
  [
      {
          "name": "Your agent name",
          "token": "discord-bot-token",
          "agentId": "agent-id-from-console",
          "showOpenIssues": true
      }
  ]
  
  

#### Replace placeholders: 
**githubOrg**: The bot is configured to fetch issues from your organization's name specified in project_config.json.

**discordToGithubUsernames**: Map your team members' Discord usernames to their GitHub usernames for better collaboration.

**formatIssueAgentId**: The bot displays only issues assigned to you. Ensure this ID is correctly set to allow the bot to format the issues properly.

**agentId**: Obtain the Agent IDs from the AI response source at LLM Lab. These IDs are crucial for your bots to function properly.
- **project_config.json**:


```json
{
    "githubOrg": "your-org-name",
    "discordToGithubUsernames": {
        "Discord-username": "GitHub-username"
    },
    "formatIssueAgentId": "format-id-from-console",
    "maxMessageCacheLength": 10,
    "iiKEY": "LLM-Lab-api-key",
    "GITHUB_TOKEN": "ghp-your-github-token"
}
```


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


