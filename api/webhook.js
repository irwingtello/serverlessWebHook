require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

module.exports =  async (req, res)  => {
  switch (req.method) {
    case 'POST':

  try {
    const webhook = req.body;


    const bot = new TelegramBot(process.env.TOKEN);
const chatId = process.env.TELEGRAM_CHANNEL_ID;
// Sends text to the above chatID
 await bot.sendMessage(chatId,
  `${JSON.stringify(webhook)}`
);

return res.status(200).json(webhook);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

      break;

    default:
      return res.status(405).json({ message: 'Method Not Allowed' });
  }
};