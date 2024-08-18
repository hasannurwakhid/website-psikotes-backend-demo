"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Terms", [
      {
        description: "Peserta dilarang kayang",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Peserta dilarang salto",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Peserta dilarang pushup",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Terms", null, {});
  },
};
