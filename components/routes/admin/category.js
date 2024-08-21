const express = require("express");
const router = express.Router();
const {
  getCategories,
  deleteCategory,
  createCategory,
  updateCategory,
} = require("../../controllers/category");
const { authMiddleware } = require("../../../src/middleware/auth");

router.route("/").post(authMiddleware(["admin", "superadmin"]), createCategory);

router
  .route("/:id")
  .put(authMiddleware(["admin", "superadmin"]), updateCategory)
  .delete(authMiddleware(["admin", "superadmin"]), deleteCategory);

module.exports = router;
