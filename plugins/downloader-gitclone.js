import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `[⚡]⌯ ضيف رابط مشروع جيت اب الي انت عاوزت تحمله\n\n📌 مــثــال : ${usedPrefix + command} https://github.com/Darkshadow201293/Shadow-API`
    if (!regex.test(args[0])) throw '[⚡]⌯ الرابط غير صحيح'
    let [_, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]

    m.reply(`[⚡]⌯ من فضلك انتظر جاري البحث`)
    conn.sendFile(m.chat, url, filename, null, m)
}
handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = ['جيتاب','جيتهوب','جيتهاب'] 
handler.diamond = true

export default handler
