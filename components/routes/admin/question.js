const express = require("express");
const router = express.Router();

const {
  createQuestions,
  updateQuestionById,
  deleteQuestionById,
} = require("../../controllers/question");

const {
  updateMultipleChoiceById,
} = require("../../controllers/multipleChoice");

const { authMiddleware } = require("../../../src/middleware/auth");

router
  .route("/")
  .post(authMiddleware(["admin", "superadmin"]), createQuestions);

router
  .route("/:id")
  .put(authMiddleware(["admin", "superadmin"]), updateQuestionById)
  .delete(authMiddleware(["admin", "superadmin"]), deleteQuestionById);

router
  .route("/multipleChoice/:id")
  .put(authMiddleware(["admin", "superadmin"]), updateMultipleChoiceById);

module.exports = router;
