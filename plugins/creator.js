import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)


if (command == 'owner') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Saya ๐๐ ๐๐๐๐๐๐;Bot;;Md\nFN:Saya Owner ๐๐๐๐๐๐๐๐WhatsApp, Md\nNICKNAME: Owner ๐๐ ๐๐๐๐๐๐\nORG:Wudy\nTITLE:soft\nitem1.TEL;waid=6281262742340:+62 812-6274-2340\nitem1.X-ABLabel:6281262742340\nitem2.URL:tiktok.com/@al_makerz/Cerdasin62\nitem2.X-ABLabel:๐ฌ More\nitem3.EMAIL;type=INTERNET:all_makerz35@gmail.com\nitem3.X-ABLabel:๐ Mail Owner ๐๐ ๐๐๐๐๐๐\nitem4.ADR:;;๐ฎ๐ฉ Indonesia;;;;\nitem4.X-ABADR:๐ฌ More\nitem4.X-ABLabel:๐ Lokasi Saya\nBDAY;value=date:๐ 7 January\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fliveLoc })
let caption = `๐ Hai *${name} @${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.sendButton(m.chat, caption, author, null, [['๐ Sapa Owner', 'Huuu']], m, { quoted: tag_own, mentions: conn.parseMention(caption) })
}
if (command == 'pengembang') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6282195322106:+62 821-9532-2106\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kack yg mengaktifkan aq.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fgif })
}
if (command == 'creator') {
  try {
  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `๐ Developer Bot `, `๐ซ Don't call me ๐ฅบ`, `wudysoft@gmail.com`, `๐ฎ๐ฉ Indonesia`, `๐ https://aygemuy.github.io/`, `๐ค Gada pawang nih senggol dong ๐`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `๐ฅ Bot WhatsApp ๐ฃ`, `๐ต Don't spam/call me ๐ข`, `Nothing`, `๐ฎ๐ฉ Indonesia`, `๐ https://s.id/Cerdasin62/`, `๐ค Hanya bot biasa yang kadang suka eror โบ`]
  ], fkontak)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor ownerku , jangan di spam ya ka๐`, sentMsg, {mentions: [m.sender]})
  } catch {
  const sentMsg = await conn.sendContact(m.chat, `${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, m)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kak๐`, sentMsg, {mentions: [m.sender]})
  }
  }
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler
