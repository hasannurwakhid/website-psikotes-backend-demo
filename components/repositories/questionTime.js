const { QuestionTime } = require("../../models");

exports.getQuestionTime = async () => {
  const data = await QuestionTime.findOne();
  return data.questionTime;
};
