const express = require("express");
const router = express.Router();

const { udpateAnswerKeyById } = require("../../controllers/answerKey");
const { authMiddleware } = require("../../../src/middleware/auth");

router.put(
  "/:id",
  authMiddleware(["admin", "superadmin"]),
  udpateAnswerKeyById
);

module.exports = router;
