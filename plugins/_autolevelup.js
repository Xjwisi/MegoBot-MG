//import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn }) {
    let name = conn.getName(m.sender);
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++
    user.role = global.rpg.role(user.level).name
    if (before !== user.level) {
        m.reply(`
✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦
⌯ لــقــد ارتــقــيــت الـــي مــســتــوي جــديــد ⚔
⌯ ${before} ៚  ${user.level}
⌯ رتــبــتــك : ${user.role}

⌯ ${name} لــقد ارتــفـعــت الــي افـــاق جـــديـــده ووصــلــت الــي ${user.level} ✨
✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦
  `.trim())
    }
}

