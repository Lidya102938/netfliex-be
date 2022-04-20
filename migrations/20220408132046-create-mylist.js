"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("mylists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      moviesId: {
        type: Sequelize.INTEGER,
      },
      isMyList: {
        type: Sequelize.BOOLEAN,
      },
      title: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.STRING,
      },
      genre: {
        type: Sequelize.STRING,
      },
      casting: {
        type: Sequelize.STRING,
      },
      overview: {
        type: Sequelize.STRING,
      },
      rating: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("mylists");
  },
};
