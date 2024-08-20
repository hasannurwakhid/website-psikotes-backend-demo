"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nik: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      nip: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      pointTotal: {
        type: Sequelize.INTEGER,
      },
      totalTime: {
        type: Sequelize.INTEGER,
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isDone: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
