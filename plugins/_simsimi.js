import fetch from 'node-fetch'
let handler = m => m

handler.before = async (m) => {
let chat = global.db.data.chats[m.chat]
if (chat.simi) {
if (/^.*false|disnable|غلق|اغلاق|قفل|اقفل|(turn)?off|0/i.test(m.text)) return
let textodem = m.text  
try {
let ressimi = await fetch(`https://api.simsimi.net/v2/?text=${encodeURIComponent(textodem)}&lc=ar`)
let data = await ressimi.json();                                                             
if (data.success == 'لا اعرف ما تقول من فضلك ارجوك علمني') return m.reply(`${lol}`) 
await m.reply(data.success)
} catch {

if (textodem.includes('مرحبا')) textodem = textodem.replace('مرحبا', 'مرحبا')
if (textodem.includes('هلا')) textodem = textodem.replace('هلا', 'هلا')
if (textodem.includes('كيفك')) textodem = textodem.replace('كيفك', 'كيفك')    
let reis = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ar&dt=t&q=" + textodem)
let resu = await reis.json()  
let nama = m.pushName || '1'
let api = await fetch("http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=" + nama + "&msg=" + resu[0][0][0])
let res = await api.json()
let reis2 = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ar&dt=t&q=" + res.cnt)
let resu2 = await reis2.json()
await m.reply(resu2[0][0][0])}
return !0
}
return true
}
export default handler
