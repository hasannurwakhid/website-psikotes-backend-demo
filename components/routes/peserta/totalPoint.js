const express = require("express");
const router = express.Router();
const {
  calculateTotalPoint,
  getAveragePesertaPoints,
} = require("../../controllers/totalPoint");
const { authMiddleware } = require("../../../src/middleware/auth");

router.get("/calculatePoint", authMiddleware(["peserta"]), calculateTotalPoint);

// router.get(
//   "/average",
//   authMiddleware(["admin", "superadmin"]),
//   getAveragePesertaPoints
// );

module.exports = router;
