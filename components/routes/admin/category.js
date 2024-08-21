const express = require("express");
const router = express.Router();
const { getCategories, createCategory } = require("../../controllers/category");
const { authMiddleware } = require("../../../src/middleware/auth");

router.route("/").post(authMiddleware(["admin", "superadmin"]), createCategory);

module.exports = router;
