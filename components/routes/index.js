// const express = require("express");
// const router = express.Router();

// const auth = require("../routes/auth");
// const categories = require("../routes/category");
// const question = require("../routes/question");
// const answerQuestion = require("../routes/answerQuestion");
// const point = require("../routes/totalPoint");

// router.use("/auth", auth);
// router.use("/categories", categories);
// router.use("/questions", question);
// router.use("/answerQuestion", answerQuestion);
// router.use("/point", point);

// module.exports = router;

const express = require("express");
const router = express.Router();

// const auth = require("../routes/auth");
// const categories = require("../routes/category");
// const question = require("../routes/question");
// const answerQuestion = require("../routes/answerQuestion");
// const point = require("../routes/totalPoint");

// router.use("/auth", auth);
// router.use("/categories", categories);
// router.use("/questions", question);
// router.use("/answerQuestion", answerQuestion);
// router.use("/point", point);

const pesertaRoutes = require("./peserta");
const adminRoutes = require("./admin");
const superadminRoutes = require("./superadmin");

router.use("/peserta", pesertaRoutes);
router.use("/admin", adminRoutes);
router.use("/superadmin", superadminRoutes);

module.exports = router;
