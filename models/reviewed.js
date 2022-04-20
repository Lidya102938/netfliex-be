"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class reviewed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reviewed.init(
    {
      userId: DataTypes.INTEGER,
      filmId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      time: DataTypes.STRING,
      genre: DataTypes.STRING,
      casting: DataTypes.STRING,
      overview: DataTypes.STRING,
      vote: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "reviewed",
    }
  );
  return reviewed;
};
