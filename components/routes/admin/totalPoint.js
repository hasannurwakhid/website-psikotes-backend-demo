const express = require("express");
const router = express.Router();
const { getAveragePesertaPoints } = require("../../controllers/totalPoint");
const { authMiddleware } = require("../../../src/middleware/auth");

router.get(
  "/average",
  authMiddleware(["admin", "superadmin"]),
  getAveragePesertaPoints
);

module.exports = router;
