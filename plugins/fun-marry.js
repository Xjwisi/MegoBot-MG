let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦
『${toM(a)}』👩‍❤️‍💋‍👨『${toM(b)}』زوجناكم لانكم تصلحون لبعض الي يشوفهم لايقين علي بعض زي يباركلهم 🤡
✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦`, null, {
mentions: [a, b]

})}
handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = ['زوجني']
handler.group = true
export default handler
