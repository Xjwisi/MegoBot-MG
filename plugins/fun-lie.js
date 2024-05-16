let handler = async (m, { conn, command, text }) => {
 if (!text) throw `[❣️]~ ما تنسي المنشن`
 const mentionedUser = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
  let bty = `✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦
⌯ نسبة كذب『@${mentionedUser.split("@")[0]}』🗿 هي ${Math.floor(Math.random() * 100)}%
✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦
`.trim()
m.reply(bty, null, { mentions: conn.parseMention(bty) })}
handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^(كذب)$/
export default handler 