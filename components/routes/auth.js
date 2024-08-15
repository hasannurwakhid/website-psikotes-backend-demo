const express = require("express");
const router = express.Router();
const { register, login, profile } = require("../controllers/auth");
const { authMiddleware } = require("../../src/middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.get(
  "/profile",
  authMiddleware(["peserta", "admin", "superadmin"]),
  profile
);

module.exports = router;
