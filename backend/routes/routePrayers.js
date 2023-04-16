const express = require("express");
const router = express.Router();
const {
  getPrayer,
  postPrayer,
  putPrayer,
  deletePrayer,
} = require("../controller/prayerController");

router.route("/").get(getPrayer).post(postPrayer);
router.route("/:id").put(putPrayer).delete(deletePrayer);

module.exports = router;
