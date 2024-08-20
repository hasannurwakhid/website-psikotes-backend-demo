const express = require("express");
const router = express.Router();
const {
  register,
  adminRegister,
  loginPeserta,
  profile,
  getAllAdmins,
  getAllPeserta,
  updateAdminAccoundtById,
  deleteAdminById,
  deletePesertaById,
} = require("../controllers/auth");
const { authMiddleware } = require("../../src/middleware/auth");

router.post("/register", register);
router.post("/login", loginPeserta);
router.get(
  "/profile",
  authMiddleware(["peserta", "admin", "superadmin"]),
  profile
);

router
  .route("/peserta")
  .get(authMiddleware(["admin", "superadmin"]), getAllPeserta);

router
  .route("/admins")
  .get(authMiddleware(["superadmin"]), getAllAdmins)
  .post(authMiddleware(["superadmin"]), adminRegister);

router
  .route("/admins/:id")
  .put(authMiddleware(["superadmin"]), updateAdminAccoundtById)
  .delete(authMiddleware(["superadmin"]), deleteAdminById);

router
  .route("/peserta/:id")
  .delete(authMiddleware(["admin", "superadmin"]), deletePesertaById);

module.exports = router;
