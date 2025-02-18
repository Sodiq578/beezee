require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 5000;

const botToken = process.env.BOT_TOKEN;
const chatIds = process.env.CHAT_IDS.split(',');

app.use(express.json());
app.use(express.static('assets')); // Statik fayllarni qo‘llab-quvvatlash

app.post('/send-message', async (req, res) => {
  const { name, phone } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Ma'lumot yetarli emas!" });
  }

  const message = `🟡Beezee🟡 saytiga yangi foydalanuvchi kirdi:\n\n👤Ism: ${name}\n📱Telefon: ${phone}`;

  try {
    await Promise.all(chatIds.map(chatId =>
      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message })
      })
    ));
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Xatolik:', error);
    res.status(500).json({ error: "Xabar yuborilmadi!" });
  }
});

app.listen(PORT, () => console.log(`Server ${PORT}-portda ishlamoqda...`));