//import db from '../lib/database.js'

let handler = async (m, { conn }) => {

  let hasil = Math.floor(Math.random() * 35)
  let time = global.db.data.users[m.sender].lastmiming + 14400000
  if (new Date - global.db.data.users[m.sender].lastmiming < 14400000) throw `✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦ـ\nتــعــال بــعــد :\n︎︎${msToTime(time - new Date())} لـلـحـصـول عــلـي عــمــلـات مــره اخــري\n✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦`
  global.db.data.users[m.sender].limit += hasil
  m.reply(`✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦\nلـقــد حـصـلـت عـلـي عـمـلـاتـك\n︎︎〄│ المبلغ ៚ ${hasil} 🪙 \n✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦`)
  global.db.data.users[m.sender].lastmiming = new Date * 1
}
handler.help = ['Shadow']
handler.tags = ['Shadow']
handler.command = ['عملات'] 

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

    
 return hours + " ساعات " + minutes + " دقايق " + seconds + " ثواني " 
      }