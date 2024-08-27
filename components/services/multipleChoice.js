const { updateMultipleChoiceById } = require("../repositories/multipleChoice");

exports.updateMultipleChoiceById = async (id, payload) => {
  const data = await updateMultipleChoiceById(id, payload);
  return data[1];
};
