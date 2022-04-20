"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mylist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mylist.init(
    {
      userId: DataTypes.INTEGER,
      moviesId: DataTypes.INTEGER,
      isMyList: DataTypes.BOOLEAN,
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      date: DataTypes.STRING,
      genre: DataTypes.STRING,
      casting: DataTypes.STRING,
      overview: DataTypes.STRING,
      rating: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "mylist",
    }
  );
  return mylist;
};
