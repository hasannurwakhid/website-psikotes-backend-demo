const { getQuestionTime } = require("../services/questionTime");

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
