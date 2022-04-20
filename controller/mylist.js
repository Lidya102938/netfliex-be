const { MyList } = require("../helper/relation");
module.exports = {
  createMyList: async (req, res) => {
    try {
      const data = await MyList.create({
        userId: req.body.userId,
        isMyList: req.body.isMyList,
        moviesId: req.body.moviesId,
        date: req.body.date,
        image: req.body.image,
        title: req.body.title,
        overview: req.body.overview,
        rating: req.body.rating,
        genre: req.body.genre,
        casting: req.body.casting,
      });
      res.status(202).json({ message: "succes mylist", data: data });
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },

  updateMyList: async (req, res) => {
    try {
      const data = await MyList.update(
        {
          userId: req.body.userId,
          moviesId: req.body.moviesId,
          isMyList: req.body.isMyList,
          title: req.body.title,
          image: req.body.image,
          date: req.body.date,
          overview: req.body.overview,
          rating: req.body.rating,
          genre: req.body.genre,
          casting: req.body.casting,
        },
        {
          where: { id: req.params.id },
        }
      );
      res.status(202).json({ message: "succes mylist", data: data });
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },
  deleteMyList: async (req, res) => {
    try {
      const data = await MyList.destroy({
        where: { id: req.params.id },
      });
      res.status(202).json({ message: "succes mylist" });
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },
  getAll: async (req, res) => {
    try {
      const data = await MyList.findAll({
        offset: JSON.parse(req.query.page),
        limit: JSON.parse(req.query.size),
      });
      res.status(202).json({ message: "succes mylist", data: data });
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },
  getOneMyList: async (req, res) => {
    try {
      const data = await MyList.findOne({
        where: { moviesId: req.query.moviesId },
      });
      res.status(202).json({ message: "succes mylist", data: data });
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },
};
