/*
By : Aine
*/
export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  let isSticker = m.mtype
  let hapus = m.key.participant
  let bang = m.key.id
  if (chat.antiSticker && isSticker) {
    if(isSticker === "stickerMessage"){
      if (global.opts) {
        if (isAdmin || !isBotAdmin){		  
        } else {
          m.reply('*Sticker detected*') // ganti text terserah kamu 
          global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        }return true
      }
    }
  }
  return true
}
