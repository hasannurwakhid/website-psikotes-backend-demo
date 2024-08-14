const express = require("express");
const router = express.Router();
const { register } = require("../controllers/auth");
const { authMiddleware } = require("../../src/middleware/auth");

router.post("/register", register);
// router.post("/login", login);
// router.get(
//   "/profile",
//   authMiddleware(["user", "admin", "superadmin"]),
//   profile
// );

module.exports = router;
