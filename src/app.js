import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser"
import userRoute from "./route/userRoute";

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("middleware working");
  next();
});

app.use("/api/tictac/", userRoute);

module.exports = app;
