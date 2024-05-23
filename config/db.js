const mongoose = require("mongoose");

const connection = async () => {
  await mongoose.connect(
    "mongodb+srv://meet:meet@cluster0.lwkwhml.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("Database is connected");
};

module.exports = { connection };
