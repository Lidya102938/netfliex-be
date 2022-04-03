require("dotenv").config();
const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.post("/sign_up", userController.signUp);
router.post("/login", userController.login);
router.put("/update/:id", userController.update);
router.get("/get_one_user/:id", userController.getOneUser);

module.exports = router;
