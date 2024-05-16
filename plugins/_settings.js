//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {

      let isEnable = /true|enable|فتح|(turn)?on|1/i.test(command)
      let chat = global.db.data.chats[m.chat]
      let user = global.db.data.users[m.sender]
      let bot = global.db.data.settings[conn.user.jid] || {}
      let type = (args[0] || '').toLowerCase()
      let isAll = false, isUser = false
      switch (type) {
        case 'الترحيب':
        case 'ترحيب':
        case 'bienvenida':
          if (!m.isGroup) {
            if (!isOwner) {
              global.dfail('group', m, conn)
              throw false
            }
          } else if (!isAdmin) {
            global.dfail('admin', m, conn)
            throw false
          }
          chat.welcome = isEnable
          break

          case 'detect':
          case 'detector':
            if (!m.isGroup) {
             if (!isOwner) {
               global.dfail('group', m, conn)
              throw false
            }
           } else if (!isAdmin) {
             global.dfail('admin', m, conn)
             throw false
           }
           chat.detect = isEnable
         break


        case 'مضادالحذف':
        case 'الحذف':
          if (m.isGroup) {
            if (!(isAdmin || isOwner)) {
              global.dfail('admin', m, conn)
              throw false
            }
          }
          chat.delete = !isEnable
          break

          case 'soloenglish':
          case 'عرب':
          case 'مضادالاجانب':
          case 'onlyeng':
          case 'onlyenglish':
          case 'soloenglish':
          if (m.isGroup) {
            if (!(isAdmin || isOwner)) {
              global.dfail('admin', m, conn)
              throw false
            }
          }

        case 'عام':
        case 'العام':
        case 'publico':
          isAll = true
          if (!isROwner) {
            global.dfail('owner', m, conn)
            throw false
          }
          global.opts['self'] = !isEnable
          break
        case 'مضادالروابط':
        if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
        }}
        chat.antiLink = isEnable
        break


        case 'اوتولفل':
        case 'لفل':
        isUser = true
         user.autolevelup = isEnable
         break

         case 'antispam':
         case 'سبام':
         case 'انتيسبام':
          isAll = true
          if (!isOwner) {
            global.dfail('owner', m, conn)
          throw false
          }
          bot.antiSpam = isEnable
          break

        case 'simsimi':
        case 'سمسمي':
        case 'سمسم':
        if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
        }}
        chat.simi = isEnable
        break 

          case 'السين':
          case 'صحين':
          case 'سين':
          case 'الرؤيه':
          isAll = true
          if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
          }
          bot.autoread2 = isEnable    
          global.opts['autoread'] = isEnable  
          break

        case 'مضادالعام':
        case 'privateonly':
        isAll = true
        if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
        }
        global.opts['pconly'] = isEnable
        break
          //
        case 'gponly':
        case 'onlygp':
        case 'grouponly':
        case 'مضادالخاص':
        case 'الخاص':
          isAll = true
          if (!isROwner) {
            global.dfail('owner', m, conn)
            throw false
          }
          global.opts['gconly'] = isEnable
          break

        default:
         if (!/[01]/.test(command)) return m.reply(`
    ≡ قائمة الخيارات

    ┌─⊷ *الــمــشــرف*
    ⌯ الترحيب
    ⌯ لينك
    ⌯ مضادالحذف
    └───────────── 
    ┌─⊷ *الـمـسـتـخـدم*
    ⌯ اوتولفل
    └─────────────
    ┌─⊷ *الــمــالــك*
    ⌯ العام
    ⌯ مضادالعام
    ⌯ السين
    ⌯مضادالخاص
    ⌯ سمسم
    ⌯ مضادسبام
    └─────────────
    *📌 مــثــال :*
    *${usedPrefix}فتح* الترحيب
    *${usedPrefix}غلق* الترحيب
    `)
          throw false
      }

    m.reply(`
    ✅ *${type}* الآن *${isEnable ? 'نشط' : 'غير نشط'}* ${isAll ? 'لهذا البوت' : isUser ? '' : 'لهذا البوت'}
    `.trim()) 

    }
    handler.help = ['en', 'dis'].map(v => v + 'able <option>')
    handler.tags = ['nable']
    handler.command = /^((فتح|غلق)|فتح|(turn)?o(n|ff)|[01])$/i

    export default handler

