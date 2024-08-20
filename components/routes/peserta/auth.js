const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../../../src/middleware/auth");

const { loginPeserta } = require("../../controllers/auth");

router.post("/login", loginPeserta);

module.exports = router;
