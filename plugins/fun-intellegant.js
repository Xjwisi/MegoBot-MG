let handler = async (m, { conn, command, text }) => {
 if (!text) throw `[❣️]~ ما تنسي المنشن`
   const mentionedUser = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
  let beXaauty = `✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦
⌯ نسبة ذكاء『@${mentionedUser.split("@")[0]}』 ${Math.floor(Math.random() * 100)}% 👀
✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦`.trim()
m.reply(beXaauty, null, { mentions: conn.parseMention(beXaauty) })}
handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^(ذكاء)$/
export default handler 