"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("MultipleChoices", [
      {
        description: "17 Agustus 1944",
        questionId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "15 Mei 2024",
        questionId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "17 Agustus 1945",
        questionId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "1 April 1950",
        questionId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "9 Maret 1977",
        questionId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      //====================================================
      {
        description: "buruk",
        questionId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "suka",
        questionId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "lama",
        questionId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "cepat",
        questionId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "manis",
        questionId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("MultipleChoiches", null, {});
  },
};
