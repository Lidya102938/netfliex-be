const express = require("express");
const router = express.Router();
const commentController = require("../controller/Comment");

router.post(`/create_comment`, commentController.createComment);
router.get(`/getAllComment`, commentController.getCommentById);

module.exports = router;
