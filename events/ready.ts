import { Events } from "discord.js"
import { nameMessageGenerator} from "../messages";

const event = {
    event: Events.ClientReady,
    once: true,
    async execute(client) {
        await nameMessageGenerator.loadImagesToCache();
        console.log("Zuko.js is ready!");
    }
}

export {event};
