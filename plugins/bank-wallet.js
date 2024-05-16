let handler = async (m, { conn }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
  else who = m.sender
  let name = conn.getName(m.sender)
  let user = global.db.data.users[who]
let anu = `
⌯ حــســاب : ${user.name} 🏦 
⌯ الرانــك : ${user.role} ⭐
⌯ ${user.exp} خـبـره ✨
⌯ ${user.limit} مــاس 📊
⌯ ${user.money} مــال 💵`
    m.reply(anu) 
}
handler.help = ['bank', 'dompet', 'dompet @user']
handler.tags = ['xp', 'rpg']
handler.command = /^(محفظة|محفظه)$/i


export default handler