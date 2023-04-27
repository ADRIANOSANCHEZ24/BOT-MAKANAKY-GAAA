import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler  = async (m, { conn }) => {
let texto = `
*—◉ 𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻 𝙱𝙾𝚇𝙼𝙸𝙽𝙴 𝙷𝙾𝚂𝚃*
> Tutorial: https://youtu.be
> Pagina Oficial: https://boxmineworld.com
> Dashboard: https://dash.boxmineworld.com/home
> Panel: https://panel.boxmineworld.com
> Soporte: https://discord.gg/

------------------------------------

*—◉ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇*
> Tutorial: https://youtu.be
> Comandos:
- cd && termux-setup-storage
- apt-get update -y && apt-get upgrade -y
- pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn 
- git clone https://github.com/ADRIANOSANCHEZ24/BOT-MAKANAKY-GAAA.git && cd BOT-MAKANAKY-GAAA 
- npm start` 
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: `${texto}`.trim(), contextInfo: { externalAdReply: { title: '𝚃𝙷𝙴 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 𝙱𝙾𝚃', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/ADRIANOSANCHEZ24/BOT-MAKANAKY-GAAA' }, mentionedJid: [m.sender] }}}, aa)
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })  
}
handler.command = /^(instalarbot)/i
export default handler
