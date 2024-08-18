const { answerQuestion } = require("../services/answerHistory");

exports.answerQuestion = async (req, res, next) => {
  try {
    const { multipleChoiceId } = req.body;
    const userId = req?.user?.id;

    if (multipleChoiceId == "" || !multipleChoiceId) {
      return next({
        message: "multipleChoiceId harus diisi!",
        statusCode: 400,
      });
    }
    const data = await answerQuestion({ userId, multipleChoiceId });
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
