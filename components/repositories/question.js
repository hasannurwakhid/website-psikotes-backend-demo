const {
  Question,
  Category,
  MultipleChoice,
  AnswerHistory,
  AnswerKey,
} = require("../../models");

exports.getQuestionsByCategory = async (payload) => {
  const { categoryId, userId } = payload;
  const data = await Question.findAll({
    where: { categoryId },
    include: [
      {
        model: Category,
      },
      {
        model: MultipleChoice,
        include: [
          {
            model: AnswerHistory,
            where: { userId },
            required: false,
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

exports.getPesertaQuestions = async (userId) => {
  const data = await Question.findAll({
    include: [
      {
        model: Category,
      },
      {
        model: MultipleChoice,
        include: [
          {
            model: AnswerHistory,
            where: { userId },
            required: false,
          },
        ],
      },
    ],
  });
  return data;
};

exports.createQuestion = async (payload) => {
  const data = await Question.create(payload);
  return data;
};
