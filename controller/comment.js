const { Comment } = require("../helper/relation");
module.exports = {
  createComment: async (req, res) => {
    try {
      const data = await Comment.create({
        image: req.body.image,
        nama: req.body.nama,
        filmId: req.body.filmId,
        title: req.body.title,
        text_comment: req.body.text_comment,
        rating: req.body.rating,
      });
      res.status(202).json({ message: "succes comment", data: data });
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },
  getCommentById: async (req, res) => {
    try {
      const data = await Comment.findAll();
      res.status(202).json({ message: "succes get comment", data: data });
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },
};
