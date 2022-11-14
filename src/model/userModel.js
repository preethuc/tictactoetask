import mongoose from "mongoose";

const tictactoeSchema = new mongoose.Schema({
  last_user: {
     type: String,
     enum:["user1","user2"]
  },
  X_O_position: {
    type: mongoose.Schema.Types.Mixed,
  }
})

const User = mongoose.model("Game", tictactoeSchema);

module.exports = User;