global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      role: '🏅',
      level: '⬆️'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  },
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }

const role = [
  { name: 'مواطن 👦🏻', level: 0 },{ name: 'مواطن 👦🏻', level: 4 },{ name: 'شونين 👦🏻🗡️', level: 8 },{ name: 'جونين 👦🏻🗡️', level: 12 },{ name: 'شينوبي 🗡️', level: 16 },{ name: 'أنبو 🥷🏻🗡️', level: 20 },{ name: 'سانين ⚔️', level: 24 },{ name: 'كراكن هنتر ⚔', level: 28 },{ name: 'متدرب 🥷🏻', level: 32 },{ name: 'قرصان 🏴‍☠️', level: 36 },{ name: 'جندي بحرية 👮🏼‍♀️', level: 40 },{ name: 'صائد قراصنة 💀', level: 44 },{ name: 'قبطان 👨🏻‍✈️', level: 48 },{ name: 'نائب ادميرال 👥', level: 52 },{ name: 'ادميرال 🛡', level: 56 },{ name: 'كاغي 🎗', level: 60 },
{ name: 'اوتشيها 🔥', level: 64 },     { name: 'شينيغامي 💀', level: 68 },
  { name: 'سايان 🔥', level: 72 },      { name: 'سوبر سايان ✊🏻', level: 76 },
  { name: 'قاتل تنين 🐲', level: 80 },
  { name: 'قائد اسطول ☠️', level: 84 },
  { name: 'الفارس الأسود 🖤', level: 88 }, 
  { name: 'ساموراي 🗡️', level: 92 }, 
  { name: 'قاتل شياطين 👌🏻', level: 96 },
  { name: 'وريث هاشيرا 🔥', level: 100 },
  { name: 'هاشيرا ⚕️', level: 104 }, 
  { name: 'قمر ادنى 👿', level: 108 },
  { name: 'قمر أعلى 👹', level: 112 }, 
  { name: 'قائد جمعية الصيادين 🏹', level: 116 },
  { name: 'مساعد حاكم الدمار 🚀', level: 120 },{ name:'حاكم الدمار 👑',level: 124 }, 
  { name: 'نائب قائد فريق 👨‍⚖️', level: 128 },{ name: 'قائد فريق ⚔️', level: 132 }, 
  { name: 'القائد الأعلى 👹', level: 136 }, { name: 'اسبادا 🔮', level: 140 },
  { name: 'تارتاروس 👹', level: 144 }, { name: 'تنين 🐉', level: 148 },
  { name: 'ملك التنانين 👑', level: 152 }, 
  { name: 'تشيبوكاي 🪝', level: 156 },
  { name: 'نائب يونكو 💂🏼', level: 170 },
  { name: 'يونكو 🧛🏻', level: 185 }, 
  { name: 'حكيم المسارات السته ⚜', level: 200 }, 
  { name: 'ملك القراصنة 👒', level: 405 }, 
  { name: '🔱امبراطور البحار السبعة🔱', level: 1000 }
]

    return role.reverse().find(role => level >= role.level)
  }
}