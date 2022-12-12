const TelegramBot = require("node-telegram-bot-api");

const token = process.env.NEXT_TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: false });
var fs = require("fs");

export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("POST DATA = ", req.body);
    try {
      // save Order to MongoDB

      // send to telegram
      const chatId = process.env.NEXT_TELEGRAM_CHAT_ID;
      const msg = `Новая заявка от: ${req.body.name}\nТел.: ${req.body.phone}\nEmail: ${req.body.email}\nТема:${req.body.subject}\nСообщение: ${req.body.message}`;
      bot.sendMessage(chatId, msg);

      // Return a response to the client
      return res.status(200).json({ message: "Msg success sending" });
    } catch (e) {
      console.log("Error = ", e);
      return res.status(200).json({ message: "Error" });
    }
  }
  return res.status(200).json({ message: "ok" });
}
