const {
  AnswerHistory,
  MultipleChoice,
  Question,
  AnswerKey,
} = require("../../models");

exports.getAnswerHistories = async () => {
  const data = await AnswerHistory.findAll();
  return data;
};

exports.getAnswerHistoriesByUserId = async (userId) => {
  const data = await AnswerHistory.findAll({
    where: {
      userId,
    },
    include: [
      {
        model: MultipleChoice,
        include: [
          {
            model: Question,
          },
          {
            model: AnswerKey,
          },
        ],
      },
    ],
  });
  return data;
};

exports.createAnswerHistory = async (payload) => {
  const data = await AnswerHistory.create(payload);
  return data;
};

exports.updateAnswerHistory = async (id, payload) => {
  const data = await AnswerHistory.update(payload, {
    where: { id },
  });
  return data;
};

exports.getAnswerHistoriesMultipleChoiceId = async (payload) => {
  const { userId, questionId } = payload;
  const data = await AnswerHistory.findOne({
    where: { userId },
    include: [
      {
        model: MultipleChoice,
        where: { questionId },
      },
    ],
  });
  return data;
};
