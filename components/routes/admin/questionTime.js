const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../../../src/middleware/auth");

const {
  getQuestionTime,
  updateQuestionTime,
} = require("../../controllers/questionTime");

router
  .route("/")
  .get(authMiddleware(["admin", "superadmin"]), getQuestionTime)
  .put(authMiddleware(["admin", "superadmin"]), updateQuestionTime);

module.exports = router;
