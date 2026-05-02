import type { Client } from 'discord.js';
import { readdirSync } from 'fs';
import { join } from 'path';

export function register(client: Client<boolean>, dir: string) {
    const eventsPath = join(__dirname, dir);
    const files = readdirSync(eventsPath).filter((file) => file.endsWith('.ts'));

    console.log(`[Zuko.js] registering events {${files}} in ${eventsPath}`);

    for(const file of files) {
        const path = join(eventsPath, file);
        const event = require(path);
        if(event.once) {
            client.once(event.event.event, event.event.execute);
        } else {
            client.on(event.event.event, event.event.execute);
        }
        console.log(`[Zuko.js] registered event ${file}`)
    }
}
