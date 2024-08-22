const express = require("express");
const router = express.Router();

const {
  createQuestions,
  deleteQuestionById,
} = require("../../controllers/question");
const { authMiddleware } = require("../../../src/middleware/auth");

router
  .route("/")
  .post(authMiddleware(["admin", "superadmin"]), createQuestions);

router
  .route("/:id")
  .delete(authMiddleware(["admin", "superadmin"]), deleteQuestionById);

module.exports = router;
