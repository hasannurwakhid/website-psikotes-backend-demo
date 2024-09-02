const {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../repositories/category");

exports.getCategories = async () => {
  const categories = await getCategories();
  const data = categories.map((category) => {
    const questionCount = category.Questions.length;

    const { Questions, ...categoryWithoutQuestions } = category.toJSON();

    return {
      ...categoryWithoutQuestions,
      questionCount,
    };
  });
  return data;
};

exports.createCategory = async (payload) => {
  const data = await createCategory(payload);
  return data;
};

exports.updateCategory = async (id, payload) => {
  const data = await updateCategory(id, payload);
  if (data[0] === 0) {
    const error = new Error("Data tidak ditemukan");
    error.statusCode = 404;
    throw error;
  }
  return data[1];
};

exports.deleteCategory = async (id) => {
  const data = await deleteCategory(id);
  if (data === 0) {
    const error = new Error("Data tidak ditemukan");
    error.statusCode = 404;
    throw error;
  }

  return data;
};
