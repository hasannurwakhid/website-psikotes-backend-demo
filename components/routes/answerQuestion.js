const express = require("express");
const router = express.Router();
const { answerQuestion } = require("../controllers/answerHistory");
const { authMiddleware } = require("../../src/middleware/auth");

router.route("/").post(authMiddleware(["peserta"]), answerQuestion);

module.exports = router;
