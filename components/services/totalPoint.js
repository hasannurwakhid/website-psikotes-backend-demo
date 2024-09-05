const { getAnswerHistoriesByUserId } = require("../repositories/answerHistory");
const {
  getUsers,
  getUsersByRole,
  getUsersByRoleAndIsDone,
  updateUserById,
} = require("../repositories/auth");

exports.calculateTotalPoint = async (payload) => {
  const { startTime, userId } = payload;
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

  const endTime = new Date();

  await updateUserById(userId, {
    isDone: true,
    pointTotal: totalPoints,
    endTime: endTime,
    totalTime: endTime.getTime() - startTime.getTime(),
  });

  return { pointTotal: totalPoints };
};

exports.getAveragePesertaPoints = async () => {
  const data = await getUsersByRoleAndIsDone("peserta");
  const doneCount = data.length;
  const pesertaPoints = data.reduce((total, user) => {
    const points = user.pointTotal;
    return total + points;
  }, 0);
  const averagePesertaPoints = pesertaPoints / data.length;
  return { averagePesertaPoints, doneCount };
};
