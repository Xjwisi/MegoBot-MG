import yts from 'yt-search'

let handler = async (m, { conn, text }) => {
  if (!text) throw '⌯ ضيف عنوان الفديو الي انت عاوز تبحث عنه'
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video':
        return `
⌯ ${v.title}
⌯ الــــرابـــط : ${v.url}
⌯ الــمــدة   : ${v.timestamp}
⌯ الـمـشـاهـدات : ${v.views}
      `.trim()
      case 'channel':
        return `
⌯ ${v.name} ${v.url}
⌯ ${v.subCountLabel} (${v.subCount}) مـشــتــرك
⌯ ${v.videoCount} 
      `.trim()
    }
  }).filter(v => v).join('\n\n________________________\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}

handler.help = ['ytsearch']
handler.tags = ['dl']
handler.command = ['ytsearch', 'yts','يوتيوب']

export default handler
