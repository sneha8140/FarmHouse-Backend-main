const express = require("express");
const router = express.Router();
const {
  userLogin,
  createUser,
  getUserProfile,
  deleteUser,
  updateUser,
} = require("../controller/userController");
const userAuth = require("../middleware/userAuth");

router.post("/register", createUser);
router.post("/login", userLogin);
router.get("/get", userAuth, getUserProfile);
router.patch("/update", userAuth, updateUser);
router.delete("/delete", userAuth, deleteUser);

module.exports = router;
