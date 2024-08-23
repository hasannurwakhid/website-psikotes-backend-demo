"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("AnswerHistories", [
      {
        userId: 3,
        multipleChoiceId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        multipleChoiceId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        multipleChoiceId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("AnswerHistories", null, {});
  },
};
