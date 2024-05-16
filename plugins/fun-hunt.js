let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  let monsters = [
    { area: 1, name: "جولبن" },
    { area: 1, name: "سلايم" },
    { area: 1, name: "ولف" },
    { area: 2, name: "تنين" },
    { area: 2, name: "سكيليتون" },
    { area: 2, name: "شبح" },
    { area: 3, name: "شيطان" },
    { area: 3, name: "شبح" },
    { area: 3, name: "زومبي" },
    { area: 4, name: "شيطان" },
    { area: 4, name: "ساحر" },
    { area: 4, name: "زومبي" },
    { area: 5, name: "غول" },
    { area: 5, name: "عقرب" },
    { area: 5, name: "يونيكورن" },
    { area: 6, name: "روبوت" },
    { area: 6, name: "ساحر" },
    { area: 6, name: "وحيد قرن" },
    { area: 7, name: "سيليسيا" },
    { area: 7, name: "سمكة البيرانا العملاقة" },
    { area: 7, name: "حورية البحر" },
    { area: 8, name: "تمساح عملاق" },
    { area: 8, name: "نيريد" },
    { area: 8, name: "حورية البحر" },
    { area: 9, name: "شيطان" },
    { area: 9, name: "هاربي" },
    { area: 9, name: "روبوت محسن" },
    { area: 10, name: "دولاهان" },
    { area: 10, name: "مانتيكور" },
    { area: 10, name: "روبوت مطور" },
    { area: 11, name: "طفل التنين" },
    { area: 11, name: "تنين" },
    { area: 11, name: "تنين" },
    { area: 12, name: "تنين" },
    { area: 12, name: "تنين" },
    { area: 12, name: "تنين" },
    { area: 13, name: "تنين" },
    { area: 13, name: "تنين" },
    { area: 13, name: "تنين" },
  ]
  let player = global.db.data.users[m.sender]
  let pengirim = m.sender.split("@")[0]
 let __timers = (new Date - global.db.data.users[m.sender].lasthunt)
 let _timers = (1200000 - __timers) 
 let timers = clockString(_timers)

  let area_monsters = monsters[Math.floor(Math.random() * monsters.length)]
  let monster = area_monsters.name
  area_monsters = area_monsters.area
  let monsterName = monster.toUpperCase()

  if (new Date - global.db.data.users[m.sender].lasthunt > 1200000) {
    let coins = parseInt(Math.floor(Math.random() * 100000))
    let exp = parseInt(Math.floor(Math.random() * 10000))
    let _healing = `${Math.floor(Math.random() * 100)}`.trim()
    let healing = (_healing * 1)
    player.health -= healing
    player.lasthunt = new Date * 1 // waktu hunt 2menit

    if (player.health < 0) {
      let msg = `⌯ @${pengirim} لـــقــد مــت مــقــتــولــا مــن ${monsterName}`
      if (player.level > 0) {
      if (player.sword > 0) {
        player.level -= 1
        player.sword -= 5
        player.exp -= exp * 1
        msg += `\n⌯ مــســتــواك هـيــقــل لـفـل واحــد بـسـبــب مـوتــك وســيــفــك هــيــقــل بــمـقـدار 5`
      }
      }
      player.health = 100
      return conn.reply(m.chat, msg, m)
    }

    player.money += coins * 1
    player.exp += exp * 1
    global.db.data.users[m.sender].tiketcoin += 1

    let pesan = `⌯ لــقــد وجــدت ${monsterName}
@${pengirim} وقــد قـتـلـتـه وحــصــلــت عــلــي :
${new Intl.NumberFormat('ar-EG').format(coins)} مــــال
${new Intl.NumberFormat('ar-EG').format(exp)} اكــســبــي
⌯ بــســبــب الــمــعــركــه تــقـل صــحـتـك بـمقـدار : -${healing}
⌯ مـتـبـقـي لــك : ${player.health} صـــحـــه

+1 تيكت كوين`
    await conn.reply(m.chat, pesan, m)
  } else throw `⌯ اســتــنــي ${timers} قــبــل الــمـغــامــره الــقــادمــه`
}

handler.help = ['hunt']
handler.tags = ['game']
handler.command = /^صيد/i
handler.limit = true
handler.group = true
handler.fail = null

export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [`\n〄│⌯ 💥 ` + d, ' ايــام ', `\n〄│⌯ 💫 ` + h, ' ســاعـات ', `\n〄│⌯ 💠 ` + m, ' دقــايــق ', `\n〄│⌯ ♦ ` + s, ' ثــوانــي '].map(v => v.toString().padStart(2, 0)).join('')}