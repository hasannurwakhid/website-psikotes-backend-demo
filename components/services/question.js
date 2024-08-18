const {
  getQuestionsByCategory,
  getPesertaQuestions,
} = require("../repositories/question");

exports.getQuestionsByCategory = async (payload) => {
  const data = await getQuestionsByCategory(payload);

  const shuffledData = data.sort(() => Math.random() - 0.5);

  return shuffledData;
};

exports.getPesertaQuestions = async (payload) => {
  const { userId, pointTotal, isDone } = payload;

  if (isDone == true) {
    //return total poin
    return { pointTotal };
  } else {
    const data = await getPesertaQuestions(userId);
    const shuffledData = data.sort(() => Math.random() - 0.5);
    return shuffledData;
  }
};
