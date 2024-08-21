const { AnswerKey } = require("../../models");

exports.createAnswerKey = async (payload) => {
  const data = await AnswerKey.create(payload);
  return data;
};
