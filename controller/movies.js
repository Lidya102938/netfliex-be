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
    const page = req.params.page;
    const genreId = req.params.genreId;
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=3554211ccddedad28b58fe56cd457b08&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreId}&with_watch_monetization_types=flatrate`
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
  getTopAiring: async (req, res) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=3554211ccddedad28b58fe56cd457b08&language=en-US&page=1`
      )
      .then((response) => {
        res.status(200).json({ data: response.data.results });
      })
      .cath((err) => {
        res.status(404).json({ message: err.message });
      });
  },
  getDetail: async (req, res) => {
    const id = req.params.id;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3554211ccddedad28b58fe56cd457b08&language=en-US`
      )
      .then((response) => {
        res.status(200).json({ data: response.data });
      })
      .cath((err) => {
        res.status(404).json({ message: err.message });
      });
  },
  getCasting: async (req, res) => {
    const id = req.params.id;
    axios
      .get(
        `
        https://api.themoviedb.org/3/movie/${id}/credits?api_key=3554211ccddedad28b58fe56cd457b08&language=en-US`
      )
      .then((response) => {
        res.status(200).json({ data: response.data });
      })
      .cath((err) => {
        res.status(404).json({ message: err.message });
      });
  },
  getTrailer: async (req, res) => {
    const id = req.params.id;
    axios
      .get(
        `
        https://api.themoviedb.org/3/movie/${id}/videos?api_key=3554211ccddedad28b58fe56cd457b08&language=en-US`
      )
      .then((response) => {
        res.status(200).json({ data: response.data });
      })
      .cath((err) => {
        res.status(404).json({ message: err.message });
      });
  },

  getSearch: async (req, res) => {
    const query = req.params.query;

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=3554211ccddedad28b58fe56cd457b08&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then((response) => {
        res.status(200).json({ data: response.data.results });
      })
      .cath((err) => {
        res.status(404).json({ message: err.message });
      });
  },
  getTvSeries: async (req, res) => {
    const page = req.params.page;
    axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=3554211ccddedad28b58fe56cd457b08&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
      )
      .then((response) => {
        res.status(200).json({ data: response.data.results });
      })
      .cath((err) => {
        res.status(404).json({ message: err.message });
      });
  },
  getOneTvSeries: async (req, res) => {
    const id = req.query.id;
    try {
      axios
        .get(
          `
          https://api.themoviedb.org/3/tv/${id}?api_key=3554211ccddedad28b58fe56cd457b08&language=en-US`
        )
        .then((response) => {
          res.status(200).json({ data: response.data.results });
        });
      // .cath((err) => {
      //   res.status(404).json({ message: err.message });
      // });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};
