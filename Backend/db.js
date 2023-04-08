const mongoose = require("mongoose");
const env = require("dotenv");
env.config();

main().catch((error) => console.log(error));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to Database");
}

module.exports = main;
