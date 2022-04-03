const { DataTypes } = require("sequelize");
const sequelize = require("../models/index").sequelize;
const User = require("../models/user")(sequelize, DataTypes);

// User.hasMany(Movies, { foreignKey: "userId" });

module.exports = { User };
