// prize-service/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;  // Порт для PrizeService

app.use(cors());

// Призы (можно потом получать из БД)
const prizes = [
  "Gold Coin",
  "Free Spin",
  "Small Gift",
  "Big Prize",
  "Mystery Box",
  "Nothing",
  "Bonus Points",
  "Lucky Charm"
];

// Отдаём список призов
app.get('/api/prizes', (req, res) => {
  res.json(prizes);
});

app.listen(port, () => {
  console.log(`🎁 PrizeService is running on http://localhost:${port}`);
});
