import { Attachment, AttachmentBuilder, Events, Message, MessagePayload, MessageReplyOptions, TextDisplayBuilder, ThumbnailBuilder, MessageFlags, SectionBuilder, MediaGalleryBuilder, FileBuilder } from "discord.js"
import { client } from "..";
import { cache, getRandomMessage, getRandomImage, getRandomImageFromMessage } from "../messages";


const event = {
    event: Events.MessageCreate,
    once: false,
    async execute(msg: Message<boolean>) {
        if(msg.author.id == client.user?.id) return;

        if(msg.mentions.has(client.user!)) {
            await msg.reply('Hello! Zuko here!')
            return;
        }

        if(msg.content.toLowerCase() !== 'zuko') return;

        const message = getRandomMessage();

        const imgUrl = getRandomImageFromMessage(message)!;

        let mess = await msg.reply(message.content);

        const att = new AttachmentBuilder(cache.get(imgUrl)!, {name: 'zuko.jpg'});

        mess.edit({content: message.content, files: [att]})
    }
}

export {event};

