const { Category } = require("../../models");

exports.getCategories = async () => {
  const data = await Category.findAll();
  return data;
};
