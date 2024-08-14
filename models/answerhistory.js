"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AnswerHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AnswerHistory.belongsTo(models.User, { foreignKey: "userId" });
      AnswerHistory.belongsTo(models.MultipleChoice, {
        foreignKey: "multipleChoiceId",
      });
    }
  }
  AnswerHistory.init(
    {
      userId: DataTypes.INTEGER,
      multipleChoiceId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "AnswerHistory",
      paranoid: true,
    }
  );
  return AnswerHistory;
};
