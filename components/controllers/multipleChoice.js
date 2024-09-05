const { updateMultipleChoiceById } = require("../services/multipleChoice");

exports.updateMultipleChoiceById = async (req, res, next) => {
  try {
    const validateImage = (image) => {
      const validTypes = ["image/jpeg", "image/png"];
      if (image && !validTypes.includes(image.mimetype)) {
        return false;
      }
      return true;
    };

    const { description } = req.body;
    const imageMultipleChoice = req?.files?.imageMultipleChoice;
    const multipleChoiceId = req?.params?.id;

    const multipleChoiceIdInt = parseInt(multipleChoiceId, 10);

    if (!multipleChoiceIdInt || isNaN(multipleChoiceIdInt)) {
      return next({
        message: "multipleChoiceId harus diisi dan bernilai integer yang valid",
        statusCode: 400,
      });
    }

    if ((!description || description.trim() === "") && !imageMultipleChoice) {
      return next({
        message: "Description atau imageMultipleChoice harus diisi salah satu",
        statusCode: 400,
      });
    }

    if (!validateImage(imageMultipleChoice)) {
      return next({
        message:
          "Format imageMultipleChoice tidak valid, hanya menerima JPEG dan PNG",
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
