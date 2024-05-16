export async function all(m) {


  if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('open this link')) && !m.isBaileys && !m.isGroup) {
   this.sendMessage(m.chat,{text:`⌯ هلا @${m.sender.split('@')[0]}\n⌯انا هينا بوت الكيوته متشرفه باستخدامك لي 👀💞\n⌯ يمكنك استئجار البوت لمجموعتك\n\n⌯لمزيد من المعلومات يمكنك مراسلة المطور\n⌯ اكتب .المطور لمراسلة مطورى او يمكنك مراسلته هنا :\n+201063720595`.trim()}, {quoted:m});

} 

 return !0
}