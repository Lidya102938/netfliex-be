require("dotenv").config();
const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.post("/signUp", userController.signUp);

router.post("/login", userController.login);

router.put("/update/:id", userController.update);

module.exports = router;