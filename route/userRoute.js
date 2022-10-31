const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/create", userController.createMove);
router.patch("/X/:id", userController.updateXposition);
router.patch("/O/:id", userController.updateOposition);
router.get("/", userController.getUsers);

module.exports = router;
