const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../../../src/middleware/auth");
const {
  loginAdmin,
  getAllPeserta,
  deletePesertaById,
} = require("../../controllers/auth");

router.post("/login", loginAdmin);

router
  .route("/peserta")
  .get(authMiddleware(["admin", "superadmin"]), getAllPeserta);

router
  .route("/peserta/:id")
  .delete(authMiddleware(["admin", "superadmin"]), deletePesertaById);

module.exports = router;
