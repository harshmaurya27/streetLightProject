const mongoose = require("mongoose");

DB_URL = "mongodb+srv://harsh:harsh%4012345@cluster3.08lgtgj.mongodb.net/harsh";

mongoose.connect(DB_URL);

const conn = mongoose.connection;

conn.once("open", () => {
  console.log("successfully database connection");
});

conn.on("error", () => {
  console.log("error connecting the databse");
  process.exit();
});
