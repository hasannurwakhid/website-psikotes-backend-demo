const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
const categoryRoutes = require("./category");
const questionRoutes = require("./question");
const totalPointRoutes = require("./totalPoint");
const questionTimeRoutes = require("./questionTime");
const answerKeyRoutes = require("./answerKey");


// const categories = require("../routes/category");
// const question = require("../routes/question");
// const answerQuestion = require("../routes/answerQuestion");
// const point = require("../routes/totalPoint");

router.use("/auth", authRoutes);
router.use("/categories", categoryRoutes);
router.use("/questions", questionRoutes);
router.use("/totalPoints", totalPointRoutes);
router.use("/questionTimes", questionTimeRoutes);
router.use("/answerKeys", answerKeyRoutes);



// router.use("/categories", categories);
// router.use("/questions", question);
// router.use("/answerQuestion", answerQuestion);
// router.use("/point", point);

module.exports = router;
