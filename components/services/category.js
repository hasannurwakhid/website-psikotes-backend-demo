const { getCategories, createCategory } = require("../repositories/category");

exports.getCategories = async () => {
  const data = await getCategories();
  return data;
};

exports.createCategory = async (payload) => {
  const data = await createCategory(payload);
  return data;
};
