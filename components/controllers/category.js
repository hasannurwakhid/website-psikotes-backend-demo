const { getCategories, createCategory } = require("../services/category");

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

exports.createCategory = async (req, res, next) => {
  try {
    const { category } = req.body;

    if (category == "" || !category) {
      return next({
        message: "Category harus diisi!",
        statusCode: 400,
      });
    }

    const data = await createCategory({ category });
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
