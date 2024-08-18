const {
  getAnswerHistories,
  getAnswerHistoriesMultipleChoiceId,
  createAnswerHistory,
  updateAnswerHistory,
} = require("../repositories/answerHistory");

const { getMultipleChoiceById } = require("../repositories/multipleChoice");

exports.answerQuestion = async (payload) => {
  const { userId, multipleChoiceId } = payload;

  const { questionId } = await getMultipleChoiceById(multipleChoiceId);

  const answerHistory = await getAnswerHistoriesMultipleChoiceId({
    userId,
    questionId,
  });

  if (answerHistory) {
    await updateAnswerHistory(answerHistory.id, { userId, multipleChoiceId });
  } else {
    await createAnswerHistory({ userId, multipleChoiceId });
  }

  return null;
};
