const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  getOthers,
} = require("../controller/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

//search friend feature
router.get("/", getOthers);

module.exports = router;
