const express = require("express");
const router = express.Router();
const controllerMovies = require("../controller/movies");

router.get("/get_all", controllerMovies.getAll);
router.get("/get_movies", controllerMovies.getMovies);
router.get("/get_genre", controllerMovies.getGenre);

module.exports = router;
