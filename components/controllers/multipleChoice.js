const { updateMultipleChoiceById } = require("../services/multipleChoice");

exports.updateMultipleChoiceById = async (req, res, next) => {
  try {
    const { description } = req.body;
    const imageMultipleChoice = req?.files?.imageMultipleChoice;
    const multipleChoiceId = req?.params?.id;

    if (!description && !imageMultipleChoice) {
      return next({
        message: "description atau imageMultipleChoice harus diisi salah satu",
        statusCode: 400,
      });
    }

    const data = await updateMultipleChoiceById(multipleChoiceId, {
      image: imageMultipleChoice,
      description,
    });

    res.status(200).json({
      message: "Succcess",
      data,
    });
  } catch (error) {
    next(error);
  }
};
