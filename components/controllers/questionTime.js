const {
  getQuestionTime,
  updateQuestionTime,
} = require("../services/questionTime");

exports.getQuestionTime = async (req, res, next) => {
  try {
    const data = await getQuestionTime();
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateQuestionTime = async (req, res, next) => {
  try {
    const { questionTime } = req.body;
    if (!questionTime || questionTime.trim() === "") {
      return next({
        message: "questionTime harus diisi",
        statusCode: 400,
      });
    }
    const data = await updateQuestionTime({ questionTime });
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
