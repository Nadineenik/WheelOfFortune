const db = require("./db");

const getAllPrizes = async () => {
  const result = await db.query("SELECT * FROM prizes");
  return result.rows;
};

const recordWin = async (userId, prizeId) => {
  const result = await db.query(
    "INSERT INTO user_prizes (user_id, prize_id) VALUES ($1, $2) RETURNING *",
    [userId, prizeId]
  );
  return result.rows[0];
};

module.exports = { getAllPrizes, recordWin };
