export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  [⚡]⌯ اصــبــح نــشــط الــان ${user.afkReason ? 'الــســبــب : ' + user.afkReason : ''}
  
⌯ وقــت الـــاخــتــفــاء : ${(new Date - user.afk).toTimeString()}
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`[⚡]⌯ لـــا تـمـنـشـنـلـه 😡
⌯ هــو بــوضــع الــاخــتــفــاء 
⌯ ${reason ? '⌯ ســبــب الــاخــتــفــاء :' + reason : '⌯ هــو بــوضــع الــاخــتــفــاء بــس مــحــددش ســبـب'}*
⌯ وقــت الـــاخــتــفــاء : ${(new Date - afkTime).toTimeString()}*
  `.trim())
    }
    return true
}
