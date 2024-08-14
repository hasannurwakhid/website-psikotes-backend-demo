"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AnswerKey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AnswerKey.belongsTo(models.MultipleChoice, {
        foreignKey: "multipleChoiceId",
      });
    }
  }
  AnswerKey.init(
    {
      multipleChoiceId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "AnswerKey",
      paranoid: true,
    }
  );
  return AnswerKey;
};
