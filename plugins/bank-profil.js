import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
//import db from '../lib/database.js'


let handler = async (m, { conn, usedPrefix, command}) => {

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `المستخدم غير موجود بقاعده البيانات الخاصه بي`
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Hina.jpg')
let user = global.db.data.users[who]
let { name, exp, limit, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')

let str = `*✦•━━━━━━ ∘⊰⚡⊱∘ ━━━━━━•✦*
⌯ اســمــك : ${username}  
⌯ مـنـشـنـك : @${who.replace(/@.+/, '')}
⌯ رقـــمــك : ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
⌯ شـــاتــك : wa.me/${who.split`@`[0]}
⌯ الـمــاسـك : ${limit}
⌯ رتــبـتك : ${role}
⌯ مـســتـواك : ${level}
⌯ خــبـــرتــك : ${exp}
⌯ مــســجــل : ${registered ? 'يب': 'لا'}
⌯ بـريـمــيــوم : ${prem ? 'يب' : 'لا'}
⌯ تبقي لك ${math} من الخبرة للصعود الي مستوي اخر
*✦•━━━━━━ ∘⊰⚡⊱∘ ━━━━━━•✦*`
    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] })

}
handler.help = ['perfil']
handler.tags = ['group']
handler.command = ['بروفايل', 'رانك'] 

export default handler
