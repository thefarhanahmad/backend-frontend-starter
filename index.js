const express = require("express");
const app = express();

require("dotenv").config();

//middleware
app.use(express.json());

//database connecting
const dbConnect = require("./config/dbConnection");
dbConnect();

//route import and mount
// const user = require("./routes/user");
// app.use("/api/v1", user);

//activate
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App is running at port no. ${PORT}`);
});
