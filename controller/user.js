const { User } = require("../helper/relation");
const { hash, compare } = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  signUp: async (req, res) => {
    const saltRound = 10;
    const password = req.body.password;
    const hashPassword = await hash(password, saltRound);
    try {
      const data = await User.create({
        email: req.body.email,
        fullName: req.body.fullName,
        password: hashPassword,
      });
      res.json(data);
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },
  login: async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const data = await User.findOne({
        where: {
          email: email,
        },
      });
      if (!data) {
        throw Error("Data tidak ditemukan");
      }
      const isVeryvied = await compare(password, data.password);
      if (!isVeryvied) {
        throw Error("Password salah");
      }

      const payload = {
        id: data.id,
        fullName: data.fullName,
      };
      const token = jwt.sign(payload, "token");
      res.json({
        message: "Berhasil masuk",
        fullName: data.fullName,
        token: token,
      });
    } catch (err) {
      res.json({ msg: err.message });
    }
  },
  update: async function (req, res) {
    const id = req.params.id;
    const data = await User.update(
      { email: req.body.email, password: req.body.password },
      {
        where: {
          id: id,
        },
      }
    );
    res.json({ message: "Data berhasil di update" });
  },
  getOneUser: async (req, res) => {
    const data = await User.findOne({
      where: { id: req.params.id },
    });
    res.status(202).json({ message: "berhasil", data: data });
  },
};
