const express = require("express");
const router = express.Router();

const {
  createUser,
  loginUserCtrl,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
} = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getAllUsers);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/:id", authMiddleware, isAdmin, getSingleUser);
router.delete("/:id", deleteUser);
router.put("/edit-user", authMiddleware, updateUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
