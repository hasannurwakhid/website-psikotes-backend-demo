const express = require("express");
const router = express.Router();
const {
  adminRegister,
  getAllAdmins,
  deleteAdminById,
  updateAdminAccoundtById,
} = require("../../controllers/auth");
const { authMiddleware } = require("../../../src/middleware/auth");

router
  .route("/admin")
  .post(authMiddleware(["superadmin"]), adminRegister)
  .get(authMiddleware(["superadmin"]), getAllAdmins);

router
  .route("/admin/:id")
  .put(authMiddleware(["superadmin"]), updateAdminAccoundtById)
  .delete(authMiddleware(["superadmin"]), deleteAdminById);

module.exports = router;
