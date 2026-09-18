require("dotenv").config();

const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.TELEGRAM_BOT_API);

bot.start((ctx) => {
    ctx.reply("¡Hola! Soy tu bot 🤖");
});

bot.help((ctx) => {
    ctx.reply("Comandos disponibles:\n/start\n/help");
});

bot.on("text", (ctx) => {
    ctx.reply(`Dijiste: ${ctx.message.text}`);
});

bot.launch();

console.log("Bot iniciado...");