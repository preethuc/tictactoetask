const express = require("express");
const morgan = require("morgan");
const userRoute = require("./route/userRoute");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("middleware working");
  next();
});

app.use("/api/tictac/", userRoute);

module.exports = app;
