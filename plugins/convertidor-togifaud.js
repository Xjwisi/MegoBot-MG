let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `[⚡]⌯ رد عـــلــي الــفيــديــو الــي انــت عــاوز تــحــولــه لــمــتــحـرك`
const q = m.quoted || m
let mime = (q.msg || q).mimetype || ''
if (!/(mp4)/.test(mime)) throw `[⚡]⌯ صـيـغـه الــمـلـف خــاطـئــه`
m.reply(global.wait)
let media = await q.download()
conn.sendMessage(m.chat, { video: media, gifPlayback: true, caption: '[⚡]⌯ هـــيـــنـــا بـــوت واتـــســاب' }, { quoted: m })}
handler.command = ['لمتحرك']
export default handler
