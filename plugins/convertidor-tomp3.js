import { toAudio } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q || q.msg).mimetype || q.mediaType || ''
if (!/video|audio/.test(mime)) throw `[⚡]⌯ رد عــلـي الــفــديو الــي انــت عــاوز تــحــولـه لــمــقــطـع صــوتـي`
let media = await q.download()
if (!media) throw '[⚡]⌯ حــدث خـــطــأ'
let audio = await toAudio(media, 'mp4')
if (!audio.data) throw '*حدث خطأ في تحويل الفيديو الي صوت*'
conn.sendMessage(m.chat, { audio: audio.data,  mimetype: 'audio/mpeg' }, { quoted: m })
}
handler.alias = ['Shadow']
handler.command = /^ل(صوت|صوتي|اغنيه)$/i
export default handler
