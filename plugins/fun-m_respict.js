let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = conn.getName(who)
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Hina.jpg')
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/overlay/passed', {
    avatar: pp, 
  }), 'hina.png', `⌯ احــتــرام لــانــهــائــي`, m)
}

handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^(احترام)$/i

export default handler