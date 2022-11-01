import express from "express";

const router = express.Router();

import userController from "./../controller/userController";

// router.post("/create", userController.createPlayers);
// router.patch("/X/:id", userController.updateXposition);
// router.patch("/O/:id", userController.updateOposition);
// router.delete("/:id", userController.deletePlayer);
// router.get("/", userController.getPlayers);
// router.get("/win", userController.getWinner);

router.post("/create", userController.game);

module.exports = router;
