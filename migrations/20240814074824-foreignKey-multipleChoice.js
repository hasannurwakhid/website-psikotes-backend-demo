"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("MultipleChoices", {
      fields: ["questionId"],
      type: "foreign key",
      name: "fk-to-MultipleChoices-questionId",
      references: {
        table: "Questions",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "MultipleChoices",
      "fk-to-MultipleChoices-questionId"
    );
  },
};
