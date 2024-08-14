"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MultipleChoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MultipleChoice.belongsTo(models.Question, { foreignKey: "questionId" });
      MultipleChoice.hasOne(models.AnswerKey, {
        foreignKey: "multipleChoiceId",
      });
      MultipleChoice.hasMany(models.AnswerHistory, {
        foreignKey: "multipleChoiceId",
      });
    }
  }
  MultipleChoice.init(
    {
      description: DataTypes.TEXT,
      questionId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "MultipleChoice",
      paranoid: true,
    }
  );
  return MultipleChoice;
};
