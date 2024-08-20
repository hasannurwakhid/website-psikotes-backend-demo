const express = require("express");
const router = express.Router();
const { getCategories} = require("../controllers/category");
const { authMiddleware } = require("../../src/middleware/auth");

router
  .route("/")
  .get(authMiddleware(["peserta", "admin", "superadmin"]), getCategories);
// .post(authMiddleware(["admin", "superadmin"]), createCategory);

module.exports = router;
