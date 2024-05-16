/* By https://github.com/ALBERTO9883/NyanCatBot-MD */
import fetch from 'node-fetch';
import {sticker} from '../lib/sticker.js';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗] ابعت لينك الاستيكرات مثل: ${usedPrefix + command}* https://getstickerpack.com/stickers/flork-memes-4-1`;
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
    await m.reply('*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝚁𝙽𝚃𝙰𝚁𝙻𝙾*');
  }
};
handler.command = /^استيكر-تنزيل$/i;
export default handler;
// const delay = time => new Promise(res => setTimeout(res, time))
import axios from 'axios';
import cheerio from 'cheerio';

var handler = async (m, { conn, args }) => {
  if (!args[0]) {
    throw 'وين رابط الفديو عمو q(≧▽≦q)';
  }

  try {
    await conn.reply(m.chat, 'انتظر لحظة يا اخ/ت جاري تنزيل الفديو o(*￣▽￣*)ブ', m);

    const tiktokData = await downloadTikTok(args[0]);

    if (!tiktokData) {
      throw 'فشل التنزيل (_　_)。゜zｚＺ';
    }

    const videoURL = tiktokData.video.noWatermark;

    const videoURLWatermark = tiktokData.video.watermark;

    const ppTiktok = tiktokData.author.avatar;

    const infonya_gan =`العنوان: ${tiktokData.title}\nتاريخ الرفع: ${tiktokData.created_at}\n\الحالة:\n=====================\nاللايكات = ${tiktokData.stats.likeCount}\nالكومنتات = ${tiktokData.stats.commentCount}\nالشير = ${tiktokData.stats.shareCount}\nالمشاهدات = ${tiktokData.stats.playCount}\nالحفظ = ${tiktokData.stats.saveCount}\n=====================\n\nحساب: ${tiktokData.author.name} (${tiktokData.author.unique_id} - https://www.tiktok.com/@${tiktokData.author.unique_id}) \nالبايو: ${tiktokData.author.signature}\nالاغنية: ${tiktokData.music.play_url}\nالجودة: ${tiktokData.video.ratio}\nصورة البروفايل: ${ppTiktok}`;

    if (videoURL || videoURLWatermark) {
      await conn.sendFile(m.chat, ppTiktok, 'profile.png', 'جبتك صوره البروفايل o(*￣▽￣*)ブ', m);
      await conn.sendFile(m.chat, videoURL, 'tiktok.mp4', `اتفضل الفديو\n\n${infonya_gan}`, m);
      setTimeout(async () => {
        await conn.sendFile(m.chat, videoURLWatermark, 'tiktokwm.mp4', `*الفديو بالعلامة المائية*\n\n${infonya_gan}`, m);
        conn.reply(m.chat, "•⩊• هيناا عمممتكك ૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა\nما تنسي تشكر بابي شادو ₍^ >ヮ<^₎", m); 
      }, 5000);


    } else {
      throw 'لا توجد روابط فيديو متاحة';
    }
  } catch (error) {
    conn.reply(m.chat, `Error: ${error}`, m);
  }
};

handler.help = ['S H A D O W'].map((v) => v + ' <url>');
handler.tags = ['S H A D O W'];
handler.command = /^(تيكتوك|تيك)$/i;

export default handler;

async function downloadTikTok(url) {
  // 
  let tiklydownAPI = `https://api.tiklydown.eu.org/api/download?url=${url}`;
  try {
    let response = await axios.get(tiklydownAPI);
    return response.data;
  } catch (error) {
    // 
    return tiktokdl(url);
  }
}

async function tiktokdl(url) {
  if (!/تيكتوك/.test(url)) {
    throw 'Invalid TikTok URL!';
  }

  const gettoken = await axios.get('https://tikdown.org/id');
  const $ = cheerio.load(gettoken.data);
  const token = $('#download-form > input[type=hidden]:nth-child(2)').attr('value');
  const param = {
    url: url,
    _token: token,
  };

  const { data } = await axios.request('https://tikdown.org/getAjax?', {
    method: 'post',
    data: new URLSearchParams(Object.entries(param)),
    headers: {
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36',
    },
  });

  var getdata = cheerio.load(data.html);

  if (data.status) {
    return {
      status: true,
      thumbnail: getdata('img').attr('src'),
      video: getdata('div.download-links > div:nth-child(1) > a').attr('href'),
      audio: getdata('div.download-links > div:nth-child(2) > a').attr('href'),
    };
  } else {
    return {
      status: false,
    };
  }
}
