let handler = async (m, { conn, command, text }) => {
 if (!text) throw `[❣️]~ ما تنسي المنشن`
 const mentionedUser = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
let user = m.sender;
  let love = `✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦
⌯ نسبة حب『@${mentionedUser.split("@")[0]}』لك هي ${Math.floor(Math.random() * 100)} ✨
✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) }, m)
         return conn.sendMessage(m.chat, {
                   react: {
                     text: '💕',
                     key: m.key,
                   }})
       }
handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^(حب)$/i
export default handler
