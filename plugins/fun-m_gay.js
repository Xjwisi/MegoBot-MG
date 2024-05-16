let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = conn.getName(who)
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Hina.jpg')
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/overlay/gay', {
    avatar: pp, 
  }), 'hina.png', `🏳️‍🌈  *الشاذ :* ${name}\nمن يريد ان يغتصب هذا المثلي ☠️ ؟ `, m)
}

handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^(شاذ)$/i

export default handler