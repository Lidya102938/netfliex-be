const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
const upload = require("../middleware/middleware");

router.post("/sign_up", userController.signUp);
router.post("/login", userController.login);
router.put("/update_user/:id", userController.update);
router.put(
  "/upload_avatar/:id",
  upload.single("image"),
  userController.uploadAvatar
);
router.get("/get_one_user/:id", userController.getOneUser);

module.exports = router;
