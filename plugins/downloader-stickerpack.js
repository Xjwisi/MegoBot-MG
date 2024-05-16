import fetch from 'node-fetch';
import {sticker} from '../lib/sticker.js';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw  `[⚡]⌯ اسـتـخـدامــك خــاطـئ\n[⚡]⌯ مــثــال :\n⌯ ${usedPrefix + command}* https://getstickerpack.com/stickers/shadow-bot`;
  try {
    const url = text;
    const res = await fetch(`https://api.akuari.my.id/downloader/stickerpack?link=${url}`);
    const json = await res.json();
    for (const data of (json.result || json)) {
      const stikers = await sticker(false, data, global.packname, global.author);
      conn.sendFile(m.chat, stikers, null, {asSticker: true}, m, true, {contextInfo: {'forwardingScore': 200, 'isForwarded': true}}, {quoted: m});
      // await delay(1500)
    }
  } catch {
    await m.reply('[⚡]⌯ حــــدث خـــطــأ');
  }
};
handler.command = /^حزمه|حزم|حزمة$/i;
export default handler;
// const delay = time => new Promise(res => setTimeout(res, time))
