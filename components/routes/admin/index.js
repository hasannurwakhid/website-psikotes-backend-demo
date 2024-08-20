const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
// const categories = require("../routes/category");
// const question = require("../routes/question");
// const answerQuestion = require("../routes/answerQuestion");
// const point = require("../routes/totalPoint");

router.use("/auth", authRoutes);
// router.use("/categories", categories);
// router.use("/questions", question);
// router.use("/answerQuestion", answerQuestion);
// router.use("/point", point);

module.exports = router;
