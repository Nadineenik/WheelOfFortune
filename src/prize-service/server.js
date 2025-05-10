const express = require("express");
const cors = require("cors");
const prizeController = require("./prizeController");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/prizes", prizeController.getPrizes);
app.post("/record-win", prizeController.recordWin);

app.listen(port, () => {
  console.log(`Prize service running at http://localhost:${port}`);
});
