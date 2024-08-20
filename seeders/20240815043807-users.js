"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        nip: "000000000000",
        name: "superadmin1",
        email: "superadmin1@gmail.com",
        phoneNumber: "082134308133",
        password: bcrypt.hashSync("12345", 10),
        role: "superadmin",
        image: null,
        isDone: false,
        pointTotal: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nip: "111111111111",
        name: "admin1",
        email: "admin1@gmail.com",
        phoneNumber: "082134308133",
        password: bcrypt.hashSync("12345", 10),
        role: "admin",
        image: null,
        isDone: false,
        pointTotal: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nik: "222222222222",
        name: "peserta1",
        email: "peserta1@gmail.com",
        phoneNumber: "082134308133",
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
