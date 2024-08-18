"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        nik: "123456789",
        name: "Hasan Nur Wakhid",
        email: "hasannurwakhid@gmail.com",
        phoneNumber: "082134308138",
        password: bcrypt.hashSync("12345", 10),
        role: "peserta",
        image: null,
        isDone: false,
        pointTotal: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nik: "999999999",
        name: "Albert",
        email: "albert@gmail.com",
        phoneNumber: "082134308138",
        password: bcrypt.hashSync("12345", 10),
        role: "peserta",
        image: null,
        isDone: false,
        pointTotal: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
