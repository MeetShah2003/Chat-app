const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: "userChatAPP" },
  recieverId: { type: mongoose.Schema.Types.ObjectId, ref: "userChatAPP" },
  message: String,
});

const chatModel = new mongoose.model("userChats", chatSchema);

module.exports = { chatModel };
