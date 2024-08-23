const { getAnswerHistoriesByUserId } = require("../repositories/answerHistory");
const {
  getUsers,
  getUsersByRole,
  updateUserById,
} = require("../repositories/auth");

exports.calculateTotalPoint = async (userId) => {
  const data = await getAnswerHistoriesByUserId(userId);
  const totalPoints = data.reduce((total, answerHistory) => {
    if (
      answerHistory?.multipleChoiceId ==
      answerHistory?.MultipleChoice?.AnswerKey?.multipleChoiceId
    ) {
      const points = answerHistory.MultipleChoice.Question.point;
      return total + points;
    }
    return total;
  }, 0);

  await updateUserById(userId, { isDone: true, pointTotal: totalPoints });

  return { pointTotal: totalPoints };
};

exports.getAveragePesertaPoints = async () => {
  const data = await getUsersByRole("peserta");
  const pesertaPoints = data.reduce((total, user) => {
    const points = user.pointTotal;
    return total + points;
  }, 0);
  const averagePesertaPoints = pesertaPoints / data.length;
  return { averagePesertaPoints };
};
