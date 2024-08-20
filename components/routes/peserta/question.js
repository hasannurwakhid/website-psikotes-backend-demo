const express = require("express");
const router = express.Router();
const { getPesertaQuestions } = require("../../controllers/question");
const { authMiddleware } = require("../../../src/middleware/auth");

router.get("/", authMiddleware(["peserta"]), getPesertaQuestions);

module.exports = router;
