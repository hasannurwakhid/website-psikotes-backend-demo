const { updateMultipleChoiceById } = require("../services/multipleChoice");

exports.updateMultipleChoiceById = async (req, res, next) => {
  try {
    const { description } = req.body;
    const imageMultipleChoice = req?.files.imageMultipleChoice;
    const multipleChoiceId = req?.params?.id;

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
