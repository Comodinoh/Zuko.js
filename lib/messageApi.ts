import sharp from "sharp";


export class MessageGenerator {
    constructor(images: string[], messages: RandomMessage[]) {
        this.images = images;
        this.messages = messages;
    }

    
    async loadImagesToCache() {
        if(!this.images) return;
        let i = 0;
        for(const img of this.images) {
            const res = await fetch(img);
            const arr = await res.arrayBuffer(); 
    
            const tbuf = await sharp(Buffer.from(arr))
                            .webp({quality:  75})
                            .toBuffer();
            this.imageCache.set(img, tbuf);
            i++;
        }
    }


    getRandomImage() {
        return this.images![Math.floor(Math.random()*(this.images!.length-1))];
    }
    
    getRandomImageFromMessage(message: RandomMessage) {
        const nr = Math.round(Math.random()*(message.allowedImages!.length-1));
    
        return this.images![message.allowedImages![nr]!];
    
    }
    
    getRandomMessage(): RandomMessage {
        const random = Math.round(Math.random()*(this.messages.length-1));
    
        const message = this.messages[random];
    
        return message!;
    }

    images: string[] | undefined;
    messages: RandomMessage[];
    imageCache: Map<string, Buffer> = new Map();
};

export const nameMessageGenerator: MessageGenerator = new MessageGenerator(
    [
        "https://res.cloudinary.com/dosnqe8ft/image/upload/v1777748839/ebe8a73353b3775cfdcb7b90eb76cb6b_kzqyov.png",
        "https://res.cloudinary.com/dosnqe8ft/image/upload/v1777754760/d9b06f693732052928f2f562167263cb_yeigwk.png",
        "https://res.cloudinary.com/dosnqe8ft/image/upload/v1777754803/c5d02ff66309903e7c2322daf0f76e1c_mavmea.png",
        "https://res.cloudinary.com/djp9ziyn6/image/upload/v1777817162/4b3e90f7169b711ccc3219b8bc47871b_1_rdiqj6.jpg"
    ],
    [
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
    	    content: "Adri are branza la sub brat",
        }
    ],
)

type RandomMessage = {
    allowedImages: number[] | undefined,
    content: string,
};




