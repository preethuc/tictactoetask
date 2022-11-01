"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tictactoeSchema = new _mongoose2.default.Schema({
  last_user: {
    type: String,
    enum: ["user1", "user2"]
  },
  X_O_position: {
    type: _mongoose2.default.Schema.Types.Mixed
  }

});

var User = _mongoose2.default.model("Game", tictactoeSchema);

module.exports = User;