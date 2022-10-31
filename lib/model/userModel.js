"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose2.default.Schema({
  user1: {
    type: String
  },
  Xposition: [{
    type: Number
  }],
  user2: {
    type: String
  },
  Oposition: [{
    type: Number
  }]
});

var User = _mongoose2.default.model("User", userSchema);

module.exports = User;