const handler = async (m, {usedPrefix}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const name = conn.getName(who);
  m.reply(`
✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦
⌯ اســمــك : ${name}
⌯ عــمــلـاتــك : ${global.db.data.users[who].limit}
✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦`);
};
handler.help = ['Shadow'];
handler.tags = ['Shaow'];
handler.command = ['عملاتي'];
export default handler;