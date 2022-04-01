const { DataTypes } = require("sequelize");
const sequelize = require("./models/index").sequelize;
const express = require("express");
const jsonwebtoken = require("jsonwebtoken");
const app = express();
const user = require("./routes/user")

app.use(express.json())

app.use(user);

app.listen(3000, () => console.log("Listening at port: " + 3000));