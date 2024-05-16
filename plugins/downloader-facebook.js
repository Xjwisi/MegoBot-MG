import axios from 'axios';
import fetch from 'node-fetch';

var handler = async (m, { args, usedPrefix, command }) => {
    if (!args[0]) {
        throw '⌯ ضيف رابط\n⌯ مثال: .فيس https://www.facebook.com/reel/290555737263767';
    }

    try {
        const url = args[0];
        const headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)"
        };

        const reqOptions = {
            url: `https://tr.deployers.repl.co/fb?u=${url}`,
            method: "GET",
            headers: headersList,
        };

        const response = await axios.request(reqOptions);
        const firstUrls = response.data.map(item => item.split(','));

        const hdMedia = firstUrls[0][0];
        const sdMedia = firstUrls[1][0];

        m.reply(`⌯ يمكنك دعمي من هنا :\nhttps://solo.to/shadowsensei`);

const hdCaption = `⌯ الــفــديــو بــجــوده عــالــيــه\n\n▶︎ ━━━━━━━•──────────── 
      ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻`;
const sdCaption = `⌯ الــفــديــو بــجــوده مـــتــوســطـه\n\n▶︎ ━━━━━━━•──────────── 
      ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻`;

        m.reply('⌯ غير مسئول عن ذنوب ما تشاهده');

        try {
            // 
            const hdFile = await fetch(hdMedia);
            conn.sendFile(m.chat, await hdFile.buffer(), 'video_hd.mp4', hdCaption, m);

            try {
                //
                const sdFile = await fetch(sdMedia);
                conn.sendFile(m.chat, await sdFile.buffer(), 'video_sd.mp4', sdCaption, m);
            } catch {
                // 
            }
        } catch {
            try {
                // 
                const sdFile = await fetch(sdMedia);
                conn.sendFile(m.chat, await sdFile.buffer(), 'video_sd.mp4', sdCaption, m);
            } catch {

                const cap = '[⚡]⌯ فشل تنزيل الفديو';
                conn.sendFile(m.chat, 'facebook.mp4', 'facebook.mp4', cap, m);
            }
        }
    } catch {

       const cap = '[⚡]⌯ فشل تنزيل الفديو';
        conn.sendFile(m.chat, 'facebook.mp4', 'facebook.mp4', cap, m);
    }
};

// 
handler.help = ['S H A D O W'];
handler.tags = ['S H A D O W'];
handler.command = /^(فيسبوك|فيس)$/i;

export default handler;
