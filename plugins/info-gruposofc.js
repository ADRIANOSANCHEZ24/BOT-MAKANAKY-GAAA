let media = imagen4
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*𝙷𝙾𝙻𝙰 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 👋🏻, 𝚃𝙴 𝙸𝙽𝚅𝙸𝚃𝙾 𝙰 𝚄𝙽𝙸𝚁𝚃𝙴 𝙰 𝙻𝙾𝚂 𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂 𝙳𝙴 𝚃𝙷𝙴 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 𝙱𝙾𝚃 - 𝚃𝙴𝙰𝙼 𝙿𝙰𝚁𝙰 𝙲𝙾𝙽𝚅𝙸𝚅𝙸𝚁 𝙲𝙾𝙽 𝙻𝙰 𝙲𝙾𝙼𝚄𝙽𝙸𝙳𝙰𝙳 :D*

*➤ 𝙶𝚛𝚞𝚙𝚘𝚜 𝚘𝚏𝚒𝚌𝚒𝚊𝚕𝚎𝚜 𝚍𝚎𝚕 𝙱𝚘𝚝 𝙼𝚊𝚔𝚊𝚗𝚊𝚔𝚢:*
*1.-* https://chat.whatsapp.com

*2.-* https://chat.whatsapp.com

*3.-* https://chat.whatsapp.com

*4.-* https://chat.whatsapp.com

*5.-* https://chat.whatsapp.com
`.trim(), wm, media, [['💟 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 💟', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
