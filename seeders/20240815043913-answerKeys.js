"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("AnswerKeys", [
      {
        multipleChoiceId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        multipleChoiceId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("AnswerKeys", null, {});
  },
};
