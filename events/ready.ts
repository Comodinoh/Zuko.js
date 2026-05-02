import { Events } from "discord.js"

const event = {
    event: Events.ClientReady,
    once: true,
    execute(client) {
        console.log("Zuko.js is ready!");
    }
}

export {event};
