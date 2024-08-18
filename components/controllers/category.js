const { getCategories } = require("../services/category");

exports.getCategories = async (req, res, next) => {
  try {
    const data = await getCategories();
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
