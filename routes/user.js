const express = require("express");
const userController = require("../controller/userController")

router = express.Router();

router.post("/register", userController.registerAccount);
router.get("/user", userController.getAllUser);
router.get("/user/:username", userController.getUserByUsername);
router.post("/user/login", userController.login);



exports.router = router;