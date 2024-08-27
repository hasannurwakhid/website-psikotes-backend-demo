const {
  createQuestion,
  getQuestionsByCategory,
  getPesertaQuestions,
  updateQuestionById,
  deleteQuestionById,
} = require("../services/question");

exports.getQuestionsByCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.body;
    const userId = req?.user?.id;

    const data = await getQuestionsByCategory({ categoryId, userId });
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getPesertaQuestions = async (req, res, next) => {
  try {
    const userId = req?.user?.id;
    const pointTotal = req?.user?.pointTotal;
    const isDone = req?.user?.isDone;
    const startTime = req?.user?.startTime;
    const timeToEnd = req?.user?.timeToEnd;
    const totalTime = req?.user?.totalTime;
    const questionOrder = req?.user?.questionOrder;

    const data = await getPesertaQuestions({
      userId,
      pointTotal,
      isDone,
      startTime,
      timeToEnd,
      totalTime,
      questionOrder,
    });
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.createQuestions = async (req, res, next) => {
  try {
    const {
      question,
      point,
      categoryId,
      multipleChoice1,
      multipleChoice2,
      multipleChoice3,
      multipleChoice4,
      multipleChoice5,
      correctAnswer,
    } = req.body;

    const imageQuestion = req?.files?.imageQuestion;
    const multipleChoiceImg1 = req?.files?.multipleChoiceImg1;
    const multipleChoiceImg2 = req?.files?.multipleChoiceImg2;
    const multipleChoiceImg3 = req?.files?.multipleChoiceImg3;
    const multipleChoiceImg4 = req?.files?.multipleChoiceImg4;
    const multipleChoiceImg5 = req?.files?.multipleChoiceImg5;

    const multipleChoices = [
      {
        description: multipleChoice1,
        image: multipleChoiceImg1,
      },
      {
        description: multipleChoice2,
        image: multipleChoiceImg2,
      },
      {
        description: multipleChoice3,
        image: multipleChoiceImg3,
      },
      {
        description: multipleChoice4,
        image: multipleChoiceImg4,
      },
      {
        description: multipleChoice5,
        image: multipleChoiceImg5,
      },
    ];

    const correctAnswerInt = parseInt(correctAnswer, 10);

    const data = await createQuestion({
      image: imageQuestion,
      question,
      point,
      categoryId,
      multipleChoices,
      correctAnswer: correctAnswerInt,
    });

    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateQuestionById = async (req, res, next) => {
  try {
    const { question, point, categoryId } = req.body;
    const questionId = req?.params?.id;
    const imageQuestion = req?.files?.imageQuestion;
    const data = await updateQuestionById(questionId, {
      question,
      point,
      categoryId,
      image: imageQuestion,
    });
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteQuestionById = async (req, res, next) => {
  try {
    const id = req?.params?.id;

    if (id == "" || !id) {
      return next({
        message: "Id dari question harus diisi",
        statusCode: 400,
      });
    }

    const data = await deleteQuestionById(id);

    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
