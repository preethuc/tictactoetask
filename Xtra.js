
// const createPlayers = async (req, res, next) => {
//   try {
//     const data = await User.create(req.body);
//     res.status(201).json({
//       status: "success",
//       message: "created!",
//       createdData: data,
//     });
//   } catch (err) {
//     console.log(error.message);
//   }
// };
// const updateXposition = async (req, res, next) => {
//   try {
//     const user_id = req.params.id;
//     const user = await User.findById(user_id).exec();
//     let Xposition = user.Xposition;
//     //   console.log(Xposition);
//     if (user) {
//       Xposition.push(req.body.Xposition);
//       User.findByIdAndUpdate(
//         user_id,
//         { Xposition: Xposition },
//         { new: true },
//         function (err, data) {
//           if (err) {
//             console.log(err);
//             return res.json({
//               success: "success",
//               message: err.message,
//             });
//           } else {
//             // console.log(data.Xposition);
//             // if (data.Xposition === [3,5,7]||data.Xposition === [1,5,9]||data.Xposition === [4,5,6]) {
//             //   // return res.json({
//             //   //   message: "X is the winner"
//             //   // })
//             //    res.send("X is the winner")
//             // }
//             res.json({
//               success: "success",
//               message: "Added successfully",
//               user: data,
//             });
//           }
//         }
//       );
//     }
//   } catch (e) {
//     console.log(e);
//     return res.json({ message: e.message });
//   }
// };
// const updateOposition = async (req, res, next) => {
//   try {
//     const user_id = req.params.id;
//     const user = await User.findById(user_id).exec();
//     let Oposition = user.Oposition;
//     //   console.log(Oposition);
//     if (user) {
//       Oposition.push(req.body.Oposition);
//       User.findByIdAndUpdate(
//         user_id,
//         { Oposition: Oposition },
//         { new: true },
//         function (err, data) {
//           if (err) {
//             console.log(err);
//             return res.json({
//               success: "success",
//               message: err.message,
//             });
//           } else {
//             return res.json({
//               success: "success",
//               message: "Added successfully",
//               user: data,
//             });
//           }
//         }
//       );
//     }
//   } catch (e) {
//     console.log(e);
//     return res.json({ message: e.message });
//   }
// };

// const getPlayers = async (req, res, next) => {
//   try {
//     const users = await User.find();
//     res.status(200).json({
//       status: "success",
//       data: users,
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// const deletePlayer = async (req, res, next) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.status(204).json({
//       status: "success",

//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// const getWinner = async (req, res, next) => {
//   try {
//     const data = await User.find()
//     console.log(data[0]);
//     if (data[0].Xposition === [3, 5, 7] || data[0].Xposition === [1, 5, 9] || data[0].Xposition === [4, 5, 6]) {
//       console.log(data.Xposition);
//       return res.json({
//         message: "X is the winner"
//       })
//       //  res.send("X is the winner")
//     }
//   } catch (err) {
//     console.log(err.message);
//   }
//   }

// module.exports = { createPlayers, updateXposition, updateOposition, getPlayers,deletePlayer ,getWinner};







// DB Model;
// last_user: 'user_2',
// x_o_values :[
//               ['x','o', 'x'],
//               ['x','o', 'x'],
//               ['x','o', 'x']
//               ],

//   ---------------------------------------------------------
// let array = [
//               ['x','o', 'x'],
//               ['x','o', 'x'],
//               ['x','o', 'x']
//               ]

//   -----------------------------------------------------------
// req.body.position = array[0][1];
// req.body.value = "x";
// req.body.user = "user_1";



// const userSchema = new mongoose.Schema({
//   user1: {
//     type: String,
//   },
//   Xposition: [
//     {
//       type: Number,
//     },
//   ],
//   user2: {
//     type: String,
//   },
//   Oposition: [
//     {
//       type: Number,
//     },
//   ],
// });



// if(db.query.length == 0){
//     last_user: req.body.user
//     x_o_values:static_array
// }
// else{
//      result = db.query[0]
//      result.last_user = req.body.user
//      changed_array = result.x_o_values
//      changed_array[0][1] = req.body.value
//     //  update
// }

// if(update =success){
//     let win  = false
//    check =  db.query[0]
//    if (check.x_o_values[0][0] &&check.x_o_values[0][1] &&check.x_o_values[0][2] ){
//             win  = true

//  return res.json{success: "true",
//                   Win: check.last_user
//  }

//    }

//    if (check.x_o_values[0][0] == check.x_o_values[0][1] == check.x_o_values[0][2] ){

//        return res.json{success: "true",
//                         Win: check.last_user
//        }

//    }
//     if (check.x_o_values[1][0] == check.x_o_values[1][1] == check.x_o_values[1][2] ){
//                    win  = true

//        return res.json{success: "true",
//                         Win: check.last_user
//        }

//    }
//     if (check.x_o_values[2][0] == check.x_o_values[2][1] == check.x_o_values[2][2] ){
//                    win  = true

//        return res.json{success: "true",
//                         Win: check.last_user
//        }

//    }
//    if (check.x_o_values[0][0] == check.x_o_values[1][0] == check.x_o_values[2][0] ){

//        return res.json{success: "true",
//                         Win: check.last_user
//        }

//    }
//     if (check.x_o_values[0][0] == check.x_o_values[1][0] == check.x_o_values[2][0] ){

//        return res.json{success: "true",
//                         Win: check.last_user
//        }

//    }

//    if(win  = false){
//        return res.json{success: "true",
//                         Win: "Nobody won Proceed to next move
//        }
//    }

// }
