"use strict";

var _userModel = require("./../model/userModel");

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createPlayers = async function createPlayers(req, res, next) {
  try {
    var data = await _userModel2.default.create(req.body);
    res.status(201).json({
      status: "success",
      message: "created!",
      createdData: data
    });
  } catch (err) {
    console.log(error.message);
  }
};
var updateXposition = async function updateXposition(req, res, next) {
  try {
    var user_id = req.params.id;
    var user = await _userModel2.default.findById(user_id).exec();
    var Xposition = user.Xposition;
    //   console.log(Xposition);
    if (user) {
      Xposition.push(req.body.Xposition);
      _userModel2.default.findByIdAndUpdate(user_id, { Xposition: Xposition }, { new: true }, function (err, data) {
        if (err) {
          console.log(err);
          return res.json({
            success: "success",
            message: err.message
          });
        } else {
          // console.log(data.Xposition);
          // if (data.Xposition === [3,5,7]||data.Xposition === [1,5,9]||data.Xposition === [4,5,6]) {
          //   // return res.json({
          //   //   message: "X is the winner"
          //   // })
          //    res.send("X is the winner")
          // }
          res.json({
            success: "success",
            message: "Added successfully",
            user: data
          });
        }
      });
    }
  } catch (e) {
    console.log(e);
    return res.json({ message: e.message });
  }
};
var updateOposition = async function updateOposition(req, res, next) {
  try {
    var user_id = req.params.id;
    var user = await _userModel2.default.findById(user_id).exec();
    var Oposition = user.Oposition;
    //   console.log(Oposition);
    if (user) {
      Oposition.push(req.body.Oposition);
      _userModel2.default.findByIdAndUpdate(user_id, { Oposition: Oposition }, { new: true }, function (err, data) {
        if (err) {
          console.log(err);
          return res.json({
            success: "success",
            message: err.message
          });
        } else {
          return res.json({
            success: "success",
            message: "Added successfully",
            user: data
          });
        }
      });
    }
  } catch (e) {
    console.log(e);
    return res.json({ message: e.message });
  }
};

var getPlayers = async function getPlayers(req, res, next) {
  try {
    var users = await _userModel2.default.find();
    res.status(200).json({
      status: "success",
      data: users
    });
  } catch (error) {
    console.log(error.message);
  }
};
var deletePlayer = async function deletePlayer(req, res, next) {
  try {
    await _userModel2.default.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success"

    });
  } catch (error) {
    console.log(error.message);
  }
};
var getWinner = async function getWinner(req, res, next) {
  try {
    var data = await _userModel2.default.find();
    console.log(data[0]);
    if (data[0].Xposition === [3, 5, 7] || data[0].Xposition === [1, 5, 9] || data[0].Xposition === [4, 5, 6]) {
      console.log(data.Xposition);
      return res.json({
        message: "X is the winner"
      });
      //  res.send("X is the winner")
    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { createPlayers: createPlayers, updateXposition: updateXposition, updateOposition: updateOposition, getPlayers: getPlayers, deletePlayer: deletePlayer, getWinner: getWinner };