const { answerQuestion } = require("../services/answerHistory");

const { calculateTotalPoint } = require("../services/totalPoint");

exports.answerQuestion = async (req, res, next) => {
  try {
    const { multipleChoiceId } = req.body;
    const userId = req?.user?.id;
    const startTime = req?.user?.startTime;

    const multipleChoiceIdInt = parseInt(multipleChoiceId, 10);

    if (!multipleChoiceId || multipleChoiceId.trim() === "") {
      return next({
        message: "multipleChoiceId harus diisi!",
        statusCode: 400,
      });
    }

    if (!multipleChoiceIdInt || isNaN(multipleChoiceIdInt)) {
      return next({
        message: "multipleChoiceId harus diisi dan bernilai integer yang valid",
        statusCode: 400,
      });
    }

    if (
      req?.user?.isDone === true ||
      (req?.user?.timeToEnd && new Date() >= new Date(req?.user?.timeToEnd))
    ) {
      const data = await calculateTotalPoint({ startTime, userId });
      res.status(200).json({
        message: "Pengguna sudah mensubmit atau waktu telah habis",
        data,
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
