const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../../../src/middleware/auth");
const { loginAdmin } = require("../../controllers/auth");

router.post("/login", loginAdmin);

module.exports = router;
