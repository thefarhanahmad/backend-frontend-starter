const mongoose = require("mongoose");
const DATABASE_URL =
  process.env.DB_URL ||
  "mongodb+srv://akhtarfarhan281:mW1iY0npxl6Rvywx@cluster0.kaqgtsm.mongodb.net/frontendbackend";

function dbConnection() {
  mongoose
    .connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connected successfully");
    })
    .catch((err) => {
      console.log("DB not connecting");
      console.log(err);
    });
}

module.exports = dbConnection;
