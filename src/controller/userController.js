import User from "./../model/userModel";

exports.game = async (req, res) => {
  try {
    const doc = await User.find();
    const position1 = req.body.position1;
    const position2 = req.body.position2;

    if (doc.length === 0) {
      let static_array = [
        [1, 0, 1],
        [0, 1, 0],
        [0, 1, 0],
      ];
      console.log(static_array);
      static_array[position1][position2] = req.body.value;

      console.log(req.body.value);

      console.log(static_array);
      const user = await User.create({
        last_user: req.body.last_user,
        X_O_position: static_array,
      });

      return res.json({
        data: user,
      });
    } else {
      const result = doc[0];
      let changed_array = result.X_O_position;
      changed_array[position1][position2] = await req.body.value;

      console.log(changed_array);
      //  update
      // console.log()

      const updation = await User.updateMany({
        last_user: req.body.last_user,
        X_O_position: changed_array,
      });

      if (updation.acknowledged) {
        const user = await User.find();
        let win = false;

        //1st-row
        if (
          user[0].X_O_position[0][0] === user[0].X_O_position[0][1] &&
          user[0].X_O_position[0][0] === user[0].X_O_position[0][2]
        ) {
          win = true;
          return res.json({
            success: "true",
            Win: `Winner of the match : ${user[0].last_user} by 1st-row`,
          });
        }
        //2nd-row
        if (
          user[0].X_O_position[1][0] === user[0].X_O_position[1][1] &&
          user[0].X_O_position[1][0] === user[0].X_O_position[1][2]
        ) {
          win = true;
          return res.json({
            success: "true",
            Win: `Winner of the match : ${user[0].last_user} by 2nd-row`,
          });
        }
        //3rd-row
        if (
          user[0].X_O_position[2][0] === user[0].X_O_position[2][1] &&
          user[0].X_O_position[2][0] === user[0].X_O_position[2][2]
        ) {
          win = true;
          return res.json({
            success: "true",
            Win: `Winner of the match : ${user[0].last_user} by 3rd-row`,
          });
        }
        //1st-column
        if (
          user[0].X_O_position[0][0] === user[0].X_O_position[1][0] &&
          user[0].X_O_position[0][0] === user[0].X_O_position[2][0]
        ) {
          win = true;
          return res.json({
            success: "true",
            Win: `Winner of the match : ${user[0].last_user} by 1st-column`,
          });
        }
        //2nd-column
        if (
          user[0].X_O_position[0][1] === user[0].X_O_position[1][1] &&
          user[0].X_O_position[0][1] === user[0].X_O_position[2][1]
        ) {
          win = true;

          return res.json({
            success: "true",
            Win: `Winner of the match : ${user[0].last_user} by 2nd-column`,
          });
        }
        //3rd-column
        if (
          user[0].X_O_position[0][2] === user[0].X_O_position[1][2] &&
          user[0].X_O_position[0][2] === user[0].X_O_position[2][2]
        ) {
          win = true;
          return res.json({
            success: "true",
            Win: `Winner of the match : ${user[0].last_user} by 3rd-column`,
          });
        }
        //left-cross
        if (
          user[0].X_O_position[0][0] === user[0].X_O_position[1][1] &&
          user[0].X_O_position[0][0] === user[0].X_O_position[2][2]
        ) {
          win = true;
          return res.json({
            success: "true",
            Win: `Winner of the match : ${user[0].last_user} by left-cross `,
          });
        }
        //right-cross
        if (
          user[0].X_O_position[0][2] === user[0].X_O_position[1][1] &&
          user[0].X_O_position[0][2] === user[0].X_O_position[2][0]
        ) {
          win = true;
          return res.json({
            success: "true",
            Win: ` Winner of the match : ${user[0].last_user} by right-cross`,
          });
        }
        console.log(win);
        //Match Draw
        if (!win) {
          return res.status(200).json({
            game: user[0].X_O_position,
            gameMessage: "Please proceed to next move",
          });
          
        }

       
      
      }
     
    }

  } catch (error) {
    res.send(error);
    console.log(error);
  }
};
