const { QuestionTime } = require("../../models");

exports.getQuestionTime = async () => {
  const data = await QuestionTime.findOne();
  return data.questionTime;
};

exports.updateQuestionTime = async (payload) => {
  const data = await QuestionTime.update(payload, {
    where: {},
    limit: 1,
    returning: true,
  });
  return data;
};
