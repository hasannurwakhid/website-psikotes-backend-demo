const {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../services/category");

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

exports.updateCategory = async (req, res, next) => {
  try {
    const { category } = req.body;
    const id = req?.params?.id;

    if (category == "" || !category) {
      return next({
        message: "Category harus diisi!",
        statusCode: 400,
      });
    }

    const data = await updateCategory(id, { category });

    res.status(200).json({
      message: "Success",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    const id = req?.params?.id;

    const data = await deleteCategory(id);

    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
