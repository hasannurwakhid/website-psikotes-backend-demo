const { getQuestionTime } = require("../repositories/questionTime");

exports.getQuestionTime = async () => {
  const data = await getQuestionTime();
  return data;
};
