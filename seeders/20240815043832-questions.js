"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Questions", [
      {
        question: "Indonesia merdeka pada tanggal?",
        image: null,
        point: 10,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Lawan kata "baik"`,
        image: null,
        point: 10,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Di negara Indonesia ada berapa provinsi?",
        image: null,
        point: 10,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Pulau terbesar di Indonesia adalah?",
        image: null,
        point: 10,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
