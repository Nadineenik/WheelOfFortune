const prizeModel = require("./prizeModel");

const getPrizes = async (req, res) => {
  try {
    const prizes = await prizeModel.getAllPrizes();
    res.json(prizes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch prizes" });
  }
};

const recordWin = async (req, res) => {
  const { userId, prizeId } = req.body;
  try {
    const result = await prizeModel.recordWin(userId, prizeId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to record win" });
  }
};

module.exports = { getPrizes, recordWin };
