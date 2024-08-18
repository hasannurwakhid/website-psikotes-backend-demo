const { getCategories } = require("../repositories/category");

exports.getCategories = async () => {
  const data = await getCategories();
  return data;
};