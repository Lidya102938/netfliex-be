const { DataTypes } = require("sequelize");
const sequelize = require("../models/index").sequelize;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user")(sequelize,DataTypes)


module.exports = {
    signUp: async (req, res) => {
      const saltRound = 10;
      const password = req.body.password;
      const hashPassword = await bcrypt.hash(password, saltRound);
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
          const isVeryvied = await bcrypt.compare(password, data.password);
          if (!isVeryvied) {
            throw Error("Password salah");
          }
    
          const payload = {
            id: data.dataValues.id,
            firstname: data.dataValues.firstname,
          };
          const token = jwt.sign(payload,"token");
          res.json({
            token: token,
            message: "Berhasil masuk",
          });
        } catch (err) {
          res.json({ msg: err.message });
        }
      },
      update: async function (req, res) {
        const id = req.params.id;
        const data = await User.update(
          { email: req.body.email, password:req.body.password},
          {
            where: {
              id: id,
            },
          }
        );
        res.json({ pesan: "Data berhasil di update" });
      },
}