import fetch from "node-fetch"
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `╰⊱❗️⊱ *استخدامك غلط يحب* ⊱❗️⊱╮\n\nضيف لينك الحزمة بتاعت التليجرام\nمثال:\n${usedPrefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`
    if (!args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) throw `╰⊱❗️⊱ *حدث خطأ يحب* ⊱❗️⊱╮\n\nالرابط غلط يحب`
    let packName = args[0].replace("https://t.me/addstickers/", "") 
    let gas = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })
    if (!gas.ok) throw eror
    let json = await gas.json()
    m.reply(`*مجموع الاستيكر:* ${json.result.stickers.length}
*الوقت المقدر للارسال:* ${json.result.stickers.length * 1.5} ثانية`.trim())
    for (let i = 0; i < json.result.stickers.length; i++) {
        let fileId = json.result.stickers[i].thumb.file_id
        let gasIn = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
        let jisin = await gasIn.json()
        let stiker = await sticker(false, "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path, global.packname, global.author)
        await delay(5000)
        if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nna, thumbnail: imagen1}}}, { quoted: m })
        await delay(3000)
    }
    throw `*تم يحب واسف لو اتاخرت ✅️*`
}
handler.help = ['stikertele *<url>*']
handler.tags = ['sticker', 'downloader']
handler.command = /^استيكجرام|استيكر-تليجرام|تليجرام-استيك|تليجرام$/i

handler.limit = 1
handler.register = true
export default handler

const delay = time => new Promise(res => setTimeout(res, time))