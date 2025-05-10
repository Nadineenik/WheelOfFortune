const { Pool } = require("pg");

const pool = new Pool({
  user: "your_username", // Укажите имя пользователя вашей БД
  host: "localhost",
  database: "wheel_of_fortune",
  password: "your_password", // Укажите ваш пароль
  port: 5432,
});

module.exports = pool;
