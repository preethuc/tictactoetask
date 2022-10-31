"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//mongoose connection
_mongoose2.default.connect("mongodb://localhost:27017/Data-TicTac");
_mongoose2.default.connection.once("open", function () {
  console.log("Database connected");
}).on("error", function (error) {
  console.log("error is:", error);
});

_app2.default.listen(3000, function () {
  console.log("server working on the port 3000");
});