"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.AnswerHistory, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      nik: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      password: DataTypes.TEXT,
      pointTotal: DataTypes.INTEGER,
      totalTime: DataTypes.INTEGER,
      role: DataTypes.STRING,
      image: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
      paranoid: true,
    }
  );
  return User;
};
