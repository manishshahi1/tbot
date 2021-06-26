const { Telegraf } = require('telegraf')
const bot = new Telegraf('1721687604:AAG_IPNW6mXurKeSVik75Ci3TcR-B62GoaQ');

//send welcome msg
bot.command('oldschool', (ctx) => ctx.reply('Hello'))