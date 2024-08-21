"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", [
      {
        category: "Sinonim",
        // time: 15 * 60 * 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Antonim",
        // time: 15 * 60 * 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
