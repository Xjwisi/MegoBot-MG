let handler = async (m, { command, text }) => m.reply(`${['هـــا؟',
   'ايــش عـــرفــنــي مــفـــكـــرنــي جــوجــل 💔🗿',
   'الــلــه اعــلــم 🤡'
   ,'يــب'
   ,'مــيـــن يــقـــول كــذا ؟',
   'روح نـــام وحـــل عــنــي 🐦👆🏻'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^هل$/i
export default handler
