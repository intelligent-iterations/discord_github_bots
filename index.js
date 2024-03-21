import { Bot } from 'discord_chatbots';
import fs from 'fs/promises';

try {
    const projectConfigData = await fs.readFile('./project_config.json', 'utf8');
    const agentConfigData = await fs.readFile('./agent_config.json', 'utf8');

    const projectConfig = JSON.parse(projectConfigData);
    const agentConfig = JSON.parse(agentConfigData);

    const bots = agentConfig.map(config => new Bot(config, projectConfig));
    bots.forEach(async bot => await bot.initialize());

} catch (e) {
    console.error(e);
}
