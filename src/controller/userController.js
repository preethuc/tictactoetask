import User from "./../model/userModel";

exports.game = async (req, res) => {
  // console.log("hello");
  try {
    const doc = await User.find();
    const position1 = req.body.position1;
    const position2 = req.body.position2;

    // console.log(position1)
    // console.log(position2)

    if (doc.length === 0) {
      let static_array = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ];
      console.log(static_array);
      static_array[position1][position2] = req.body.value;
      console.log(position1);
      console.log(position2);
      console.log(req.body.value);

      console.log(static_array);
      const user = await User.create({
        last_user: req.body.last_user,
        X_O_position: static_array,
      });
      // console.log(user);
      return res.json({
        data: user,
      });
    } else {
      const result = doc[0];
      let changed_array = result.X_O_position;
      console.log(changed_array)
      changed_array[position1][position2] = await req.body.value;

      // console.log(static_array);
      console.log(position1);
      console.log(position2);
      console.log(req.body.value)
      console.log(changed_array)
      //  update
      // console.log()

      const updation = await User.updateMany({
        last_user: req.body.last_user,
        X_O_position: changed_array,
      });

      // console.log(updation.acknowledged)
      if (updation.acknowledged) {
        const user = await User.find();
        let win = false;
        console.log(win)
        console.log(user[0])


        //----------------------chances to be win----------------------
        //1st-row
        if (
          (user[0].X_O_position[0][0] === user[0].X_O_position[0][1]) ===
          user[0].X_O_position[0][2]
        ) {
          win = true;
          return res.json({ success: "true", Win: user[0].last_user[0] });
        }
        //2nd-row
        if (
          (user[0].X_O_position[1][0] === user[0].X_O_position[1][1]) ===
          user[0].X_O_position[1][2]
        ) {
          win = true;
          return res.json({ success: "true", Win: user[0].last_user[0] });
        }
        //3rd-row
        if (
          (user[0].X_O_position[2][0] === user[0].X_O_position[2][1]) ===
          user[0].X_O_position[2][2]
        ) {
          win = true;
          return res.json({ success: "true", Win: user[0].last_user[0] });
        }
        //1st-column
        if (
          (user[0].X_O_position[0][0] === user[0].X_O_position[1][0]) ===
          user[0].X_O_position[2][0]
        ) {
          win = true;
          return res.json({ success: "true", Win: user[0].last_user[0] });
        }
        //2nd-column
        if (
          (user[0].X_O_position[0][1] === user[0].X_O_position[1][1]) ===
          user[0].X_O_position[2][1]
        ) {
          win = true;
          return res.json({ success: "true", Win: user[0].last_user[0] });
        }
        //3rd-column
        if (
          (user[0].X_O_position[0][2] === user[0].X_O_position[1][2]) ===
          user[0].X_O_position[2][2]
        ) {
          win = true;
          return res.json({ success: "true", Win: user[0].last_user[0] });
        }
        //first-cross
        if (
          (user[0].X_O_position[0][0] === user[0].X_O_position[1][1]) ===
          user[0].X_O_position[2][2]
        ) {
          win = true;
          return res.json({ success: "true", Win: user[0].last_user[0] });
        }
        //last-cross
        if (
          (user[0].X_O_position[0][2] === user[0].X_O_position[1][1]) ===
          user[0].X_O_position[2][0]
        ) {
          win = true;
          return res.json({ success: "true", Win: user[0].last_user[0] });
        }

        //to check every
        console.log(`-----------after the chances------:  ${win}`)
        
        //Match Draw
        if (!win) {
          return res.status(200).json({
            game:user[0].X_O_position ,
            gameMessage:"Please proceed next move"
            // success: "true",
            // Win: "Nobody won Proceed to next move",
          });
        }
      }
    }
  } catch (e) {
    // res.send(e)
    console.log(e);
  }
};
