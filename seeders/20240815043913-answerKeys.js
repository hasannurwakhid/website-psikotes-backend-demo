"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {},

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("AnswerKeys", null, {});
  },
};
