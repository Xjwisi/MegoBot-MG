let handler = async (m, { conn, command, text }) => {
if (!text) throw `[❣️]~ ما تنسي المنشن`
 const mentionedUser = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
let beauty = `✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦
⌯ نسبة رجولة『@${mentionedUser.split("@")[0]}』🙆🏻‍♂️ هي ${Math.floor(Math.random() * 100)}%
✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦
`.trim()
m.reply(beauty, null, { mentions: conn.parseMention(beauty) })}
handler.help = ['beauty']
handler.tags = ['fun']
handler.command = /^(رجوله|رجولة)$/
export default handler 