import { Events } from "discord.js"
import { loadImagesToCache } from "../messages";

const event = {
    event: Events.ClientReady,
    once: true,
    async execute(client) {
        await loadImagesToCache();
        console.log("Zuko.js is ready!");
    }
}

export {event};
