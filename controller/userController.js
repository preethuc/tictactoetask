const User = require("../model/userModel");

const createMove = async (req, res, next) => {
  try {
    const data = await User.create(req.body);
    res.status(201).json({
      status: "success",
      message: "created!",
      createdData: data,
    });
  } catch (err) {
    console.log(error.message);
  }
};
const updateXposition = async (req, res, next) => {
  try {
    const user_id = req.params.id;
    const user = await User.findById(user_id).exec();
    let Xposition = user.Xposition;
    //   console.log(Xposition);
    if (user) {
      Xposition.push(req.body.Xposition);
      User.findByIdAndUpdate(
        user_id,
        { Xposition: Xposition },
        { new: true },
        function (err, data) {
          if (err) {
            console.log(err);
            return res.json({
              success: "success",
              message: err.message,
            });
          } else {
            console.log(data.Xposition);
            if (data.Xposition === [0, 4, 8]) {
              // return res.json({
              //   message: "X is the winner"
              // })
               res.send("X is the winner")
            }
            res.json({
              success: "success",
              message: "Added successfully",
              user: data,
            });
          }
        }
      );
    }
  } catch (e) {
    console.log(e);
    return res.json({ message: e.message });
  }
};
const updateOposition = async (req, res, next) => {
  try {
    const user_id = req.params.id;
    const user = await User.findById(user_id).exec();
    let Oposition = user.Oposition;
    //   console.log(Oposition);
    if (user) {
      Oposition.push(req.body.Oposition);
      User.findByIdAndUpdate(
        user_id,
        { Oposition: Oposition },
        { new: true },
        function (err, data) {
          if (err) {
            console.log(err);
            return res.json({
              success: "success",
              message: err.message,
            });
          } else {
            return res.json({
              success: "success",
              message: "Added successfully",
              user: data,
            });
          }
        }
      );
    }
  } catch (e) {
    console.log(e);
    return res.json({ message: e.message });
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = { createMove, updateXposition, updateOposition, getUsers };
