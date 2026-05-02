import {Client, GatewayIntentBits, Events, MessagePayload} from 'discord.js';
import { checkAndGetEnv } from "./utils";
import { register } from './event.controller';

console.log("Starting Zuko.js!");

const TOKEN = checkAndGetEnv("TOKEN");

export const client = new Client({intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.MessageContent, 
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
]});

try {
    register(client, './events/');
} catch(err) {
    console.error('[Zuko.js] Error while registering events: ', err);
}


client.login(TOKEN);





