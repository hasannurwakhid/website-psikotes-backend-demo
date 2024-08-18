"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Questions", {
      fields: ["categoryId"],
      type: "foreign key",
      name: "fk-to-Questions-categoryId",
      references: {
        table: "Categories",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "Questions",
      "fk-to-Questions-categoryId"
    );
  },
};
