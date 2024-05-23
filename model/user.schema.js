const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    profilePic: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    isOnline: { type: String, default: "0" },
  },
  { timestamps: true }
);

const userModel = new mongoose.model("userChatAPP", userSchema);

module.exports = { userModel };
