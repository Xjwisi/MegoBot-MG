import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `⌯ ضيف رابط الفديو الي انت عاوز تحمله`;
  m.reply(wait);

  let res;
  try {
    res = await fetch(`https://inrl-web.onrender.com/api/insta?url=${text}`);
  } catch (error) {
    throw `حدث خطأ: ${error.message}`;
  }

  let api_response = await res.json();
  if (!api_response || !api_response.result || api_response.result.length === 0) {
    throw `[⚡]⌯ حدث خطأ اثناء تحميل الفديو`;
  }

  let cap = `غــيــر مــســئــول عــمــا تــشــاهــده\n\n▶︎ ━━━━━━━•──────────── 
      ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻`;

  conn.sendFile(m.chat, api_response.result[0], 'instagram.mp4', cap, m);
}

handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^(انستا|انستغرام|انستجرام|انستاغرام)$/i

export default handler
