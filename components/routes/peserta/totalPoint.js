const express = require("express");
const router = express.Router();
const {
  manualSubmit,
  getAveragePesertaPoints,
} = require("../../controllers/totalPoint");
const { authMiddleware } = require("../../../src/middleware/auth");

router.get("/", authMiddleware(["peserta"]), manualSubmit);

// router.get(
//   "/average",
//   authMiddleware(["admin", "superadmin"]),
//   getAveragePesertaPoints
// );

module.exports = router;
