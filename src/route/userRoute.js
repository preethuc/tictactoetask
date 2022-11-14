import express from "express";

const router = express.Router();

import userController from "./../controller/userController";



router.post("/create", userController.game);

module.exports = router;
