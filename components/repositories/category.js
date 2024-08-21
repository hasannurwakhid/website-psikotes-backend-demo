const { where } = require("sequelize");
const { Category } = require("../../models");

exports.getCategories = async () => {
  const data = await Category.findAll();
  return data;
};

exports.getCategoryById = async (id) => {
  const data = await Category.findOne({ where: { id } });
  return data;
};

exports.createCategory = async (payload) => {
  const data = await Category.create(payload);
  return data;
};

exports.updateCategory = async (id, payload) => {
  const data = await Category.update(payload, {
    where: { id },
    returning: true,
  });
  return data;
};

exports.deleteCategory = async (id) => {
  const data = await Category.destroy({ where: { id } });
  return data;
};
