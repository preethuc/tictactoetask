const mongoose = require('mongoose')
const app = require('./app')

//mongoose connection
mongoose.connect('mongodb://localhost:27017/Data-TicTac');
mongoose.connection
  .once('open', () => {
    console.log('Database connected');
  })
  .on('error', (error) => {
    console.log('error is:', error);
  });

app.listen(3000, () => {
    console.log("server working on the port 3000");
})