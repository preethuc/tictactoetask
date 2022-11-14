"use strict";

var _userModel = require("./../model/userModel");

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.game = async function (req, res) {
  // console.log("hello");
  try {
    var doc = await _userModel2.default.find();
    var position1 = req.body.position1;
    var position2 = req.body.position2;

    // console.log(position1)
    // console.log(position2)

    if (doc.length === 0) {
      var static_array = [[null, null, null], [null, null, null], [null, null, null]];
      console.log(static_array);
      static_array[position1][position2] = req.body.value;
      console.log(position1);
      console.log(position2);
      console.log(req.body.value);

      console.log(static_array);
      var user = await _userModel2.default.create({
        last_user: req.body.last_user,
        X_O_position: static_array
      });
      // console.log(user);
      return res.json({
        data: user
      });
    } else {
      var result = doc[0];
      var changed_array = result.X_O_position;
      console.log(changed_array);
      changed_array[position1][position2] = await req.body.value;

      // console.log(static_array);
      console.log(position1);
      console.log(position2);
      console.log(req.body.value);
      console.log(changed_array);
      //  update
      // console.log()

      var updation = await _userModel2.default.updateMany({
        last_user: req.body.last_user,
        X_O_position: changed_array
      });

      // console.log(updation.acknowledged)
      if (updation.acknowledged) {
        var _user = await _userModel2.default.find();
        var win = false;
        console.log(win);
        console.log(_user[0]);
        console.log(_user[0].X_O_position[0][0]);
        console.log(_user[0].X_O_position[0][1]);
        console.log(_user[0].X_O_position[0][2]);

        //----------------------chances to be win----------------------
        //1st-row
        if (_user[0].X_O_position[0][0] == _user[0].X_O_position[0][1] && _user[0].X_O_position[0][0] == _user[0].X_O_position[0][2]) {
          win = true;
          return res.json({ success: "true", Win: _user[0].last_user[0] });
        }
        //2nd-row
        if (_user[0].X_O_position[1][0] == _user[0].X_O_position[1][1] && _user[0].X_O_position[1][0] == _user[0].X_O_position[1][2]) {
          win = true;
          return res.json({ success: "true", Win: _user[0].last_user[0] });
        }
        //3rd-row
        if (_user[0].X_O_position[2][0] == _user[0].X_O_position[2][1] && _user[0].X_O_position[2][0] == _user[0].X_O_position[2][2]) {
          win = true;
          return res.json({ success: "true", Win: _user[0].last_user[0] });
        }
        //1st-column
        if (_user[0].X_O_position[0][0] == _user[0].X_O_position[1][0] && _user[0].X_O_position[0][0] == _user[0].X_O_position[2][0]) {
          win = true;
          return res.json({ success: "true", Win: _user[0].last_user[0] });
        }
        //2nd-column
        if (_user[0].X_O_position[0][1] == _user[0].X_O_position[1][1] && _user[0].X_O_position[0][1] == _user[0].X_O_position[2][1]) {
          win = true;
          return res.json({ success: "true", Win: _user[0].last_user[0] });
        }
        //3rd-column
        if (_user[0].X_O_position[0][2] == _user[0].X_O_position[1][2] && _user[0].X_O_position[0][2] == _user[0].X_O_position[2][2]) {
          win = true;
          return res.json({ success: "true", Win: _user[0].last_user[0] });
        }
        //first-cross
        if (_user[0].X_O_position[0][0] == _user[0].X_O_position[1][1] && _user[0].X_O_position[0][0] == _user[0].X_O_position[2][2]) {
          win = true;
          return res.json({ success: "true", Win: _user[0].last_user[0] });
        }
        //last-cross
        if (_user[0].X_O_position[0][2] == _user[0].X_O_position[1][1] && _user[0].X_O_position[0][2] == _user[0].X_O_position[2][0]) {
          win = true;
          return res.json({ success: "true", Win: _user[0].last_user[0] });
        }

        //to check every
        console.log("-----------after the chances------:  " + win);

        //Match Draw
        if (!win) {
          return res.status(200).json({
            game: _user[0].X_O_position,
            gameMessage: "Please proceed next move"
            // success: "true",
            // Win: "Nobody won Proceed to next move",
          });
        }
        // else {
        //   res.json({
        //     message:"win = true"
        //   })
        // }
      }
    }
  } catch (e) {
    // res.send(e)
    console.log(e);
  }
};