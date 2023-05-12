if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to DB");
  } catch (error) {
    alert("Error", error);
  }
}

module.exports = connectToDB;
