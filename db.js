const mongoose = require("mongoose");

let dbConnection = null;

async function connectDb() {
  if (dbConnection) {
    return dbConnection;
  }
  const url = process.env.DB_URL;
  try {
    mongoose.set("strictQuery", true);
    dbConnection = await mongoose.connect(url);
    console.log("Db connected");
    return dbConnection;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { connectDb };
