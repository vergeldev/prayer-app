const express = require("express");
const router = express.Router();
const {
  getPrayer,
  postPrayer,
  putPrayer,
  deletePrayer,
} = require("../controller/prayerController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getPrayer).post(protect, postPrayer);
router.route("/:id").put(protect, putPrayer).delete(protect, deletePrayer);

module.exports = router;
