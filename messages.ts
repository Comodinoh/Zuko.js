import type { Sharp } from "sharp";
import sharp from "sharp";
const images = [
    "https://res.cloudinary.com/dosnqe8ft/image/upload/v1777748839/ebe8a73353b3775cfdcb7b90eb76cb6b_kzqyov.png",
    "https://res.cloudinary.com/dosnqe8ft/image/upload/v1777754760/d9b06f693732052928f2f562167263cb_yeigwk.png",
    "https://res.cloudinary.com/dosnqe8ft/image/upload/v1777754803/c5d02ff66309903e7c2322daf0f76e1c_mavmea.png",
    "https://res.cloudinary.com/djp9ziyn6/image/upload/v1777817162/4b3e90f7169b711ccc3219b8bc47871b_1_rdiqj6.jpg"
];

export var cache: Map<string, Buffer> = new Map();

type RandomMessage = {
    allowedImages: number[],
    content: string,
};

const messages: RandomMessage[] = [
    {
        allowedImages: [0, 1],
        content: "oh oh oh oh oh oh",
    },
    {
        allowedImages: [2],
        content: "meow...",
    },
    {
        allowedImages: [0],
        content: "ʕ⁠ ⁠ꈍ⁠ᴥ⁠ꈍ⁠ʔ",
    },
    {
	allowedImages: [3],
	content: "Adri are branza la sub brat",}
];

export function getRandomImage() {
    return images[Math.floor(Math.random()*(images.length-1))];
}

export function getRandomImageFromMessage(message: RandomMessage) {
    const nr = Math.round(Math.random()*(message.allowedImages.length-1));

    return images[message.allowedImages[nr]!];

}

export function getRandomMessage(): RandomMessage {
    const random = Math.round(Math.random()*(messages.length-1));

    const message = messages[random];

    return message!;
}

export async function loadImagesToCache() {
    let i = 0;
    for(const img of images) {
        const rest = await fetch(img);
        const arr = await rest.arrayBuffer(); 

        const tbuf = await sharp(Buffer.from(arr))
                        .webp({quality:  75})
                        .toBuffer();
        cache.set(img, tbuf);
        i++;
    }
}


