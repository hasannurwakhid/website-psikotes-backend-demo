const express = require("express");
const router = express.Router();
const { answerQuestion } = require("../../controllers/answerHistory");
const { checkIsDone } = require("../../controllers/auth");

const { authMiddleware } = require("../../../src/middleware/auth");

router.route("/").post(authMiddleware(["peserta"]), answerQuestion);

router.route("/isDone").get(authMiddleware(["peserta"]), checkIsDone);

module.exports = router;
