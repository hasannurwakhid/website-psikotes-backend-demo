"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("AnswerHistories", {
      fields: ["userId"],
      type: "foreign key",
      name: "fk-to-AnswerHistories-userId",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    await queryInterface.addConstraint("AnswerHistories", {
      fields: ["multipleChoiceId"],
      type: "foreign key",
      name: "fk-to-AnswerHistories-multipleChoiceId",
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
      "AnswerHistories",
      "fk-to-AnswerHistories-userId"
    );
    await queryInterface.removeConstraint(
      "AnswerHistories",
      "fk-to-AnswerHistories-multipleChoiceId"
    );
  },
};
