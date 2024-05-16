import axios from 'axios';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `[⚡]⌯ مثال للاستخدام : ${usedPrefix + command} شادو من حديقه الظل`;

  const maxImages = 10; // BY S H A D O W
  const apiUrl = `https://tr.deployers.repl.co/pinhd?q=${encodeURIComponent(text)}`;

  try {
    const response = await axios.get(apiUrl);
    const imgUrls = response.data.pins;

    for (let i = 0; i < Math.min(maxImages, imgUrls.length); i++) {
      const imageUrl = imgUrls[i];

      conn.sendFile(m.chat, imageUrl, 'pinterest.jpg', `
⌯ ${text}
      `.trim(), m);
    }
  } catch (error) {
    console.error('[⚡]⌯ حدث خطأ اثناء تحميل الصور :', error);
    conn.reply(m.chat, '[⚡]⌯ حدث خطأ اثناء تحميل الصور', m);
  }
};

handler.help = ['S H A D O W'];
handler.tags = ['S H A D O W'];
handler.command = /^(بنترست|بين|صور|صوره)$/i;

export default handler;
