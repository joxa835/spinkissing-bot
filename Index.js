const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const players = {};

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "👋 Xush kelibsiz SPINKISSING!\n\n/spin — o‘yinni aylantirish 🍾"
  );
});

bot.onText(/\/spin/, (msg) => {
  const chatId = msg.chat.id;

  if (!players[chatId]) {
    players[chatId] = [
      "Zarina", "Ziyayer", "Boss", "Spooky",
      "Diyora", "Shahzod", "Tohir", "Heart"
    ];
  }

  const list = players[chatId];
  const p1 = list[Math.floor(Math.random() * list.length)];
  let p2;
  do {
    p2 = list[Math.floor(Math.random() * list.length)];
  } while (p1 === p2);

  bot.sendMessage(
    chatId,
    `🍾 BUTULKA AYLANDI!\n\n💋 ${p1} ❤️ ${p2}\n\nKiss bo‘ladimi? 😏`
  );
});

console.log("SPINKISSING bot ishga tushdi");
