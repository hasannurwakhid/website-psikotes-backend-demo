const { AnswerKey } = require("../../models");

exports.createAnswerKey = async (payload) => {
  const data = await AnswerKey.create(payload);
  return data;
};

exports.udpateAnswerKeyById = async (id, payload) => {
  const data = await AnswerKey.update(payload, {
    where: {
      id,
    },
    returning: true,
  });
  return data;
};
