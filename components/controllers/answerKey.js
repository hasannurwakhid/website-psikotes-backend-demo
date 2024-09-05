const { udpateAnswerKeyById } = require("../services/answerKey");

exports.udpateAnswerKeyById = async (req, res, next) => {
  try {
    const id = req?.params?.id;
    const { multipleChoiceId } = req.body;

    const multipleChoiceIdInt = parseInt(multipleChoiceId, 10);
    const idInt = parseInt(id, 10);

    if (!idInt || isNaN(idInt)) {
      return next({
        message: "id harus diisi dan bernilai integer yang valid",
        statusCode: 400,
      });
    }

    if (!multipleChoiceIdInt || isNaN(multipleChoiceIdInt)) {
      return next({
        message: "multipleChoiceId harus diisi dan bernilai integer yang valid",
        statusCode: 400,
      });
    }

    const data = await udpateAnswerKeyById(idInt, {
      multipleChoiceId,
    });

    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
