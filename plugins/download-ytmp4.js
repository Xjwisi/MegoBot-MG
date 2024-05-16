import ytdl from 'ytdl-core';
import fs from 'fs';
import os from 'os';

let limit = 500;
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `[⚡]⌯ اســتــخــدام خــاطــئ\n⌯ مــثــال :\n⌯ ${usedPrefix + command} https://youtu.be/PgC6oO2-jH4`;
  if (!args[0].match(/youtu/gi)) throw `⌯ رابـــط خــاطـئ`;

  let chat = global.db.data.chats[m.chat];
  try {
    const info = await ytdl.getInfo(args[0]);
    const format = ytdl.chooseFormat(info.formats, { quality: 'highest' });
    if (!format) {
      throw new Error('⌯ حــدث خــطــأ');
    }

    if (format.contentLength / (1024 * 1024) >= limit) {
      return m.reply(`[⚡]⌯ هـيــنـا تــحـمـيـل يــوتـيـوب\n\n⌯ ⚖️ الــحــجــم : ${format.contentLength / (1024 * 1024).toFixed(2)} مـيـجـا\n⌯ 🎞️ الــجــوده : ${format.qualityLabel}\n\n⌯ حــجــم الـفـيـديـو تــجاوز حــد الــتـنـزيـل وهــو : +${limit} مـيـجـا`);
    }

    const tmpDir = os.tmpdir();
    const fileName = `${tmpDir}/${info.videoDetails.videoId}.mp4`;

    const writableStream = fs.createWriteStream(fileName);
    ytdl(args[0], {
      quality: format.itag,
    }).pipe(writableStream);

    writableStream.on('finish', () => {
      conn.sendFile(
        m.chat,
        fs.readFileSync(fileName),
        `${info.videoDetails.videoId}.mp4`,
        `✼ ••๑⋯❀ يــــوتــــيـــوب ❀⋯⋅๑•• ✼
    ⌯ الـعـنـوان: ${info.videoDetails.title}
    ⌯ الـمـده : ${info.videoDetails.lengthSeconds} ثــانــيــه
    ⌯ الـمـشـاهـدات : ${info.videoDetails.viewCount}
    ⌯ الـنـشـر : ${info.videoDetails.publishDate}
    ⌯ الـرابــط : ${args[0]}
    ⊱─━⊱༻●༺⊰━─⊰`,
        m,
        false,
        { asDocument: chat.useDocument }
      );

      fs.unlinkSync(fileName); // Delete the temporary file
    });

    writableStream.on('error', (error) => {
      console.error(error);
      m.reply('[⚡]⌯ حــدث خــطــأ اثــنــاء التــنــزيــل حــاول مــجــددا');
    });
  } catch (error) {
    console.error(error);
    m.reply('[⚡]⌯ حــدث خــطــأ اثــنــاء الــارســال حــاول مــجــددا');
  }
};

handler.help = ['Shadow'];
handler.tags = ['Shadow'];
handler.command = ['فديو', 'تحميل'];
handler.diamond = false;

export default handler