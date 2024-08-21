const { MultipleChoice } = require("../../models");

exports.getMultipleChoiceById = async (id) => {
  const data = await MultipleChoice.findOne({ where: { id } });
  return data;
};

exports.createMultipleChoice = async (payload) => {
  const data = await MultipleChoice.create(payload);
  return data;
};
