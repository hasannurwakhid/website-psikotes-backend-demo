const express = require("express");
const router = express.Router();
const {
  getCategories,
  deleteCategory,
  createCategory,
  updateCategory,
} = require("../../controllers/category");

const { getQuestionsByCategory } = require("../../controllers/question");

const { authMiddleware } = require("../../../src/middleware/auth");

router.route("/").post(authMiddleware(["admin", "superadmin"]), createCategory);

router
  .route("/:id")
  .put(authMiddleware(["admin", "superadmin"]), updateCategory)
  .delete(authMiddleware(["admin", "superadmin"]), deleteCategory);

router.post(
  "/questions",
  authMiddleware(["admin", "superadmin"]),
  getQuestionsByCategory
);

module.exports = router;
