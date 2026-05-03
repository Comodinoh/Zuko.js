import { AttachmentBuilder, Events, Message } from "discord.js"
import { client } from "..";
import { MessageGenerator, nameMessageGenerator, pingMessageGenerator } from "../lib/messageApi";


const event = {
    event: Events.MessageCreate,
    once: false,
    async execute(msg: Message<boolean>) {
        if(msg.author.id == client.user?.id) return;

        if(msg.mentions.has(client.user!)) {
            await msg.reply(pingMessageGenerator.getRandomMessage().content);
            return;
        }

        if(msg.content.toLowerCase() !== 'zuko') return;

        const message = nameMessageGenerator.getRandomMessage();

        const imgUrl = nameMessageGenerator.getRandomImageFromMessage(message)!;

        let mess = await msg.reply(message.content);

        const att = new AttachmentBuilder(nameMessageGenerator.imageCache.get(imgUrl)!, {name: 'zuko.jpg'});

        mess.edit({content: message.content, files: [att]})
    }
}

export {event};

