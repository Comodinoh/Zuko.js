import {Client, GatewayIntentBits, Events} from 'discord.js';
import { checkAndGetEnv } from "./utils";

console.log("Starting Zuko.js!");

const TOKEN = checkAndGetEnv("TOKEN");

const client = new Client({intents: [GatewayIntentBits.Guilds]});

client.on("clientReady", (client: Client<true>) => {
    console.log("Zuko.js is ready!");
});

client.login(TOKEN);





