const {
  createQuestion,
  getQuestionByIdForAdmin,
  getQuestionsByCategory,
  getPesertaQuestions,
  updateQuestionById,
  deleteQuestionById,
} = require("../repositories/question");

const { updateUserById } = require("../repositories/auth");

const { createMultipleChoice } = require("../repositories/multipleChoice");

const { createAnswerKey } = require("../repositories/answerKeys");

const { getQuestionTime } = require("../repositories/questionTime");

exports.getQuestionsByCategory = async (payload) => {
  const data = await getQuestionsByCategory(payload);

  const shuffledData = data.sort(() => Math.random() - 0.5);

  return shuffledData;
};

exports.getPesertaQuestions = async (payload) => {
  const { userId, pointTotal, isDone, startTime, timeToEnd, totalTime } =
    payload;
  let timeToEndFlex = timeToEnd;

  if (!startTime) {
    const startTimeDate = new Date();
    timeToEndFlex = new Date(
      startTimeDate.getTime() + (await getQuestionTime())
    );
    await updateUserById(userId, {
      startTime: startTimeDate,
      timeToEnd: timeToEndFlex,
    });
  }
  if (isDone == true) {
    //return total poin
    return { pointTotal, totalTime };
  } else {
    const data = await getPesertaQuestions(userId);
    const shuffledData = data.sort(() => Math.random() - 0.5);

    const remainingTime = timeToEndFlex.getTime() - new Date().getTime();

    return { remainingTime, shuffledData };
  }
};

exports.createQuestion = async (payload) => {
  const { question, image, point, categoryId, multipleChoices, correctAnswer } =
    payload;
  const createdQuestion = await createQuestion({
    question,
    image,
    point,
    categoryId,
  });

  let correctAnswerId;

  for (let i = 0; i < multipleChoices.length; i++) {
    const createdMultipleChoice = await createMultipleChoice({
      image: multipleChoices[i].image,
      description: multipleChoices[i].description,
      questionId: createdQuestion.id,
    });

    if (i + 1 === correctAnswer) {
      correctAnswerId = createdMultipleChoice.id;
    }
  }

  if (correctAnswerId) {
    await createAnswerKey({
      multipleChoiceId: correctAnswerId,
    });
  }

  return getQuestionByIdForAdmin(createdQuestion.id);
};

exports.updateQuestionById = async (id, payload) => {
  const data = updateQuestionById(id, payload);
  if (data[0] === 0) {
    const error = new Error("Data tidak ditemukan")
    error.statusCode = 404
    throw error
  }
  return data;
};

exports.deleteQuestionById = async (id) => {
  const data = await deleteQuestionById(id);

  if (data === 0) {
    const error = new Error("Data tidak ditemukan");
    error.statusCode = 404;
    throw error;
  }

  return data;
};
