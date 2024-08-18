const express = require("express");
const router = express.Router();
const {
  getQuestionsByCategory,
  getPesertaQuestions,
} = require("../controllers/question");
const { authMiddleware } = require("../../src/middleware/auth");

router.post(
  "/getQuestionsByCategory",
  authMiddleware(["peserta", "admin", "superadmin"]),
  getQuestionsByCategory
);

router.get(
  "/getPesertaQuestions",
  authMiddleware(["peserta", "admin", "superadmin"]),
  getPesertaQuestions
);

module.exports = router;
