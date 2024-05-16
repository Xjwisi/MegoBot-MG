let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 86400000 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 86400000) throw `[⚡]⌯ تــعــال بــعــد ${msToTime(time - new Date())} لـتـسـتـلـم هــديــه اخــري `

let img = 'https://telegra.ph/file/c54fb870867fa7cdc7907.jpg'
let dia = Math.floor(Math.random() * 30)
let tok = Math.floor(Math.random() * 10)
let mystic = Math.floor(Math.random() * 4000)
let expp = Math.floor(Math.random() * 5000)

  global.db.data.users[m.sender].limit += dia
  global.db.data.users[m.sender].money += mystic
  global.db.data.users[m.sender].joincount += tok
  global.db.data.users[m.sender].exp += expp
  
let texto = `
✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦
[⚡]⌯ بـــكـــج عـــشـــوائـــي
✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦
⌯ ${dia} الــمــاس 💎
⌯ ${tok} عــمــلــات 🪙
⌯ ${mystic} شــادو كــويــنــز 👾
⌯ ${expp} خــبــره ⚡
✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦`

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

await conn.sendFile(m.chat, img, 'mystic.jpg', texto, fkontak)  
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.help = ['daily']
handler.tags = ['xp']
handler.command = ['هديه', 'هدية'] 
handler.level = 5
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " ســـاعــه " + minutes + " دقـيـقـه"
}
