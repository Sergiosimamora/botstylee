let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Telkomsel [6282124137452]
│ • 
│ • Saweria [https://saweria.co/botstyle]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/+62 821-2413-7452
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
