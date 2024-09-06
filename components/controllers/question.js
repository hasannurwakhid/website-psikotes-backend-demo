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

    const categoryIdInt = parseInt(categoryId, 10);

    if (!categoryIdInt || isNaN(categoryIdInt)) {
      return next({
        message: "id harus diisi dan bernilai integer yang valid",
        statusCode: 400,
      });
    }

    if (!categoryId || categoryId.trim() === "") {
      return next({
        message: "categoryId harus diisi!",
        statusCode: 400,
      });
    }

    const data = await getQuestionsByCategory({ categoryId });
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
    const validateImage = (image) => {
      const validTypes = ["image/jpeg", "image/png"];
      if (image && !validTypes.includes(image.mimetype)) {
        return false;
      }
      return true;
    };

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

    const pointInt = parseInt(point, 10);
    const categoryIdInt = parseInt(categoryId, 10);
    const correctAnswerInt = parseInt(correctAnswer, 10);

    if (!pointInt || isNaN(pointInt)) {
      return next({
        message: "Poin harus diisi dan bernilai integer yang valid",
        statusCode: 400,
      });
    }

    if (!categoryIdInt || isNaN(categoryIdInt)) {
      return next({
        message: "categoryId harus diisi dan bernilai integer yang valid",
        statusCode: 400,
      });
    }

    if (
      !correctAnswerInt ||
      isNaN(correctAnswerInt) ||
      correctAnswerInt < 1 ||
      correctAnswerInt > 5
    ) {
      return next({
        message:
          "correctAnswer harus diisi berupa integer dan nilainya antara 1 sampai 5",
        statusCode: 400,
      });
    }

    const imageQuestion = req?.files?.imageQuestion;
    const multipleChoiceImg1 = req?.files?.multipleChoiceImg1;
    const multipleChoiceImg2 = req?.files?.multipleChoiceImg2;
    const multipleChoiceImg3 = req?.files?.multipleChoiceImg3;
    const multipleChoiceImg4 = req?.files?.multipleChoiceImg4;
    const multipleChoiceImg5 = req?.files?.multipleChoiceImg5;

    if ((!question || question.trim() === "") && !imageQuestion) {
      return next({
        message: "question atau imageQuestion harus diisi salah satu",
        statusCode: 400,
      });
    }

    if (!validateImage(imageQuestion)) {
      return next({
        message:
          "Format imageQuestion tidak valid, hanya menerima JPEG dan PNG",
        statusCode: 400,
      });
    }

    if (
      (!multipleChoice1 || multipleChoice1.trim() === "") &&
      !multipleChoiceImg1
    ) {
      return next({
        message:
          "multipleChoice1 atau multipleChoiceImg1 harus diisi salah satu",
        statusCode: 400,
      });
    }

    if (!validateImage(multipleChoiceImg1)) {
      return next({
        message:
          "Format multipleChoiceImg1 tidak valid, hanya menerima JPEG dan PNG",
        statusCode: 400,
      });
    }

    if (
      (!multipleChoice2 || multipleChoice2.trim() === "") &&
      !multipleChoiceImg2
    ) {
      return next({
        message:
          "multipleChoice2 atau multipleChoiceImg2 harus diisi salah satu",
        statusCode: 400,
      });
    }

    if (!validateImage(multipleChoiceImg2)) {
      return next({
        message:
          "Format multipleChoiceImg2 tidak valid, hanya menerima JPEG dan PNG",
        statusCode: 400,
      });
    }

    if (
      (!multipleChoice3 || multipleChoice3.trim() === "") &&
      !multipleChoiceImg3
    ) {
      return next({
        message:
          "multipleChoice3 atau multipleChoiceImg3 harus diisi salah satu",
        statusCode: 400,
      });
    }

    if (!validateImage(multipleChoiceImg3)) {
      return next({
        message:
          "Format multipleChoiceImg3 tidak valid, hanya menerima JPEG dan PNG",
        statusCode: 400,
      });
    }

    if (
      (!multipleChoice4 || multipleChoice4.trim() === "") &&
      !multipleChoiceImg4
    ) {
      return next({
        message:
          "multipleChoice4 atau multipleChoiceImg4 harus diisi salah satu",
        statusCode: 400,
      });
    }

    if (!validateImage(multipleChoiceImg4)) {
      return next({
        message:
          "Format multipleChoiceImg4 tidak valid, hanya menerima JPEG dan PNG",
        statusCode: 400,
      });
    }

    if (
      (!multipleChoice5 || multipleChoice5.trim() === "") &&
      !multipleChoiceImg5
    ) {
      return next({
        message:
          "multipleChoice5 atau multipleChoiceImg5 harus diisi salah satu",
        statusCode: 400,
      });
    }

    if (!validateImage(multipleChoiceImg5)) {
      return next({
        message:
          "Format multipleChoiceImg5 tidak valid, hanya menerima JPEG dan PNG",
        statusCode: 400,
      });
    }

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
    const validateImage = (image) => {
      const validTypes = ["image/jpeg", "image/png"];
      if (image && !validTypes.includes(image.mimetype)) {
        return false;
      }
      return true;
    };

    const { question, point, categoryId } = req.body;
    const questionId = req?.params?.id;
    const imageQuestion = req?.files?.imageQuestion;

    const pointInt = parseInt(point, 10);
    const categoryIdInt = parseInt(categoryId, 10);
    const questionIdInt = parseInt(questionId, 10);

    if ((!question || question.trim() === "") && !imageQuestion) {
      return next({
        message: "question atau imageQuestion harus diisi salah satu",
        statusCode: 400,
      });
    }

    if (!validateImage(imageQuestion)) {
      return next({
        message:
          "Format imageQuestion tidak valid, hanya menerima JPEG dan PNG",
        statusCode: 400,
      });
    }

    if (!pointInt || isNaN(pointInt)) {
      return next({
        message: "point harus diisi dan bernilai integer yang valid",
        statusCode: 400,
      });
    }

    if (!categoryIdInt || isNaN(categoryIdInt)) {
      return next({
        message: "categoryId harus diisi dan bernilai integer yang valid",
        statusCode: 400,
      });
    }

    if (!questionIdInt || isNaN(questionIdInt)) {
      return next({
        message: "questionId harus diisi dan bernilai integer yang valid",
        statusCode: 400,
      });
    }

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

    const idInt = parseInt(id, 10);

    if (!idInt || isNaN(idInt)) {
      return next({
        message: "id harus diisi dan bernilai integer yang valid",
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
