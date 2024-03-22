const express = require("express");
const router = express.Router();
const {
  createBooking,
  getBookingList,
  cancelBooking,
} = require("../controller/bookingController");
const userAuth = require("../middleware/userAuth");

router.post("/create", userAuth, createBooking);
router.get("/get/:farmName", getBookingList);
router.patch("/cancel/:bookingId", userAuth, cancelBooking);

module.exports = router;
