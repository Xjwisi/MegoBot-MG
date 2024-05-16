let confirm = {}

async function handler(m, { conn, args }) {
    // S H A D O W
  if (m.sender in confirm) {
    throw '[❣️]⌯ انت لسه فرهان استني اما يخلص'
  }

  try {
    let user = global.db.data.users[m.sender]
    let count = (args[0] && number(parseInt(args[0])) ? Math.max(parseInt(args[0]), 1) : /all/i.test(args[0]) ? Math.floor(user.money) : 1) * 1

      // S H A D O W
    if (count > 10000) {
      count = 10000
    }

    if (user.money < count) {
      return m.reply('[❣️]⌯ مش معاك فلوس للرهان ده')
    }

    if (!(m.sender in confirm)) {
      confirm[m.sender] = {
        sender: m.sender,
        count,
        timeout: setTimeout(() => (m.reply('[⚡]⌯ وقتك خلص'), delete confirm[m.sender]), 60000)
      }

      let txt = `[⚡]⌯  متاكد انك بدك تتراهن معي ؟ رد ب  'نعم' او  'لا'\n\n⌯ *فلوس الرهان:* ${count} 💹\n⌯ *رد قبل 60 ثانية*`
      return conn.sendMessage(m.chat, { text: txt, quoted: m, contextInfo: { mentionedJid: [m.sender] } });
    }
  } catch (e) {
    console.error(e)
    if (m.sender in confirm) {
      let { timeout } = confirm[m.sender]
      clearTimeout(timeout)
      delete confirm[m.sender]
      m.reply('[❣️]⌯ اسفة لغيت الرهان بسبب خطأ')
    }
  }
}

handler.before = async m => {
  if (!(m.sender in confirm)) return
  if (m.isBaileys) return

  let { timeout, count } = confirm[m.sender]
  let user = global.db.data.users[m.sender]
  let initialMoney = user.money * 1
  let txt = (m.msg && m.msg.selectedDisplayText ? m.msg.selectedDisplayText : m.text ? m.text : '').toLowerCase()

  try {
    if (/^(نعم|يب|اجل|اقبل)$/i.test(txt)) {
      let botScore = (Math.ceil(Math.random() * 51)) * 1  // S H A D O W
      let playerScore = (Math.floor(Math.random() * 101)) * 1 // S H A D O W)
      let status = 'خسرت'

      if (botScore < playerScore) {
        user.money += count * 1
        status = 'كسبت'
      } else if (botScore > playerScore) {
        user.money -= count * 1
      } else {
        status = 'تعادلت'
        user.money += Math.floor(count / 1.5) * 1
      }

      let result = `
   [⚡]⌯ *اللاعب* ⌯ *النقاط*
      ⌯ *البوت :*      ${botScore}
      ⌯  *انت :*    ${playerScore}
     انت *${status}*. رصيدك الجديد: ${user.money} 💹
          `.trim()

      m.reply(result)
      clearTimeout(timeout)
      delete confirm[m.sender]
      return true
    } else if (/^(لا|رفض|ارفض)?$/i.test(txt)) {
      clearTimeout(timeout)
      delete confirm[m.sender]
      m.reply('[❣️]⌯ تم الغاء الرهان')
      return true
    }

  } catch (e) {
    clearTimeout(timeout)
    delete confirm[m.sender]

    // S H A D O W
    if (initialMoney > user.money) user.money = initialMoney

    m.reply('[❣️]⌯ اسفة لغيت الرهان بسبب خطأ')
    return true
  } finally {
    clearTimeout(timeout)
    delete confirm[m.sender]
    return true
  }
}

handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^(رهان)$/i

export default handler


function number(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}
