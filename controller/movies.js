const axios = require("axios");
module.exports = {
  getAll: async (req, res) => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/76341?api_key=3554211ccddedad28b58fe56cd457b08"
      )
      .then((response) => {
        res.status(200).json({ data: response.data });
      })
      .cath((err) => {
        res.status(404).json({ message: err.message });
      });
  },

  getMovies: async (req, res) => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=3554211ccddedad28b58fe56cd457b08&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      )
      .then((response) => {
        res.status(200).json({ data: response.data.results });
      })
      .cath((err) => {
        res.status(404).json({ message: err.message });
      });
  },

  getGenre: async (req, res) => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=3554211ccddedad28b58fe56cd457b08&language=en-US`
      )
      .then((response) => {
        res.status(200).json({ data: response.data.genres });
      })
      .cath((err) => {
        res.status(404).json({ message: err.message });
      });
  },
};
