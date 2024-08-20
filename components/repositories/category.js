const { Category } = require("../../models");

exports.getCategories = async () => {
  const data = await Category.findAll();
  return data;
};

exports.createCategory = async (payload) => {
  const data = await Category.create(payload);
  return data;
};
