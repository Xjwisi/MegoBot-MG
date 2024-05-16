import fetch from "node-fetch"

let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
    let query = "يعم كيف بتخيلك انا ضيف شي بحط مخيلتي به حتي اطلعه باحسن شكلي\nهينا عممتككك";
    let text;

    if (args.length >= 1) {
        text = args.slice(0).join(" ");
        m.reply(`شوف الصوره ال انا هعملها "${text}"...`);
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
        m.reply(`هستخدم الكلام ده, "${text}", هعملك احلي صوره...`);
    } else throw query;

    try {
        m.reply("استني اعملك صوره... 🧙‍♂️");
        await Draw(text).then((img) => {
            conn.sendFile(m.chat, img, text, `*[ ده ال عرفت اعمله 👈🏻👉🏻 ]*\n"${text}"`, m);
        });
    } catch (e) {
        throw 'اسفه لم استطع انشاء صورة. 🥺';
    }
}

handler.help = ["imagine"];
handler.tags = ["ai"];
handler.command = /^تخيلي|تخيلى|ارسم$/i;

export default handler;

async function Draw(prompt) {
    const Blobs = await fetch(
        "https://api-inference.huggingface.co/models/prompthero/openjourney-v2",
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer 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",
            },
            body: JSON.stringify({ inputs: prompt }),
        }
    ).then((res) => res.blob());

    const arrayBuffer = await Blobs.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    return buffer;
}