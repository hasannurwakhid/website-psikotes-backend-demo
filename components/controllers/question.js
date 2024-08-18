const {
  getQuestionsByCategory,
  getPesertaQuestions,
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

    const data = await getPesertaQuestions({ userId, pointTotal, isDone });
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
