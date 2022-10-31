const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user1: {
    type: String,
  },
  Xposition: [
    {
      type: Number,
    },
  ],
  user2: {
    type: String,
  },
  Oposition: [
    {
      type: Number,
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
