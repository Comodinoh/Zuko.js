import { Events, Message, MessagePayload } from "discord.js"
import { client } from "..";

const event = {
    event: Events.MessageCreate,
    once: false,
    execute(msg: Message<boolean>) {
        if(msg.author.id == client.user?.id) return;
        if(!msg.content.toLowerCase().includes('zuko')) return;
        msg.reply(new MessagePayload(msg, {content: "Hello! Zuko here!"}));
    }
}

export {event};

