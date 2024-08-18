const { MultipleChoice } = require("../../models");

exports.getMultipleChoiceById = async (id) => {
  const data = await MultipleChoice.findOne({ where: { id } });
  return data;
};
