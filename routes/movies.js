const express = require("express");
const router = express.Router();
const controllerMovies = require("../controller/movies");

router.get("/get_movies/:id", controllerMovies.getMovies);
router.get("/get_popular", controllerMovies.getPopular);
router.get("/get_genre", controllerMovies.getGenre);
router.get("/get_detail/:id", controllerMovies.getDetail);
router.get("/get_casting/:id", controllerMovies.getCasting);

module.exports = router;
