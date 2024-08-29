const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../../../src/middleware/auth");

const { getQuestionTime } = require("../../controllers/questionTime");

router.route("/").get(authMiddleware(["admin", "superadmin"]), getQuestionTime);

module.exports = router;
