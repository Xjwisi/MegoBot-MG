let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`⌯ ${conn.getName(m.sender)} مــحــدش يـمـنـشـنـلـه 😡
الــســبــب ${text ? ': ' + text : ''}
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^اختفاء|هختفي|ميوت$/i
export default handler
