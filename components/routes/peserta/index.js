const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
const answerQuestionRoutes = require("./answerQuestion");
const getQuestionPesertaRoutes = require("./question");
const calculatePointPesertaRoutes = require("./totalPoint");
const categoriesRoutes = require("./category");

// const categories = require("../routes/category");
// const question = require("../routes/question");
// const answerQuestion = require("../routes/answerQuestion");
// const point = require("../routes/totalPoint");

router.use("/auth", authRoutes);
router.use("/answerQuestion", answerQuestionRoutes);
router.use("/getPesertaQuestions", getQuestionPesertaRoutes);
router.use("/calculatePoint", calculatePointPesertaRoutes);
router.use("/categories", categoriesRoutes);

// router.use("/categories", categories);
// router.use("/questions", question);
// router.use("/answerQuestion", answerQuestion);
// router.use("/point", point);

module.exports = router;
