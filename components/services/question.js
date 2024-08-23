const {
  createQuestion,
  getQuestionByIdForAdmin,
  getQuestionsByCategory,
  getPesertaQuestions,
  deleteQuestionById,
} = require("../repositories/question");

const { updateUserById } = require("../repositories/auth");

const { createMultipleChoice } = require("../repositories/multipleChoice");

const { createAnswerKey } = require("../repositories/answerKeys");

exports.getQuestionsByCategory = async (payload) => {
  const data = await getQuestionsByCategory(payload);

  const shuffledData = data.sort(() => Math.random() - 0.5);

  return shuffledData;
};

exports.getPesertaQuestions = async (payload) => {
  const { userId, pointTotal, isDone, startTime } = payload;
  if (startTime) {
    await updateUserById();
  }
  if (isDone == true) {
    //return total poin
    return { pointTotal };
  } else {
    const data = await getPesertaQuestions(userId);
    const shuffledData = data.sort(() => Math.random() - 0.5);
    return shuffledData;
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

exports.deleteQuestionById = async (id) => {
  const data = await deleteQuestionById(id);

  if (data === 0) {
    const error = new Error("Data tidak ditemukan");
    error.statusCode = 404;
    throw error;
  }

  return data;
};
