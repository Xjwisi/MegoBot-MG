import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '[⚡]⌯ رد عـلـي الـفـيـديـو او الـصـورة عـشـان تــرفـعـهـم تــلــيـجـراف'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`⌯ الــحــجــم : ${media.length} بايت 

⌯ ${isTele ? 'غـــيــر مــنــتــهـي الـصـلـاحـيـه' : 'الـتـنـسـيـق لــا يــدعــم الــرفــع'} 
⌯ ${link}
  `)
}
handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = ['تليجراف', 'تيلجراف','لرابط','لتليجراف']

export default handler