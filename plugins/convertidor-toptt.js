import { toPTT } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `[⚡]⌯ رد عــلي الــفــيـدو او الـاغــنـيـه لــتــحـويــلـها الــي ريــكــورد`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw '[⚡]⌯ حــدث خـــطــأ اثــنـــاء تــنــزيــل الــفــديــو'
if (!media && !/audio/.test(mime)) throw '[⚡]⌯ حــدث خـــطــأ اثــنـــاء تــنــزيــل الــاغــنــيـة'
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '[⚡]⌯ حــدث خـــطــأ اثــنـــاء تــحــويــل الــاغــنــيـة'
if (!audio.data && !/video/.test(mime)) throw '[⚡]⌯ حــدث خـــطــأ اثــنـــاء تــحــويــل الــفــديــو'
let aa = conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })
if (!aa) return conn.sendMessage(m.chat, { audio: { url: media }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
handler.help = ['Shadow']
handler.tags = ['Shadow']
handler.command = /^ل(ريك|ريكورد)$/i
export default handler
