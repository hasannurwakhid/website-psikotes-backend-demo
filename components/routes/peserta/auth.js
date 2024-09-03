const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../../../src/middleware/auth");
const {
  loginPeserta,
  registerPeserta,
  profile,
} = require("../../controllers/auth");

router.post("/login", loginPeserta);
router.post("/register", registerPeserta);
router.get("/profile", authMiddleware(["peserta"]), profile);

module.exports = router;
