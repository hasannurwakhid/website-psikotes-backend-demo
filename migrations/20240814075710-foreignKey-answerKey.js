"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("AnswerKeys", {
      fields: ["multipleChoiceId"],
      type: "foreign key",
      name: "fk-to-AnswerKeys-multipleChoiceId",
      references: {
        table: "MultipleChoices",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "AnswerKeys",
      "fk-to-AnswerKeys-multipleChoiceId"
    );
  },
};
