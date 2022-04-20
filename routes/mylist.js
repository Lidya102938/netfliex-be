const express = require("express");
const router = express.Router();
const myListController = require("../controller/mylist");

router.post(`/create_mylist`, myListController.createMyList);
router.put(`/update_mylist/:id`, myListController.updateMyList);
router.delete(`/delete_mylist/:id`, myListController.deleteMyList);
router.get(`/get_all`, myListController.getAll);
router.get(`/get_one_mylist`, myListController.getOneMyList);

module.exports = router;
