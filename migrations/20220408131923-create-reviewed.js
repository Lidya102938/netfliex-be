"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("revieweds", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      filmId: {
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      time: {
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
      vote: {
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
    await queryInterface.dropTable("revieweds");
  },
};
