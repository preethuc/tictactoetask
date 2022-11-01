"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _userController = require("./../controller/userController");

var _userController2 = _interopRequireDefault(_userController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// router.post("/create", userController.createPlayers);
// router.patch("/X/:id", userController.updateXposition);
// router.patch("/O/:id", userController.updateOposition);
// router.delete("/:id", userController.deletePlayer);
// router.get("/", userController.getPlayers);
// router.get("/win", userController.getWinner);

router.post("/create", _userController2.default.game);

module.exports = router;