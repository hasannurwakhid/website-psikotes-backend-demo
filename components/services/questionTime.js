const {
  getQuestionTime,
  updateQuestionTime,
} = require("../repositories/questionTime");

exports.getQuestionTime = async () => {
  const data = await getQuestionTime();
  return data;
};

exports.updateQuestionTime = async (payload) => {
  payload.questionTime = payload.questionTime * 60 * 1000;
  const data = await updateQuestionTime(payload);
  if (data[0] === 0) {
    const error = new Error("Data tidak ditemukan");
    error.statusCode = 404;
    throw error;
  }
  return data[1];
};
