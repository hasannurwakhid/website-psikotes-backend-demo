const {
  createQuestion,
  getQuestionByIdForAdmin,
  getQuestionsByCategory,
  getPesertaQuestions,
  getAllQuestionId,
  updateQuestionById,
  deleteQuestionById,
} = require("../repositories/question");

const { updateUserById } = require("../repositories/auth");

const { createMultipleChoice } = require("../repositories/multipleChoice");

const { createAnswerKey } = require("../repositories/answerKeys");

const { getQuestionTime } = require("../repositories/questionTime");

exports.getAllQuestions = async () => {
  const data = await getAllQuestionId();
  return data;
};

exports.getQuestionsByCategory = async (payload) => {
  const data = await getQuestionsByCategory(payload);
  return data;
};

exports.getPesertaQuestions = async (payload) => {
  const { userId, pointTotal, isDone, startTime, timeToEnd, totalTime } =
    payload;

  let questionOrder = payload?.questionOrder;
  let timeToEndFlex = timeToEnd;

  if (!startTime) {
    const startTimeDate = new Date();
    timeToEndFlex = new Date(
      startTimeDate.getTime() + (await getQuestionTime())
    );

    // Generate shuffled question order on first attempt
    const questions = await getAllQuestionId();
    questionOrder = questions.map((q) => q.id).sort(() => Math.random() - 0.5);

    await updateUserById(userId, {
      startTime: startTimeDate,
      timeToEnd: timeToEndFlex,
      questionOrder: JSON.stringify(questionOrder),
    });
  }
  if (isDone == true) {
    //return total poin
    return { pointTotal, totalTime };
  } else {
    if (typeof questionOrder === "string") {
      questionOrder = JSON.parse(questionOrder);
    }
    const pesertaQuestions = await getPesertaQuestions(userId);
    // const shuffledData = data.sort(() => Math.random() - 0.5);
    const orderedPesertaQuestions = questionOrder.map((id) =>
      pesertaQuestions.find((question) => question.id === id)
    );

    let remainingTime = timeToEndFlex.getTime() - new Date().getTime();

    if (remainingTime < 0) {
      remainingTime = 0;
    }

    return { remainingTime, shuffledData: orderedPesertaQuestions };
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
  const data = await updateQuestionById(id, payload);
  return data[1];
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
