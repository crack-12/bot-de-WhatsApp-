let handler = async m => m.reply(`
  ^    ^    ^    ^    ^  
 /S\  /m\  /3\  /3\  /0\ 
<___><___><___><___><___>

COMO CREAR ESTE BOT:

https://youtu.be/chMc57gjmkI

𝙈𝙮 𝘾𝙝𝙖𝙣𝙚𝙡:

https://youtube.com/channel/UCNOdGsfoLeXTxKmakoRXW5A
                                        
`.trim()) 
handler.help = ['El crack.r.informatico']
handler.tags = ['info']
handler.command = /^samu$/i

module.exports = handler
