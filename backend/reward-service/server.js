// reward-service/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;  // Порт для RewardService

app.use(cors());
app.use(express.json()); // чтобы читать JSON в теле запроса

// Здесь будут временно храниться выигрыши
const rewards = [];

// Сохранить новый выигрыш
app.post('/api/rewards', (req, res) => {
  const { prize, date } = req.body;

  if (!prize || !date) {
    return res.status(400).json({ message: 'Prize and date are required.' });
  }

  rewards.push({ prize, date });
  res.status(201).json({ message: 'Reward saved!' });
});

// Получить все выигрыши
app.get('/api/rewards', (req, res) => {
  res.json(rewards);
});

app.listen(port, () => {
  console.log(`🏆 RewardService is running on http://localhost:${port}`);
});
