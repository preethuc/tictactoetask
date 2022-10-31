"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _userController = require("./../controller/userController");

var _userController2 = _interopRequireDefault(_userController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post("/create", _userController2.default.createPlayers);
router.patch("/X/:id", _userController2.default.updateXposition);
router.patch("/O/:id", _userController2.default.updateOposition);
router.delete("/:id", _userController2.default.deletePlayer);
router.get("/", _userController2.default.getPlayers);
router.get("/win", _userController2.default.getWinner);

module.exports = router;